import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Legal() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!agreed) return;

    localStorage.setItem("margin_terms_agreed", "true");
    navigate("/intake");
  };

  return (
    <div className="page-center">
      <div className="glass-card">
        <h1 className="main-title">Terms & Conditions</h1>

        <div className="legal-text">
          <p>
            By using Margin, you acknowledge that investing involves risk.
            Margin provides educational insights only and does not offer
            personalized financial advice.
          </p>
          <p>
            Past performance does not guarantee future results. You are
            responsible for your own financial decisions.
          </p>
        </div>

        <div className="agree-section">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>I agree to the Terms & Conditions</span>
          </label>
        </div>

        <button
          onClick={handleContinue}
          disabled={!agreed}
          className={`primary-btn ${!agreed ? "btn-disabled" : ""}`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}