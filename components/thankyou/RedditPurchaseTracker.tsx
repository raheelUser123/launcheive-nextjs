"use client";

import { useEffect } from "react";
import { trackRedditEvent } from "@/utils/reddit";

export default function RedditPurchaseTracker() {
  useEffect(() => {
    // Attempt to get user signals from sessionStorage
    const email = sessionStorage.getItem('checkout_email') || sessionStorage.getItem('audit_email') || '';
    const phone = sessionStorage.getItem('checkout_phone') || sessionStorage.getItem('audit_phone') || '';
    
    const isPurchase = !!sessionStorage.getItem('checkout_email');

    if (isPurchase) {
      // fire Purchase for Premium Audit
      trackRedditEvent(
        'Purchase',
        { email, phoneNumber: phone },
        {
          value: 149,
          currency: 'USD',
          itemCount: 1
        }
      );
    } else {
      // Fire Lead if it was a Free Audit redirect (and Lead hasn't been fired yet - though we fire it in handler too)
      trackRedditEvent(
        'Lead',
        { email, phoneNumber: phone }
      );
    }
    
    // Clear signals after tracking to prevent duplicate firing on refresh
    // sessionStorage.removeItem('checkout_email');
    // sessionStorage.removeItem('checkout_phone');
    // sessionStorage.removeItem('audit_email');
    // sessionStorage.removeItem('audit_phone');
    
  }, []);

  return null;
}
