'use client';

import { useState, useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { toast } from 'sonner';

interface UseAutoLogoutOptions {
  timeoutMinutes?: number;
  enabled?: boolean;
  warningMinutes?: number;
}

export function useAutoLogout({
  timeoutMinutes = 30,
  enabled = true,
  warningMinutes = 5
}: UseAutoLogoutOptions = {}) {
  const [lastActivity, setLastActivity] = useState<Date>(new Date());
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [countdownTimer, setCountdownTimer] = useState<number | null>(null);
  
  // Convert minutes to milliseconds
  const timeoutMs = timeoutMinutes * 60 * 1000;
  const warningMs = warningMinutes * 60 * 1000;
  
  // Track user activity
  const handleUserActivity = () => {
    setLastActivity(new Date());
    setShowWarning(false);
    if (countdownTimer !== null) {
      setCountdownTimer(null);
    }
  };
  
  // Setup activity tracking
  useEffect(() => {
    if (!enabled) return;
    
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    // Add event listeners
    events.forEach(event => {
      window.addEventListener(event, handleUserActivity);
    });
    
    return () => {
      // Remove event listeners on cleanup
      events.forEach(event => {
        window.removeEventListener(event, handleUserActivity);
      });
    };
  }, [enabled]);
  
  // Check for inactivity
  useEffect(() => {
    if (!enabled) return;
    
    const interval = setInterval(() => {
      const now = new Date();
      const inactiveTime = now.getTime() - lastActivity.getTime();
      
      // If showing warning, update countdown timer
      if (showWarning) {
        const remainingMs = timeoutMs - inactiveTime;
        const remainingSec = Math.ceil(remainingMs / 1000);
        setCountdownTimer(remainingSec > 0 ? remainingSec : 0);
        
        // Auto logout when time is up
        if (remainingMs <= 0) {
          clearInterval(interval);
          toast.info('You have been logged out due to inactivity.');
          signOut({ callbackUrl: '/login' });
        }
      }
      // Show warning before timeout
      else if (inactiveTime >= timeoutMs - warningMs) {
        setShowWarning(true);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [enabled, lastActivity, showWarning, timeoutMs, warningMs]);
  
  // Reset the timer after user interaction
  const resetTimer = () => {
    handleUserActivity();
  };
  
  return {
    showWarning,
    countdownTimer,
    resetTimer,
    timeoutMinutes
  };
}
