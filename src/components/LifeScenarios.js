// LifeScenarios.js

export const lifeScenarioEffects = {
  home: {
    label: "Buying a Home",
    description:
      "A large upfront down payment reduces portfolio growth in early years.",
    adjustment: (value, year) => {
      if (year === 2) {
        return value - 40000;
      }
      return value;
    },
  },

  business: {
    label: "Starting a Business",
    description:
      "Increased financial risk may slow portfolio growth during early stages.",
    adjustment: (value, year) => {
      if (year <= 3) {
        return value * 0.9;
      }
      return value;
    },
  },

  career: {
    label: "Career Break",
    description:
      "Temporary income pause reduces annual contributions for two years.",
    adjustment: (value, year) => {
      if (year === 3 || year === 4) {
        return value * 0.8;
      }
      return value;
    },
  },

  retire: {
    label: "Early Retirement",
    description:
      "Shorter compounding window reduces long-term capital accumulation.",
    adjustment: (value) => {
      return value;
    },
  },
};