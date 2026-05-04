"use client";

import { useEffect } from "react";
import { trackEvent } from "@/utils/meta";

export default function CalendlyTracker() {
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event === "calendly.event_scheduled") {
        // Booking confirmed — fire Lead
        trackEvent(
          "Lead",
          {
            content_name: "Discovery Call Booked",
            content_category: "Development Service",
          },
          { contentName: "Discovery Call Booked" }
        );

        // Also fire Contact
        trackEvent(
          "Contact",
          {
            content_name: "Discovery Call Booked",
            content_category: "Development Service",
          },
          { contentName: "Discovery Call Booked" }
        );
      }
    };

    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, []);

  return null;
}
