"use client";

import React, { Suspense } from "react";
import { cn } from "@/lib/utils";
import { Card } from "./card";
import dynamic from "next/dynamic";

// Define chart types and interfaces
interface ApexAxisChartSeries
  extends Array<{
    name?: string;
    data: number[] | { x: any; y: any }[];
  }> {}

interface ApexNonAxisChartSeries extends Array<number> {}

interface ChartProps {
  type: "line" | "area" | "bar" | "pie" | "donut" | "radialBar" | "radar";
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  options: ApexCharts.ApexOptions;
  height?: number | string;
  width?: number | string;
  className?: string;
  title?: string;
  subtitle?: string;
}

// Loading placeholder that simulates chart appearance
const ChartPlaceholder = ({
  height = 350,
  className,
  title,
  subtitle,
}: {
  height?: number | string;
  className?: string;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      {(title || subtitle) && (
        <div className="p-6 pb-0">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      )}
      <div className="p-6">
        <div
          className="w-full bg-muted rounded-md animate-pulse flex items-center justify-center"
          style={{
            height: typeof height === "number" ? `${height}px` : height,
          }}
        >
          <div className="text-muted-foreground text-sm">
            Loading chart data...
          </div>
        </div>
      </div>
    </Card>
  );
};

// Lazy load the actual Chart component
const ChartComponent = dynamic(
  () => import("./chart").then((mod) => mod.Chart),
  {
    ssr: false,
    loading: ({ className, title, subtitle }) => (
      <ChartPlaceholder
        className={className}
        title={title}
        subtitle={subtitle}
      />
    ),
  },
);

// LazyChart component that wraps the dynamic import
export function LazyChart(props: ChartProps) {
  return (
    <Suspense
      fallback={
        <ChartPlaceholder
          className={props.className}
          title={props.title}
          subtitle={props.subtitle}
          height={props.height}
        />
      }
    >
      <ChartComponent {...props} />
    </Suspense>
  );
}
