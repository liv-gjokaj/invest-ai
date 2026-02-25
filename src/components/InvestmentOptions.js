import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

export default function InvestmentOptions({ profile }) {
  const options = [];

  if (profile.timeline === "long" && profile.risk === "high") {
    options.push({
      name: "NVIDIA (NVDA)",
      reason:
        "Historically strong revenue growth driven by data center and semiconductor demand. Often considered by long-term investors comfortable with volatility.",
      source: "https://finance.yahoo.com/quote/NVDA",
    });
  }

  if (profile.risk !== "low") {
    options.push({
      name: "Vanguard Total Stock Market ETF (VTI)",
      reason:
        "Broad exposure to the U.S. equity market, commonly used to reduce single-company risk while participating in long-term growth.",
      source:
        "https://investor.vanguard.com/investment-products/etfs/profile/vti",
    });
  }

  if (profile.risk === "low" || profile.timeline === "short") {
    options.push({
      name: "Vanguard Total Bond Market ETF (BND)",
      reason:
        "Historically lower volatility than stocks, often used for capital preservation and income-focused strategies.",
      source:
        "https://investor.vanguard.com/investment-products/etfs/profile/bnd",
    });
  }

  const chartData = {
    labels: ["Year 1", "Year 3", "Year 5", "Year 10"],
    datasets: [
      {
        label: "Hypothetical Growth of $10,000",
        data: [10800, 13500, 17000, 29000],
        borderColor: "#000",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="card">
      <h3>Investment Options to Explore</h3>

      <div className="profile-summary">
        <h4>Profile Summary</h4>
        <ul className="muted">
          <li>Time horizon: {profile.timeline}</li>
          <li>Risk tolerance: {profile.risk}</li>
          <li>Primary objective: {profile.goal}</li>
        </ul>
      </div>

      <p className="muted">
        The examples below are selected using common financial planning
        frameworks and publicly available historical market data.
      </p>

      <ul className="investment-list">
        {options.map((opt) => (
          <li key={opt.name}>
            <strong>{opt.name}</strong>
            <br />
            {opt.reason}
            <br />
            <a href={opt.source} target="_blank" rel="noreferrer">
              Source
            </a>
          </li>
        ))}
      </ul>

      <h4>Example: Long-Term Growth</h4>
      <p className="muted">
        This chart illustrates a hypothetical long-term equity investment.
        Actual results vary and are not guaranteed.
      </p>

      <Line data={chartData} />

      <h4>Factors That Could Change These Outcomes</h4>
      <ul className="muted">
        <li>Changes in income or employment stability</li>
        <li>Shifts in interest rates or inflation</li>
        <li>Shorter investment timelines</li>
        <li>Lower tolerance for market volatility</li>
      </ul>
    </div>
  );
}
