export const lifeScenarioEffects = {
  "Buying a Home": {
    description: "Large upfront down payment reduces portfolio growth early.",
    adjustment: (value, year) => {
      if (year === 2) return value - 40000;
      return value;
    },
  },
  "Starting a Business": {
    description: "Higher risk with potential slower early growth.",
    adjustment: (value, year) => {
      if (year <= 3) return value * 0.9;
      return value;
    },
  },
  "Career Break": {
    description: "Reduced contributions for 2 years.",
    adjustment: (value, year) => {
      if (year === 3 || year === 4) return value * 0.8;
      return value;
    },
  },
  "Early Retirement": {
    description: "Shorter investment horizon.",
    adjustment: (value, year) => {
      if (year > 6) return value;
      return value;
    },
  },
};