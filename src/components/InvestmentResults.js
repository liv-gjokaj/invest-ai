import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

import TradingViewSPY from "../components/TradingViewSPY";
import sp500 from "../data/sp500";

export default function InvestmentResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state || null;

  const [timeline] = useState(10);

  useEffect(() => {
    if (!user) navigate("/intake");
  }, [user, navigate]);

  const model = useMemo(() => {
    if (!user) return null;

    const age = Number(user.age || 25);
    const income = Number(user.income || 60000);
    const monthlySavings =
      Number(user.monthlySavings) || income * 0.18;
    const riskLevel = user.risk || "Medium";

    let riskScore =
      (riskLevel === "High" ? 35 :
       riskLevel === "Medium" ? 25 : 15) +
      (age < 30 ? 20 :
       age < 45 ? 12 : 5);

    riskScore = Math.min(riskScore, 100);

    const equityReturn = 0.08;
    const bondReturn = 0.035;
    const inflation = 0.025;

    const equityWeight = (riskScore / 100) * 0.85;
    const bondWeight = 1 - equityWeight;

    const blendedReturn =
      equityWeight * equityReturn +
      bondWeight * bondReturn -
      inflation;

    const conservativeReturn = blendedReturn - 0.02;
    const aggressiveReturn = blendedReturn + 0.02;

    let annualSavings = monthlySavings * 12;

    let conservative = annualSavings;
    let expected = annualSavings;
    let aggressive = annualSavings;

    const projection = [];

    for (let year = 1; year <= timeline; year++) {
      conservative =
        (conservative + annualSavings) *
        (1 + conservativeReturn);

      expected =
        (expected + annualSavings) *
        (1 + blendedReturn);

      aggressive =
        (aggressive + annualSavings) *
        (1 + aggressiveReturn);

      projection.push({
        year: `Year ${year}`,
        conservative: Math.round(conservative),
        expected: Math.round(expected),
        aggressive: Math.round(aggressive),
      });
    }

    return {
      riskScore,
      projection,
      suggestedMonthly: Math.round(income * 0.22),
    };
  }, [user, timeline]);

  const portfolio = useMemo(() => {
    if (!user) return [];

    const risk = user.risk || "Medium";
    const age = Number(user.age || 30);

    let growthBoost = 1;
    let defensiveBoost = 1;

    if (risk === "High") growthBoost += 0.6;
    if (risk === "Low") defensiveBoost += 0.8;
    if (age > 50) defensiveBoost += 0.4;

    const scored = sp500.map(stock => {
      let score = 1;

      if (stock.sector === "Technology") score *= growthBoost;
      if (
        stock.sector === "Utilities" ||
        stock.sector === "Healthcare" ||
        stock.sector === "Consumer Staples"
      ) {
        score *= defensiveBoost;
      }

      return { ...stock, score };
    });

    const totalScore = scored.reduce((sum, s) => sum + s.score, 0);

    const weighted = scored.map(stock => {
      const percent = (stock.score / totalScore) * 100;

      return [
        `${stock.name} (${stock.symbol})`,
        Number(percent.toFixed(2))
      ];
    });

    return weighted.sort((a, b) => b[1] - a[1]);

  }, [user]);

  if (!model) return null;

  const highestWeight = Math.max(...portfolio.map(p => p[1]));

  return (
    <div className="page-center">
      <div className="glass-card" style={{ maxWidth: "1400px", width: "95%" }}>

        <h1 className="main-title">
          Institutional Allocation Dashboard
        </h1>

        <p style={{ opacity: 0.7 }}>
          Risk Score: {model.riskScore}/100
        </p>

        <p style={{ opacity: 0.7 }}>
          Suggested Monthly Investment: ${model.suggestedMonthly}
        </p>

        <div style={{ height: 420, marginTop: 50 }}>
          <ResponsiveContainer>
            <LineChart data={model.projection}>
              <CartesianGrid stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
              <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="conservative" stroke="#7c3aed" dot={false} />
              <Line type="monotone" dataKey="expected" stroke="#f59e0b" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="aggressive" stroke="#00C49F" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ marginTop: 100 }}>
          <h2 style={{ marginBottom: 20 }}>
            SPY — S&P 500
          </h2>
          <TradingViewSPY />
        </div>

        <div style={{ marginTop: 100 }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 40 }}>
            Hyper-Diversified Portfolio
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 45 }}>

            {portfolio.map(([name, percent], i) => {
              const ticker = name.match(/\((.*?)\)/)[1];
              const isTop = percent === highestWeight;

              return (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3 style={{ fontSize: 22, fontWeight: 500, margin: 0 }}>
                      {isTop && "⭐ "}
                      {name}
                    </h3>
                    <span style={{ fontSize: 22, fontWeight: 600 }}>
                      — {percent}%
                    </span>
                  </div>

                  <div style={{ marginTop: 8, fontSize: 13, opacity: 0.6 }}>
                    <a
                      href={`https://finance.yahoo.com/quote/${ticker}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Yahoo Finance
                    </a>
                    {"  |  "}
                    <a
                      href={`https://www.bloomberg.com/quote/${ticker}:US`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Bloomberg
                    </a>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </div>
  );
}