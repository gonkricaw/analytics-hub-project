"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface DigitalClockProps {
  className?: string;
  format24Hour?: boolean;
  showDate?: boolean;
}

export function DigitalClock({
  className,
  format24Hour = true,
  showDate = true,
}: DigitalClockProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  // Placeholders for server and initial client render
  let initialTimeString: string;
  let initialAmPmString: string = "";
  const initialDateString: string = "Loading date...";

  if (format24Hour) {
    initialTimeString = "00:00";
  } else {
    initialTimeString = "00:00";
    initialAmPmString = "AM";
  }

  // State for formatted time parts
  const [formattedTime, setFormattedTime] = useState(initialTimeString);
  const [formattedAmPm, setFormattedAmPm] = useState(initialAmPmString);
  const [formattedDate, setFormattedDate] = useState(initialDateString);

  useEffect(() => {
    // This effect runs only on the client after the component has mounted
    setIsClient(true);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  const dateFormatString = "EEEE, MMMM d, yyyy";

  useEffect(() => {
    if (isClient) {
      const now = currentTime;

      const mainTimeFormat = format24Hour ? "HH:mm" : "hh:mm";
      setFormattedTime(format(now, mainTimeFormat));

      if (!format24Hour) {
        setFormattedAmPm(format(now, "a").toUpperCase());
      } else {
        setFormattedAmPm("");
      }

      if (showDate) {
        setFormattedDate(format(now, dateFormatString));
      } else {
        setFormattedDate("");
      }
    }
  }, [currentTime, isClient, format24Hour, showDate, dateFormatString]);

  return (
    <div className={cn("flex flex-col items-center font-mono text-center", className)}>
      <div className="flex items-baseline">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none">
          {isClient ? formattedTime : initialTimeString}
        </div>
        {!format24Hour && (
          <div className="text-lg sm:text-xl md:text-2xl font-medium ml-2 sm:ml-3">
            {isClient ? formattedAmPm : initialAmPmString}
          </div>
        )}
      </div>
      {showDate && formattedDate && (
        <div className="text-xs sm:text-sm md:text-base text-slate-300/90 mt-2">
          {isClient ? formattedDate : initialDateString}
        </div>
      )}
    </div>
  );
}
