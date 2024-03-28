import React, { useEffect, useRef } from "react";

import { CChartLine } from "@coreui/react-chartjs";
import { getStyle } from "@coreui/utils";

const MainChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    document.documentElement.addEventListener("ColorSchemeChange", () => {
      if (chartRef.current) {
        setTimeout(() => {
          if (chartRef.current) {
            if (chartRef.current) {
              (chartRef.current as any).options.scales.x.grid.borderColor =
                getStyle("--cui-border-color-translucent");
              (chartRef.current as any).options.scales.x.grid.color = getStyle(
                "--cui-border-color-translucent"
              );
              (chartRef.current as any).options.scales.x.ticks.color =
                getStyle("--cui-body-color");
              (chartRef.current as any).options.scales.y.grid.borderColor =
                getStyle("--cui-border-color-translucent");
              (chartRef.current as any).options.scales.y.grid.color = getStyle(
                "--cui-border-color-translucent"
              );
            }
          }
          if (chartRef.current) {
            const chart = chartRef.current as any; // Typecast chartRef.current as any
            chart.options.scales.y.ticks.color = getStyle("--cui-body-color");
            chart.update();
          }
        });
      }
    });
  }, [chartRef]);

  const random = (p0: number, p1: number) => Math.round(Math.random() * 100);

  return (
    <>
      <CChartLine
        ref={chartRef}
        style={{ height: "300px", marginTop: "40px" }}
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "My First dataset",
              // backgroundColor: `rgba(${getStyle("--cui-info-rgb")}, .1)`,
              borderColor: getStyle("--cui-info"),
              pointHoverBackgroundColor: getStyle("--cui-info"),
              borderWidth: 2,
              data: [
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
              ],
              fill: true,
            },
            {
              label: "My Second dataset",
              backgroundColor: "transparent",
              borderColor: getStyle("--cui-success"),
              pointHoverBackgroundColor: getStyle("--cui-success"),
              borderWidth: 2,
              data: [
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
              ],
            },
            {
              label: "My Third dataset",
              backgroundColor: "transparent",
              borderColor: getStyle("--cui-danger"),
              pointHoverBackgroundColor: getStyle("--cui-danger"),
              borderWidth: 1,
              borderDash: [8, 5],
              data: [65, 65, 65, 65, 65, 65, 65],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                color: getStyle("--cui-border-color-translucent"),
                drawOnChartArea: false,
              },
              ticks: {
                color: getStyle("--cui-body-color"),
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: getStyle("--cui-border-color-translucent"),
              },
              max: 250,
              ticks: {
                color: getStyle("--cui-body-color"),
                maxTicksLimit: 5,
                stepSize: Math.ceil(250 / 5),
              },
            },
          },
          elements: {
            line: {
              tension: 0.4,
            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3,
            },
          },
        }}
      />
    </>
  );
};

export default MainChart;
