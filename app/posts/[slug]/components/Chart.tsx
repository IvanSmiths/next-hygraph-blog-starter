"use client";

import React, { FC, useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { ChartProps, ChartRefType, ValidChartType } from "@/utils/types";

const Charts: FC<ChartProps> = ({ post }) => {
  const labels = post.chart.labels;
  const type = post.chart.type;
  const data = post.chart.datasets.data;
  const label = post.chart.datasets.label;

  const chartRef = useRef<ChartRefType>(null);
  console.log(data);
  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      if (chartRef.current) {
        const context = chartRef.current.getContext("2d");

        if (context) {
          if (chartRef.current.chart) {
            chartRef.current.chart.destroy();
          }

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
