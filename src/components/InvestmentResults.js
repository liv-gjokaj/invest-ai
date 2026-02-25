import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts";
import { lifeScenarioEffects } from "./LifeScenarios";

export default function InvestmentResults() {
  const location = useLocation();
  const profile = location.state;

  const [selectedScenario, setSelectedScenario] = useState(null);

  if (!profile) {
    return (
      <div className="page-center">
        <div className="glass-card">
          <h2>No profile data found.</h2>
        </div>
      </div>
    );
  }

  const income = Number(profile.income);

  // Risk-based return assumptions
  let annualReturn = 0.05;
  if (profile.risk === "Medium") annualReturn = 0.08;
  if (profile.risk === "High") annualReturn = 0.12;

  const yearlyInvestment = income * 0.20;
  const years = 10;

  let baseValue = 0;
  let scenarioValue = 0;

  const projectionData = [];

  for (let i = 1; i <= years; i++) {

    // Base growth
    baseValue = (baseValue + yearlyInvestment) * (1 + annualReturn);

    // Scenario growth
    scenarioValue = (scenarioValue + yearlyInvestment) * (1 + annualReturn);

    if (selectedScenario) {
      scenarioValue =
        lifeScenarioEffects[selectedScenario].adjustment(
          scenarioValue,
          i
        );
    }

    projectionData.push({
      year: `Year ${i}`,
      base: Math.round(baseValue),
      scenario: Math.round(scenarioValue)
    });
  }

  const formatCurrency = (value) =>
    `$${value.toLocaleString()}`;

  return (
    <div className="page-center">
      <div className="glass-card results-card">

        <h1 className="main-title">Educational Scenarios</h1>

        <p className="results-profile">
          <strong>Objective:</strong> {profile.objective}<br />
          <strong>Risk:</strong> {profile.risk}<br />
          <strong>Horizon:</strong> {profile.horizon}<br />
          <strong>Annual Income:</strong> ${income.toLocaleString()}<br />
          <strong>Yearly Investment (20%):</strong> ${yearlyInvestment.toLocaleString()}
        </p>

        {/* CHART */}
        <div className="chart-container">
          <h2>Projected Portfolio Growth</h2>

          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={projectionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
              <XAxis dataKey="year" stroke="#ccc" />
              <YAxis
                stroke="#ccc"
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Legend />

              <Line
                type="monotone"
                dataKey="base"
                stroke="#22c55e"
                strokeWidth={3}
                name="Normal Growth"
              />

              {selectedScenario && (
                <Line
                  type="monotone"
                  dataKey="scenario"
                  stroke="#f97316"
                  strokeWidth={3}
                  name="With Life Scenario"
                />
              )}
            </LineChart>
          </ResponsiveContainer>

          <p className="chart-explanation">
            This chart assumes you invest 20% of your income annually with an expected return based on your selected risk level.
            The orange line shows how real-life events can impact long-term growth.
          </p>
        </div>

        {/* LIFE SCENARIO */}
        <div className="life-section">
          <h2>Life Scenario Impact Simulation</h2>

          <div className="scenario-buttons">
            {Object.keys(lifeScenarioEffects).map((scenario) => (
              <button
                key={scenario}
                className={`scenario-btn ${
                  selectedScenario === scenario ? "active" : ""
                }`}
                onClick={() => setSelectedScenario(scenario)}
              >
                {scenario}
              </button>
            ))}
          </div>

          {selectedScenario && (
            <div className="scenario-description">
              {lifeScenarioEffects[selectedScenario].description}
            </div>
          )}
        </div>

        {/* COMPANY RECOMMENDATIONS SECTION (RESTORED) */}
        <div className="company-section">
          <h2>Example Companies Based on Risk Level</h2>

          <div className="company-card">
            <h3>NVIDIA (NVDA)</h3>
            <p>
              Industry leader in AI infrastructure and semiconductor innovation.
              Strong revenue growth driven by artificial intelligence expansion.
            </p>
            <a href="https://finance.yahoo.com/quote/NVDA" target="_blank" rel="noreferrer">
              View on Yahoo Finance
            </a>
          </div>

          <div className="company-card">
            <h3>Microsoft (MSFT)</h3>
            <p>
              Diversified technology leader with cloud dominance (Azure),
              enterprise software strength, and AI integration.
            </p>
            <a href="https://finance.yahoo.com/quote/MSFT" target="_blank" rel="noreferrer">
              View on Yahoo Finance
            </a>
          </div>

          <div className="company-card">
            <h3>Apple (AAPL)</h3>
            <p>
              Strong balance sheet, consistent profitability, and global brand dominance.
              Stable long-term performer with dividend history.
            </p>
            <a href="https://finance.yahoo.com/quote/AAPL" target="_blank" rel="noreferrer">
              View on Yahoo Finance
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}