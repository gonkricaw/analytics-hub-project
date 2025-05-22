"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAutoLogout } from "@/hooks/useAutoLogout";

export default function AutoLogoutWarning() {
  const { showWarning, countdownTimer, resetTimer, timeoutMinutes } =
    useAutoLogout({
      timeoutMinutes: 30, // 30 minutes of inactivity before logout
      warningMinutes: 5, // Show warning 5 minutes before logout
    });

  // Format countdown timer as MM:SS
  const formatTime = (seconds: number | null): string => {
    if (seconds === null) return "";

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Dialog open={showWarning} onOpenChange={() => {}}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Session Timeout Warning</DialogTitle>
          <DialogDescription>
            Your session is about to expire due to inactivity.
          </DialogDescription>
        </DialogHeader>
        <div className="text-center my-6">
          <p className="mb-2">You will be automatically logged out in:</p>
          <p className="text-2xl font-bold text-red-500">
            {formatTime(countdownTimer)}
          </p>
        </div>
        <DialogFooter>
          <Button onClick={resetTimer}>Stay Logged In</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
