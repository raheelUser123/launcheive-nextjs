"use client";

import { useEffect } from "react";
import { trackRedditEvent } from "@/utils/reddit";

interface RedditEventTrackerProps {
  eventName: string;
  metadata?: Record<string, any>;
}

export default function RedditEventTracker({ eventName, metadata = {} }: RedditEventTrackerProps) {
  useEffect(() => {
    trackRedditEvent(eventName, metadata);
  }, [eventName, JSON.stringify(metadata)]);

  return null;
}
