"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/ui-tabs";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";
import { SanitizedHTML } from "@/components/ui/sanitized-html";
import { Bell, CheckCircle } from "lucide-react";

type NotificationStatus = {
  user_id: string;
  notification_id: string;
  is_read: boolean;
  read_at: string | null;
  created_at: string;
  notification: {
    id: string;
    title: string;
    content_type: string;
    content_data: string;
    created_at: string;
    created_by_user_id: string;
  };
};

type PaginatedResponse = {
  notifications: NotificationStatus[];
  pagination: {
    page: number;
    limit: number;
    totalCount: number;
    totalPages: number;
  };
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchNotifications = async (tabValue: string, pageNum: number) => {
    try {
      setLoading(true);

      // Build query parameters
      const params = new URLSearchParams();
      params.append("page", pageNum.toString());
      params.append("limit", "10");

      // If tab is not 'all', filter by read status
      if (tabValue === "unread") {
        params.append("read", "false");
      } else if (tabValue === "read") {
        params.append("read", "true");
      }

      const response = await fetch(`/api/notifications?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Failed to fetch notifications");
      }

      const data: PaginatedResponse = await response.json();
      setNotifications(data.notifications);
      setTotalPages(data.pagination.totalPages);
      setPage(data.pagination.page);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      toast.error("Failed to load notifications");
    } finally {
      setLoading(false);
    }
  };

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
            ? {
                ...notification,
                is_read: true,
                read_at: new Date().toISOString(),
              }
            : notification,
        ),
      );

      toast.success("Notification marked as read");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to mark as read",
      );
    }
  };

  // Initialize with all notifications on component mount
  useEffect(() => {
    fetchNotifications(activeTab, page);
  }, []);

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    fetchNotifications(value, 1); // Reset to first page when changing tabs
  };

  // Handle pagination
  const goToPage = (pageNum: number) => {
    fetchNotifications(activeTab, pageNum);
  };

  const renderContent = (notification: NotificationStatus) => {
    switch (notification.notification.content_type) {
      case "text":
        return <p className="mt-2">{notification.notification.content_data}</p>;

      case "html":
        return (
          <div className="mt-2">
            <SanitizedHTML html={notification.notification.content_data} />
          </div>
        );

      case "image_url":
        return (
          <div className="mt-2">
            <img
              src={notification.notification.content_data}
              alt="Notification"
              className="max-h-32 rounded-md"
            />
          </div>
        );

      default:
        return <p className="mt-2">{notification.notification.content_data}</p>;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-primary" />
            <CardTitle>Notifications</CardTitle>
          </div>
          <CardDescription>
            View and manage your system notifications
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={handleTabChange}
          >
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="read">Read</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              {renderNotificationList()}
            </TabsContent>

            <TabsContent value="unread" className="mt-0">
              {renderNotificationList()}
            </TabsContent>

            <TabsContent value="read" className="mt-0">
              {renderNotificationList()}
            </TabsContent>
          </Tabs>
        </CardContent>

        {totalPages > 1 && (
          <CardFooter className="flex justify-center gap-2">
            <Button
              variant="outline"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </Button>
            <span className="flex items-center px-2">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );

  function renderNotificationList() {
    if (loading) {
      return (
        <div className="flex justify-center py-12">
          <Spinner size="lg" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="p-4 bg-destructive/10 rounded-md text-center text-destructive">
          {error}
        </div>
      );
    }

    if (notifications.length === 0) {
      return (
        <div className="text-center py-12 text-muted-foreground">
          No notifications to display.
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {notifications.map((notificationStatus) => (
          <div
            key={notificationStatus.notification_id}
            className={`p-4 rounded-lg border ${
              notificationStatus.is_read
                ? "bg-background"
                : "bg-primary/5 border-primary/20"
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-medium">
                  {notificationStatus.notification.title}
                </h3>
                {renderContent(notificationStatus)}
                <div className="mt-3 text-xs text-muted-foreground">
                  {formatDistanceToNow(
                    new Date(notificationStatus.notification.created_at),
                    { addSuffix: true },
                  )}
                </div>
              </div>

              {!notificationStatus.is_read && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-4"
                  onClick={() =>
                    handleMarkAsRead(notificationStatus.notification_id)
                  }
                >
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Mark as read
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
