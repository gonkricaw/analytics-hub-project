"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface DigitalClockProps {
  className?: string;
  format24Hour?: boolean;
  showSeconds?: boolean;
  showDate?: boolean;
}

export function DigitalClock({
  className,
  format24Hour = true,
  showSeconds = true,
  showDate = true,
}: DigitalClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const timeFormat = format24Hour ? "HH:mm" : "hh:mm a";
  const fullTimeFormat = showSeconds ? `${timeFormat}:ss` : timeFormat;
  const dateFormat = "EEEE, MMMM d, yyyy";

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="text-2xl font-bold">{format(time, fullTimeFormat)}</div>
      {showDate && (
        <div className="text-sm text-muted-foreground mt-1">
          {format(time, dateFormat)}
        </div>
      )}
    </div>
  );
}
