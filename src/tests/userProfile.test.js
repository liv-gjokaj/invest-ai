import { useState } from "react";

export default function IntakeTest({ onComplete }) {
  const [form, setForm] = useState({
    age: "",
    income: "",
    goal: "",
    risk: "",
    timeline: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onComplete(form);
  }

  return (
    <div className="card">
      <h3>Tell Us About Your Life</h3>
      <p className="muted">
        This helps Margin suggest investment strategies that match your situation.
      </p>

      <form onSubmit={handleSubmit} className="form">
        <input name="age" placeholder="Your age" onChange={handleChange} required />
        <input name="income" placeholder="Annual income ($)" onChange={handleChange} required />

        <select name="goal" onChange={handleChange} required>
          <option value="">Primary goal</option>
          <option value="growth">Grow wealth</option>
          <option value="stability">Preserve money</option>
          <option value="income">Generate income</option>
        </select>

        <select name="risk" onChange={handleChange} required>
          <option value="">Risk tolerance</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <select name="timeline" onChange={handleChange} required>
          <option value="">Investment timeline</option>
          <option value="short">0–3 years</option>
          <option value="medium">3–10 years</option>
          <option value="long">10+ years</option>
        </select>

        <button className="primary">See My Strategy</button>
      </form>
    </div>
  );
}
