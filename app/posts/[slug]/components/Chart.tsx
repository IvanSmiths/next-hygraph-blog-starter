"use client";

import React, { FC, useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { ChartProps, ChartRefType, ValidChartType } from "@/utils/chartTypes";

const Charts: FC<ChartProps> = ({ post }) => {
  const labels = post?.chart?.labels ?? [];
  const type = post?.chart?.type ?? "bar";
  const data = post?.chart?.datasets.data ?? [];
  const label = post?.chart?.datasets.label ?? "";

  const chartRef = useRef<ChartRefType>(null);

  useEffect(() => {
    if (chartRef.current) {
      const context: CanvasRenderingContext2D | null =
        chartRef.current.getContext("2d");

      if (context) {
        chartRef.current.chart = new Chart(context, {
          type: (type as ValidChartType) || ["bar"],
          data: {
            labels: labels,
            datasets: [
              {
                label: label,
                data: data,
                backgroundColor: "#6594EE",
                borderColor: "#33373d",
                pointRadius: type === "line" ? 6 : undefined,
              },
            ],
          },
        });
      }
    }
    return () => {
      if (chartRef.current) {
        if (chartRef.current.chart) {
          chartRef.current.chart.destroy();
        }
      }
    };
  }, [type, data, label, labels]);
  return (
    <>
      <canvas ref={chartRef}></canvas>
    </>
  );
};

export default Charts;
