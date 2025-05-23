"use client";

import React from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { Card } from "./card";

// Dynamically import ApexCharts with no SSR to prevent hydration issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => <div className="h-[350px] flex items-center justify-center">Loading chart...</div>
});

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

interface ApexAxisChartSeries
  extends Array<{
    name?: string;
    data: number[] | { x: any; y: any }[];
  }> {}

interface ApexNonAxisChartSeries extends Array<number> {}

export function Chart({
  type,
  series,
  options,
  height = 350,
  width = "100%",
  className,
  title,
  subtitle,
}: ChartProps) {
  // Default chart options
  const defaultOptions: ApexCharts.ApexOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    colors: [
      "var(--chart-1)",
      "var(--chart-2)",
      "var(--chart-3)",
      "var(--chart-4)",
      "var(--chart-5)",
    ],
    theme: {
      mode: "dark",
    },
    ...options,
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      {(title || subtitle) && (
        <div className="p-4 border-b border-border">
          {title && <h3 className="text-lg font-medium">{title}</h3>}
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
      )}
      <div className="p-4">
        <ReactApexChart
          type={type}
          series={series}
          options={defaultOptions}
          height={height}
          width={width}
        />
      </div>
    </Card>
  );
}
