"use client";

import React, { FC, useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { ChartProps } from "@/utils/types";

const Charts: FC<ChartProps> = ({ labels, data, label }) => {
  const chartRef = useRef(null);
  console.log(data);
  useEffect(() => {
    if (chartRef.current) {
      //@ts-ignore
      if (chartRef.current.chart) {
        //@ts-ignore
        chartRef.current.chart.destroy();
      }
      //@ts-ignore
      const context = chartRef.current.getContext("2d");

      //@ts-ignore
      chartRef.current.chart = new Chart(context, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: label,
              data: data,
              backgroundColor: "#6594EE",
            },
          ],
        },
      });
    }
  }, [data, labels]);
  return (
    <>
      <canvas ref={chartRef}></canvas>
    </>
  );
};

export default Charts;
