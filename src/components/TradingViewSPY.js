import { useEffect, useRef } from "react";

export default function TradingViewSPY() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: "AMEX:SPY",
        interval: "D",
        timezone: "America/New_York",
        theme: "dark",
        style: "1", // Candlestick
        locale: "en",
        enable_publishing: false,
        allow_symbol_change: false,
        hide_top_toolbar: false,
        hide_side_toolbar: false,
        container_id: "tradingview_spy",
      });
    };

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      id="tradingview_spy"
      ref={containerRef}
      style={{ height: "650px", width: "100%" }}
    />
  );
}