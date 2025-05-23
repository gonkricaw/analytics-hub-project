"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Spinner } from "@/components/ui/spinner";
import { Bell } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import * as Sentry from "@sentry/nextjs";

type Notification = {
  notification_id: string;
  notification: {
    id: string;
    title: string;
    content_type: string;
    content_data: string;
    created_at: string;
  };
  is_read: boolean;
};

interface NotificationDropdownProps {
  limit?: number;
  count?: number;
}

export function NotificationDropdown({ limit = 5, count }: NotificationDropdownProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unreadCount, setUnreadCount] = useState(count || 0);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Update unreadCount when count prop changes
  useEffect(() => {
    if (count !== undefined) {
      setUnreadCount(count);
    }
  }, [count]);

  const fetchNotifications = async () => {
    try {
      setLoading(true);

      // Fetch only unread notifications with the specified limit
      const response = await fetch(
        `/api/notifications?read=false&limit=${limit}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch notifications");
      }

      const data = await response.json();
      setNotifications(data.notifications);
      setUnreadCount(data.pagination.totalCount);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchNotifications();
    }
  }, [isOpen, limit]);

  const handleMarkAsRead = async (notificationId: string) => {
    try {
      const response = await fetch(
        `/api/notifications/${notificationId}/mark-as-read`,
        {
          method: "POST",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to mark notification as read");
      }

      // Update the notification in the state
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.notification_id === notificationId
            ? { ...notification, is_read: true }
            : notification,
        ),
      );

      // Decrease the unread count
      setUnreadCount((prevCount) => Math.max(0, prevCount - 1));
    } catch (err) {
      console.error("Error marking notification as read:", err);
    }
  };

  const viewAllNotifications = () => {
    setIsOpen(false);
    router.push("/notifications");
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 border-b">
          <h3 className="font-medium">Notifications</h3>
        </div>

        <div className="max-h-80 overflow-auto">
          {loading ? (
            <div className="flex justify-center p-4">
              <Spinner size="sm" />
            </div>
          ) : error ? (
            <div className="p-4 text-sm text-destructive">{error}</div>
          ) : notifications.length === 0 ? (
            <div className="p-4 text-sm text-muted-foreground text-center">
              No unread notifications.
            </div>
          ) : (
            <AnimatePresence>
              {notifications.map((notification) => (
                <motion.div
                  key={notification.notification_id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 border-b hover:bg-accent/50 cursor-pointer"
                  onClick={() => handleMarkAsRead(notification.notification_id)}
                >
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <div>
                      <h4 className="text-sm font-medium line-clamp-1">
                        {notification.notification.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                        {notification.notification.content_type === "text"
                          ? notification.notification.content_data
                          : "View notification for details"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatDistanceToNow(
                          new Date(notification.notification.created_at),
                          { addSuffix: true },
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        <div className="p-2 border-t">
          <Button
            variant="ghost"
            size="sm"
            className="w-full"
            onClick={viewAllNotifications}
          >
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
