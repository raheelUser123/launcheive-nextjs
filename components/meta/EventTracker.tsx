"use client";

import { useEffect } from "react";
import { trackEvent } from "@/utils/meta";

interface EventTrackerProps {
  eventName: string;
  pixelData?: Record<string, any>;
  capiData?: Record<string, any>;
}

export default function EventTracker({ eventName, pixelData = {}, capiData = {} }: EventTrackerProps) {
  useEffect(() => {
    trackEvent(eventName, pixelData, capiData);
  }, [eventName, JSON.stringify(pixelData), JSON.stringify(capiData)]);

  return null;
}
