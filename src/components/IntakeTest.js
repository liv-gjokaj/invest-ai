import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function IntakeTest() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: "",
    income: "",
    monthlySavings: "",
    objective: "Growth",
    risk: "Medium",
    horizon: "Long Term (7+ Years)",
    lifeScenario: "None",
    experience: "Beginner",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getCleanNumber = (value) => {
    return Number(value.replace(/,/g, ""));
  };

  const handleSubmit = () => {
    const income = getCleanNumber(formData.income);
    const savings = getCleanNumber(formData.monthlySavings);

    if (!income || income <= 0) {
      alert("Enter a valid income.");
      return;
    }

    navigate("/results", {
      state: {
        ...formData,
        income,
        monthlySavings: savings,
      },
    });
  };

  return (
    <div className="page-center">
      <div className="glass-card">
        <h1 className="main-title">Capital Allocation Profile</h1>

        <div className="form-grid">

          <div className="form-group">
            <div className="section-label">Age</div>
            <input type="number" name="age" value={formData.age} onChange={handleChange} />
          </div>

          <div className="form-group">
            <div className="section-label">Annual Income (USD)</div>
            <input type="text" name="income" value={formData.income} onChange={handleChange} />
          </div>

          <div className="form-group">
            <div className="section-label">Monthly Investment Capacity</div>
            <input type="text" name="monthlySavings" value={formData.monthlySavings} onChange={handleChange} />
          </div>

          <div className="form-group">
            <div className="section-label">Risk Tolerance</div>
            <select name="risk" value={formData.risk} onChange={handleChange}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="form-group">
            <div className="section-label">Primary Objective</div>
            <select name="objective" value={formData.objective} onChange={handleChange}>
              <option>Growth</option>
              <option>Income Generation</option>
              <option>Capital Preservation</option>
            </select>
          </div>

          <div className="form-group">
            <div className="section-label">Investment Horizon</div>
            <select name="horizon" value={formData.horizon} onChange={handleChange}>
              <option>Short Term (0–3 Years)</option>
              <option>Medium Term (3–7 Years)</option>
              <option>Long Term (7+ Years)</option>
            </select>
          </div>

          <div className="form-group full-width">
            <div className="section-label">Current Life Scenario</div>
            <select name="lifeScenario" value={formData.lifeScenario} onChange={handleChange}>
              <option>None</option>
              <option>Student Loans</option>
              <option>Buying Home Soon</option>
              <option>Supporting Family</option>
              <option>Early Career / Low Savings</option>
              <option>High Savings / Wealth Accumulation Phase</option>
            </select>
          </div>

          <div className="form-group full-width">
            <div className="section-label">Investment Experience</div>
            <select name="experience" value={formData.experience} onChange={handleChange}>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

        </div>

        <button className="primary-btn" onClick={handleSubmit}>
          Generate Strategy
        </button>
      </div>
    </div>
  );
}