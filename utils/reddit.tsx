// utils/reddit.tsx
// Core Reddit Pixel tracking utility for Launchieve
// Fires rdt('track') with optional advanced matching on every call
 
export const trackRedditEvent = (
  eventName: string, 
  advancedMatch: { email?: string; phoneNumber?: string; externalId?: string } = {}, 
  eventData: Record<string, any> = {}
) => {
  if (typeof window === 'undefined' || !(window as any).rdt) return;
 
  const pixelId = process.env.NEXT_PUBLIC_REDDIT_PIXEL_ID || 'a2_iv0264flcj9n';

  // Re-init with advanced matching if user signals are available
  // This updates the identity context before firing the event
  const matchPayload: any = {};
  if (advancedMatch.email)       matchPayload.email       = advancedMatch.email;
  if (advancedMatch.phoneNumber) matchPayload.phoneNumber = advancedMatch.phoneNumber;
  if (advancedMatch.externalId)  matchPayload.externalId  = advancedMatch.externalId;
 
  if (Object.keys(matchPayload).length > 0) {
    (window as any).rdt('init', pixelId, matchPayload);
  } else {
    // Basic init if no payload provided, to ensure context is set
    (window as any).rdt('init', pixelId);
  }
 
  // Fire the event with optional event-level data
  (window as any).rdt('track', eventName, eventData);
};
