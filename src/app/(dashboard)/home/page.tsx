"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LazyChart } from "@/components/ui/chart-lazy"; // Using the lazy-loaded chart
import { Marquee as UiMarquee } from "@/components/ui/marquee"; // Using the UI Marquee
import { DigitalClock } from "@/components/ui/digital-clock";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  Users,
  Activity,
  TrendingUp,
  BarChart3,
  Bell,
  LogIn,
  ListChecks,
  LineChart,
} from "lucide-react";

const StatCard = ({
  title,
  value,
  icon: Icon,
  description,
  isLoading,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  description?: string;
  isLoading?: boolean;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      {isLoading ? (
        <>
          <Skeleton className="h-8 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </>
      ) : (
        <>
          <div className="text-2xl font-bold">{value}</div>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </>
      )}
    </CardContent>
  </Card>
);

export default function HomePage() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [marqueeText, setMarqueeText] = useState("");
  const [jumbotronImages, setJumbotronImages] = useState<string[]>([]);
  const [analyticsData, setAnalyticsData] = useState({
    topOnlineUsers: "0",
    topFrequentLogins: "N/A",
    topNotifications: "0",
    topPopularMenus: "N/A",
  });
  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  // Simulate API calls
  useEffect(() => {
    // Fetch Marquee Text
    setTimeout(() => setMarqueeText("Welcome to Indonet Analytics Hub! Stay updated with the latest insights and system notifications."), 100);
    // Fetch Jumbotron Images
    // Assuming images are moved to public/store/jumbotron/
    setTimeout(() => setJumbotronImages([
      "/store/jumbotron/jumbotron-image-1.jpg",
      "/store/jumbotron/jumbotron-image-2.jpg",
      "/store/jumbotron/jumbotron-image-3.jpg",
    ]), 100);
    // Fetch Analytics Data
    setTimeout(() => setAnalyticsData({
      topOnlineUsers: "125",
      topFrequentLogins: "UserX (15 logins)",
      topNotifications: "5 Unread",
      topPopularMenus: "Dashboard, Reports",
    }), 100);
  }, []);

  const userName = session?.user?.name || "User";

  // Placeholder chart data
  const loginHistoryChartOptions: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: Array.from({ length: 15 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (14 - i));
        return d.toISOString();
      }),
      labels: { style: { colors: "#9ca3af" } }, // Muted foreground for x-axis labels
    },
    yaxis: {
      labels: { style: { colors: "#9ca3af" } }, // Muted foreground for y-axis labels
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
      theme: "dark",
    },
    grid: {
      borderColor: "#374151", // Slate 700 for grid lines
    },
  };
  const loginHistoryChartSeries = [
    {
      name: "Logins",
      data: Array.from({ length: 15 }, () => Math.floor(Math.random() * 100) + 20), // Random data for 15 days
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
      {/* Baris 1: Marquee */}
      {isLoading && !marqueeText ? (
        <Skeleton className="h-12 w-full mb-6 rounded-md" />
      ) : marqueeText ? (
        <div className="bg-slate-800 text-white rounded-md shadow-lg mb-6 overflow-hidden">
          <UiMarquee className="p-3" speed={50}>
            {marqueeText}
          </UiMarquee>
        </div>
      ) : null}

      {/* Baris 2: Jumbotron & Digital Clock */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] mb-8 rounded-lg overflow-hidden shadow-2xl">
        {isLoading && jumbotronImages.length === 0 ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false} // Can enable if desired
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full h-full"
          >
            {jumbotronImages.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={src}
                  alt={`Jumbotron Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-75" // Darken image slightly for text overlay
              onError={() => console.error(`Failed to load image: ${src}`)} // Temporary debug
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div className="absolute top-6 right-6 z-10">
          <DigitalClock format24Hour={false} showDate={true} className="bg-black/50 backdrop-blur-sm p-4 rounded-lg shadow-xl text-white" />
        </div>
        <div className="absolute bottom-6 left-6 z-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">Welcome, {userName}!</h1>
          <p className="text-lg md:text-xl text-slate-200 drop-shadow-md">Your analytics dashboard at a glance.</p>
        </div>
      </div>

      {/* Baris 3: Analytics Widgets */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Top Online Users"
          value={analyticsData.topOnlineUsers}
          icon={Users}
          isLoading={isLoading}
        />
        <StatCard
          title="Top Frequent Logins"
          value={analyticsData.topFrequentLogins}
          icon={LogIn}
          isLoading={isLoading}
        />
        <StatCard
          title="Top Notifications"
          value={analyticsData.topNotifications}
          icon={Bell}
          isLoading={isLoading}
        />
        <StatCard
          title="Top Popular Menus"
          value={analyticsData.topPopularMenus}
          icon={ListChecks}
          isLoading={isLoading}
        />
      </div>

      {/* Baris 4: Login History Chart */}
      <div className="mb-8">
        <LazyChart
          type="area"
          series={loginHistoryChartSeries}
          options={loginHistoryChartOptions}
          title="Login History (Last 15 Days)"
          // icon prop is not used by LazyChart or Chart component
        />
      </div>
    </div>
  );
}