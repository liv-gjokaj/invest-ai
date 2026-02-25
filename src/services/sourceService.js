export const trustedSources = [
  { name: "SEC", url: "https://www.sec.gov" },
  { name: "Investopedia", url: "https://www.investopedia.com" },
  { name: "Morningstar", url: "https://www.morningstar.com" },
  { name: "Yahoo Finance", url: "https://finance.yahoo.com" }
];

export function getExampleInvestments(riskLevel, scenario) {
  if (riskLevel === "low") {
    return [
      {
        name: "Vanguard Total Bond Market ETF",
        ticker: "BND",
        type: "Bond ETF",
        reason: "Lower volatility and income-focused stability.",
        risk: "Lower growth potential, sensitive to interest rate changes.",
        link: "https://finance.yahoo.com/quote/BND",
        source: "Morningstar"
      },
      {
        name: "Vanguard S&P 500 ETF",
        ticker: "VOO",
        type: "Index ETF",
        reason: "Broad exposure to the U.S. stock market.",
        risk: "Market downturns affect all holdings.",
        link: "https://finance.yahoo.com/quote/VOO",
        source: "Investopedia"
      }
    ];
  }

  if (riskLevel === "high" && scenario !== "recession") {
    return [
      {
        name: "NVIDIA",
        ticker: "NVDA",
        type: "Growth Stock",
        reason: "Leader in AI and semiconductor innovation.",
        risk: "High volatility and dependence on tech cycles.",
        link: "https://finance.yahoo.com/quote/NVDA",
        source: "Yahoo Finance"
      },
      {
        name: "Invesco QQQ ETF",
        ticker: "QQQ",
        type: "Technology ETF",
        reason: "Tracks major innovation and tech companies.",
        risk: "Heavy tech exposure increases volatility.",
        link: "https://finance.yahoo.com/quote/QQQ",
        source: "Investopedia"
      }
    ];
  }

  return [
    {
      name: "Apple",
      ticker: "AAPL",
      type: "Blue-Chip Stock",
      reason: "Strong cash flow and global brand stability.",
      risk: "Slower growth compared to emerging tech companies.",
      link: "https://finance.yahoo.com/quote/AAPL",
      source: "Morningstar"
    },
    {
      name: "Vanguard Total Stock Market ETF",
      ticker: "VTI",
      type: "Total Market ETF",
      reason: "Diversified exposure across the U.S. economy.",
      risk: "Broad market risk during recessions.",
      link: "https://finance.yahoo.com/quote/VTI",
      source: "SEC"
    }
  ];
}
