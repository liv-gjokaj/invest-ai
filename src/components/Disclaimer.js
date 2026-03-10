import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Disclaimer() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!checked) return;

    localStorage.setItem("margin_terms_agreed", "true");
    navigate("/");
  };

  return (
    <div className="page-center">
      <div className="glass-card" style={{ maxWidth: "880px" }}>

        <h1 className="main-title">
          RISK DISCLOSURE & REGULATORY NOTICE
        </h1>

        <p
          className="main-subtitle"
          style={{
            textTransform: "uppercase",
            fontSize: "0.75rem",
            letterSpacing: "1.5px"
          }}
        >
          Educational Capital Simulation Platform
        </p>

        <div className="divider" />

        <div
          style={{
            fontSize: "0.75rem",
            opacity: 0.5,
            marginBottom: "15px"
          }}
        >
          Effective Date: February 2026
        </div>

        {/* Platform Status */}
        <div className="section-block">
          <div className="section-label">
            Platform Classification
          </div>

          <div
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              lineHeight: "1.7",
              fontSize: "0.9rem",
              opacity: 0.85,
              paddingRight: "10px"
            }}
          >
            <p>
              Margin is a financial modeling interface developed exclusively
              for educational and simulation purposes. All allocation models,
              portfolio projections, volatility classifications, and capital
              growth scenarios are hypothetical representations derived from
              simplified financial assumptions.
            </p>

            <p>
              Margin does not provide financial, investment, legal, tax,
              fiduciary, brokerage, advisory, or asset management services.
              The platform does not operate as a registered investment advisor,
              broker-dealer, exchange, clearinghouse, or financial institution.
            </p>

            <p>
              All securities, ETFs, and companies referenced are presented for
              illustrative academic analysis only and do not constitute
              recommendations, endorsements, or personalized investment
              strategies.
            </p>
          </div>
        </div>

        <div className="divider" />

        {/* Risk Disclosure */}
        <div className="section-block">
          <div className="section-label">
            Risk Disclosure
          </div>

          <div
            style={{
              lineHeight: "1.7",
              fontSize: "0.9rem",
              opacity: 0.85
            }}
          >
            <p>
              Investing involves material risk, including the potential loss
              of principal. Market volatility, macroeconomic shifts,
              regulatory changes, interest rate movements, liquidity
              constraints, and structural fees may significantly impact
              real-world outcomes.
            </p>

            <p>
              Historical return assumptions do not guarantee future results.
              Simulated projections displayed within this interface are
              constructed using generalized modeling methodologies and do
              not account for all real-world financial variables.
            </p>

            <p>
              Users assume full responsibility for independent financial
              decision-making conducted outside this platform.
            </p>
          </div>
        </div>

        <div className="divider" />

        {/* User Acknowledgment */}
        <div className="section-block">
          <div className="section-label">
            User Acknowledgment
          </div>

          <div style={{ marginTop: "15px", textAlign: "center" }}>
            <label
              style={{
                fontSize: "0.8rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                opacity: 0.8
              }}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                style={{ marginRight: "10px" }}
              />
              I acknowledge that Margin is an educational simulation platform
            </label>
          </div>

          <div style={{ marginTop: "25px", textAlign: "center" }}>
            <button
              onClick={handleContinue}
              disabled={!checked}
              className="primary-btn"
              style={{
                opacity: checked ? 1 : 0.4,
                cursor: checked ? "pointer" : "not-allowed"
              }}
            >
              Enter Platform
            </button>
          </div>
        </div>

        <div className="divider" />

        <p
          style={{
            fontSize: "0.7rem",
            opacity: 0.35,
            marginTop: "25px",
            textAlign: "center"
          }}
        >
          Margin™ | Institutional Simulation Interface | Not Investment Advice
        </p>

      </div>
    </div>
  );
}