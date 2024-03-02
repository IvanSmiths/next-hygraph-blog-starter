"use client";

import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const Charts = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      //@ts-ignore
      if (chartRef.current.chart) {
        //@ts-ignore
        chartRef.current.chart.destroy();
      }
      //@ts-ignore
      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: ["1", "2"],
          datasets: [
            {
              label: "test",
              data: [23, 23, 23],
              backgroundColor: "red",
            },
          ],
        },
      });
      //@ts-ignore
      chartRef.current.chart = newChart;
    }
  }, []);
  return (
    <>
      <canvas ref={chartRef}></canvas>
    </>
  );
};

export default Charts;
