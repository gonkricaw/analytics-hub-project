"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { Marquee } from "@/components/ui/marquee";
import { DigitalClock } from "@/components/ui/digital-clock";
import { Carousel } from "@/components/ui/carousel";
import { Chart } from "@/components/ui/chart";
import { formatDistanceToNow } from "date-fns";
import { Users, LineChart, Menu, LogIn } from "lucide-react";

type SystemConfig = {
  marquee_text: string;
  jumbotron_images: string[];
  app_name: string;
};

type AnalyticsData = {
  activeUsers: number;
  loginStats: number;
  topMenus: Array<{ name: string; count: number }>;
  recentNotifications: Array<{ title: string; date: string }>;
};

export default function HomePage() {
  const { data: session } = useSession();
  const [systemConfig, setSystemConfig] = useState<SystemConfig>({
    marquee_text:
      "Welcome to Indonet Analytics Hub - Loading system announcements...",
    jumbotron_images: [],
    app_name: "Indonet Analytics Hub",
  });

  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    activeUsers: 0,
    loginStats: 0,
    topMenus: [],
    recentNotifications: [],
  });

  const [loading, setLoading] = useState(true);

  // Fetch system configurations
  useEffect(() => {
    const fetchSystemConfig = async () => {
      try {
        const response = await fetch("/api/system-configurations");
        if (response.ok) {
          const data = await response.json();
          // Convert the array of key-value pairs to an object
          const configObj = data.reduce(
            (
              acc: Record<string, unknown>,
              item: { key: string; value: string },
            ) => {
              try {
                // Try to parse as JSON first (for arrays and objects)
                acc[item.key] = JSON.parse(item.value);
              } catch {
                // If not valid JSON, use as string
                acc[item.key] = item.value;
              }
              return acc;
            },
            {},
          );

          setSystemConfig({
            marquee_text:
              configObj.marquee_text || "Welcome to Indonet Analytics Hub",
            jumbotron_images: configObj.jumbotron_images || [],
            app_name: configObj.app_name || "Indonet Analytics Hub",
          });
        }
      } catch (error) {
        console.error("Error fetching system configurations:", error);
      }
    };

    // For demo purposes, let's generate some analytics data
    const fetchAnalyticsData = async () => {
      try {
        // In a real implementation, this would be a fetch to an analytics API
        // For now, we'll use mock data

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setAnalyticsData({
          activeUsers: Math.floor(Math.random() * 50) + 5,
          loginStats: Math.floor(Math.random() * 100) + 20,
          topMenus: [
            { name: "Dashboard", count: Math.floor(Math.random() * 100) + 50 },
            { name: "Analytics", count: Math.floor(Math.random() * 80) + 30 },
            { name: "Reports", count: Math.floor(Math.random() * 60) + 20 },
            { name: "Settings", count: Math.floor(Math.random() * 40) + 10 },
            { name: "Users", count: Math.floor(Math.random() * 30) + 5 },
          ],
          recentNotifications: [
            {
              title: "System maintenance scheduled",
              date: new Date(Date.now() - 3600000).toISOString(),
            },
            {
              title: "New feature available",
              date: new Date(Date.now() - 86400000).toISOString(),
            },
            {
              title: "Welcome to the platform",
              date: new Date(Date.now() - 172800000).toISOString(),
            },
          ],
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching analytics data:", error);
        setLoading(false);
      }
    };

    fetchSystemConfig();
    fetchAnalyticsData();
  }, []);
  // Prepare jumbotron slides
  const jumbotronSlides =
    systemConfig.jumbotron_images.length > 0
      ? systemConfig.jumbotron_images.map((image, index) => (
          <div
            key={index}
            className="w-full h-64 relative rounded-xl overflow-hidden"
          >
            {/* Using div with background image instead of <img> to avoid Next.js warnings */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
              role="img"
              aria-label={`Jumbotron ${index + 1}`}
            />
          </div>
        ))
      : [
          // Default slides if no images are configured
          <div
            key="slide1"
            className="w-full h-64 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center rounded-xl"
          >
            <h2 className="text-2xl font-bold text-white">
              Welcome to {systemConfig.app_name}
            </h2>
          </div>,
          <div
            key="slide2"
            className="w-full h-64 bg-gradient-to-r from-purple-600 to-pink-700 flex items-center justify-center rounded-xl"
          >
            <h2 className="text-2xl font-bold text-white">
              Powerful Analytics Platform
            </h2>
          </div>,
        ];

  return (
    <div className="container mx-auto p-4 md:p-8 space-y-6">
      {/* Row 1: Welcome Message and Clock */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Welcome Card (2/3 width) */}
        <Card className="md:w-2/3">
          <CardHeader className="pb-2">
            <CardTitle>Welcome, {session?.user?.name || "User"}!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {session?.user
                ? `You are logged in as: ${session.user.email}`
                : "Loading session information..."}
            </p>
            {session?.user?.role && (
              <p className="text-sm text-muted-foreground mt-1">
                Role: {session.user.role}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Digital Clock Card (1/3 width) */}
        <Card className="md:w-1/3 flex justify-center items-center py-4">
          <DigitalClock format24Hour={false} showDate={true} />
        </Card>
      </div>

      {/* Row 2: Marquee */}
      <Card>
        <CardContent className="p-0 overflow-hidden">
          <div className="bg-primary p-3">
            <Marquee
              pauseOnHover
              speed={30}
              className="text-primary-foreground font-medium"
            >
              {systemConfig.marquee_text}
            </Marquee>
          </div>
        </CardContent>
      </Card>

      {/* Row 3: Jumbotron/Carousel */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <Carousel
            items={jumbotronSlides}
            autoplay={true}
            autoplayDelay={5000}
            showNavigation={true}
            showPagination={true}
            loop={true}
          />
        </CardContent>
      </Card>

      {/* Row 4: Analytics Widgets */}
      {loading ? (
        <div className="flex justify-center py-12">
          <Spinner size="lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Widget 1: Active Users */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="w-4 h-4" />
                Active Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {analyticsData.activeUsers}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Users online now
              </p>
            </CardContent>
          </Card>

          {/* Widget 2: Login Statistics */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                Login Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {analyticsData.loginStats}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Logins in the past 24 hours
              </p>
            </CardContent>
          </Card>

          {/* Widget 3: Top Menu Access */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Menu className="w-4 h-4" />
                Top Menu Access
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {analyticsData.topMenus.slice(0, 3).map((menu, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{menu.name}</span>
                  <span className="font-medium">{menu.count}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Widget 4: Recent Notifications */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Recent Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {analyticsData.recentNotifications.map((notification, index) => (
                <div key={index} className="text-sm">
                  <p className="truncate">{notification.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(notification.date), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Row 5: Analytics Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChart className="w-5 h-5" />
            System Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <Chart
              type="line"
              series={[
                {
                  name: "User Activity",
                  data: [65, 59, 80, 81, 56, 55],
                },
                {
                  name: "System Performance",
                  data: [28, 48, 40, 19, 86, 27],
                },
              ]}
              options={{
                chart: {
                  toolbar: {
                    show: false,
                  },
                },
                xaxis: {
                  categories: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                  ],
                },
                stroke: {
                  curve: "smooth",
                  width: 2,
                },
              }}
              height="100%"
              title="System Activity over Time"
              subtitle="User activity and system performance metrics"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
