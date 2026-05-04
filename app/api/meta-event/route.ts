import { NextResponse } from 'next/server'
import crypto from 'crypto'

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID
const ACCESS_TOKEN = process.env.META_CAPI_TOKEN

// SHA-256 hash required by Meta for all PII (email, phone)
function hashData(value: string) {
  if (!value) return null
  return crypto.createHash('sha256')
    .update(String(value).trim().toLowerCase())
    .digest('hex')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      eventName,    // e.g. 'Lead', 'Purchase'
      eventId,      // unique ID matching pixel eventID
      email,        // from form — will be hashed
      phone,        // from form — will be hashed
      value,        // monetary value
      currency,     // 'USD'
      contentName,  // human-readable event label
      sourceUrl,    // window.location.href
      userAgent,    // navigator.userAgent
      ipAddress,    // optional — pass from req.headers
      fbp,          // _fbp cookie value
      fbc,          // _fbc cookie value
    } = body

    // Get real IP from request headers (Next.js App Router style)
    const clientIp = ipAddress ||
      req.headers.get('x-forwarded-for')?.split(',')[0] ||
      null

    const payload = {
      data: [{
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: 'website',
        event_source_url: sourceUrl,
        user_data: {
          ...(email && { em: [hashData(email)] }),
          ...(phone && { ph: [hashData(phone)] }),
          ...(clientIp && { client_ip_address: clientIp }),
          ...(userAgent && { client_user_agent: userAgent }),
          ...(fbp && { fbp }),
          ...(fbc && { fbc }),
        },
        custom_data: {
          ...(value && { value }),
          ...(currency && { currency }),
          ...(contentName && { content_name: contentName }),
        }
      }]
    }

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    )

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('[Meta CAPI] Error:', error)
    return NextResponse.json({ error: 'Failed to send CAPI event' }, { status: 500 })
  }
}
