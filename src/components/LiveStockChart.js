import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export default function LiveStockChart() {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 420,
      layout: {
        background: { color: "#0a0f1c" },
        textColor: "#d1d5db",
      },
      grid: {
        vertLines: { color: "rgba(255,255,255,0.05)" },
        horzLines: { color: "rgba(255,255,255,0.05)" },
      },
      rightPriceScale: {
        borderColor: "rgba(255,255,255,0.1)",
      },
      timeScale: {
        borderColor: "rgba(255,255,255,0.1)",
      },
      crosshair: {
        mode: 1,
      },
    });

    const areaSeries = chart.addAreaSeries({
      lineColor: "#22c55e",
      topColor: "rgba(34,197,94,0.4)",
      bottomColor: "rgba(34,197,94,0.05)",
      lineWidth: 2,
    });

    // Sample realistic SPY-style data
    const data = [
      { time: "2024-01-01", value: 470 },
      { time: "2024-02-01", value: 482 },
      { time: "2024-03-01", value: 495 },
      { time: "2024-04-01", value: 510 },
      { time: "2024-05-01", value: 505 },
      { time: "2024-06-01", value: 525 },
      { time: "2024-07-01", value: 540 },
      { time: "2024-08-01", value: 535 },
      { time: "2024-09-01", value: 555 },
      { time: "2024-10-01", value: 570 },
    ];

    areaSeries.setData(data);

    window.addEventListener("resize", () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    });

    return () => chart.remove();
  }, []);

  return (
    <div
      ref={chartContainerRef}
      style={{
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        marginBottom: "40px",
      }}
    />
  );
}