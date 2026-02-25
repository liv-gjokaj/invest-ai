import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function IntakeTest() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: "",
    income: "",
    objective: "Growth",
    risk: "Medium",
    horizon: "Long Term (7+ years)",
  });

  // Handle typing
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Clean income (remove commas)
  const getCleanIncome = () => {
    return Number(formData.income.replace(/,/g, ""));
  };

  // Validate before navigating
  const handleSubmit = () => {
    const incomeValue = getCleanIncome();

    if (!incomeValue || incomeValue <= 0) {
      alert("Please enter a valid annual income greater than $0.");
      return;
    }

    navigate("/results", {
      state: {
        ...formData,
        income: incomeValue,
      },
    });
  };

  // Button enabled only if valid
  const isValid = getCleanIncome() > 0;

  return (
    <div className="page-center">
      <div className="glass-card">

        <h1 className="main-title">
          Build Your Financial Profile
        </h1>

        <p className="main-subtitle">
          Answer a few questions so we can contextualize your strategy.
        </p>

        <div className="form-grid">

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="e.g. 22"
            />
          </div>

          <div className="form-group">
            <label>Annual Income</label>
            <input
              type="text"
              name="income"
              value={formData.income}
              onChange={handleChange}
              placeholder="e.g. 75,000"
            />
          </div>

          <div className="form-group">
            <label>Primary Objective</label>
            <select
              name="objective"
              value={formData.objective}
              onChange={handleChange}
            >
              <option>Growth</option>
              <option>Income</option>
              <option>Capital Preservation</option>
            </select>
          </div>

          <div className="form-group">
            <label>Risk Tolerance</label>
            <select
              name="risk"
              value={formData.risk}
              onChange={handleChange}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Investment Horizon</label>
            <select
              name="horizon"
              value={formData.horizon}
              onChange={handleChange}
            >
              <option>Short Term (0–3 years)</option>
              <option>Medium Term (3–7 years)</option>
              <option>Long Term (7+ years)</option>
            </select>
          </div>

        </div>

        <button
          className="primary-button"
          onClick={handleSubmit}
          disabled={!isValid}
        >
          View Educational Scenarios →
        </button>

      </div>
    </div>
  );
}