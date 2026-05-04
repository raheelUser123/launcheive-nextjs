// utils/meta.js
// Core Meta tracking utility for Launchieve
// Fires pixel (browser) + CAPI (server) together for every event

// ── Read Facebook browser cookies ──────────────────
export const getCookie = (name: string) => {
  if (typeof document === 'undefined') return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
  return null
}

// ── Generate unique event ID for deduplication ──────
// Same ID passed to both pixel and CAPI so Meta counts it once
export const generateEventId = () => {
  return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// ── Main tracking function ───────────────────────────

interface PixelData {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

interface CapiData {
  email?: string | null;
  phone?: string | null;
  value?: number;
  currency?: string;
  contentName?: string;
  [key: string]: any;
}

// pixelData  = object passed to window.fbq()
// capiData   = object with user info for server-side event
export const trackEvent = async (eventName: string, pixelData: PixelData = {}, capiData: CapiData = {}) => {
  const eventId = generateEventId()

  // 1. Fire browser pixel with eventID for deduplication
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, pixelData, { eventID: eventId })
  }

  // 2. Fire server-side CAPI with same eventId
  try {
    await fetch('/api/meta-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        eventId,
        email: capiData.email || null,
        phone: capiData.phone || null,
        value: capiData.value || 0,
        currency: capiData.currency || 'USD',
        contentName: capiData.contentName || '',
        sourceUrl: window.location.href,
        userAgent: navigator.userAgent,
        fbp: getCookie('_fbp'),
        fbc: getCookie('_fbc'),
      })
    })
  } catch (err) {
    console.error('[Meta CAPI] Failed to send event:', err)
  }
}
