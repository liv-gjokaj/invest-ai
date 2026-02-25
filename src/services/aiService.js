export function generateAdvice(profile, scenario = "normal") {
  const age = Number(profile.age);
  const income = Number(profile.income);
  let risk = profile.riskLevel;

  // Scenario adjustments
  if (scenario === "college") {
    risk = "low";
  }

  if (scenario === "jobLoss") {
    risk = "low";
  }

  if (scenario === "recession") {
    risk = risk === "high" ? "medium" : "low";
  }

  // Advice logic
  if (age < 25 && risk === "high") {
    return {
      strategy:
        "Long-term growth investments such as index funds, growth stocks, and ETFs.",
      reason:
        "You are young and have time to recover from market volatility.",
      riskExplanation:
        "Higher-risk investments fluctuate more but offer greater long-term growth.",
      timeHorizon: "Long-term (10+ years)",
      adjustedRisk: risk
    };
  }

  if (income < 40000 || risk === "low") {
    return {
      strategy:
        "Emergency savings combined with conservative, diversified ETFs.",
      reason:
        "Life uncertainty makes stability and liquidity more important right now.",
      riskExplanation:
        "Lower-risk investments help protect your money during uncertain periods.",
      timeHorizon: "Short- to medium-term (3–7 years)",
      adjustedRisk: risk
    };
  }

  return {
    strategy:
      "A balanced investment approach using diversified ETFs and established companies.",
    reason:
      "This strategy balances growth and stability across market conditions.",
    riskExplanation:
      "Moderate risk spreads exposure across asset types.",
    timeHorizon: "Medium- to long-term (5–10 years)",
    adjustedRisk: risk
  };
}
