import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DisclaimerGate({ onAccept }) {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  const handleContinue = () => {
    if (!agreed) return;

    onAccept();        // updates App state
    navigate("/");     // go to main page
  };

  return (
    <div className="page-center">
      <div className="glass-card" style={{ maxWidth: "700px" }}>
        <h1 className="main-title">Educational Disclaimer</h1>

        <p style={{ marginTop: "20px", opacity: 0.8 }}>
          Margin is an educational platform and does not provide
          professional financial advice. All investments carry risk.
          Please consult a licensed advisor before making decisions.
        </p>

        <label style={{ display: "block", marginTop: "20px" }}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            style={{ marginRight: "10px" }}
          />
          I understand and agree.
        </label>

        <button
          onClick={handleContinue}
          disabled={!agreed}
          className="primary-button"
          style={{
            marginTop: "20px",
            opacity: agreed ? 1 : 0.5,
            cursor: agreed ? "pointer" : "not-allowed",
          }}
        >
          Agree & Continue
        </button>
      </div>
    </div>
  );
}