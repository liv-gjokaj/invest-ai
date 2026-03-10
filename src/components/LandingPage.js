import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="page-center">
      <div className="glass-card">

        <h1
          className="main-title"
          style={{
            fontSize: "1.8rem",
            letterSpacing: "2px",
            fontWeight: 500
          }}
        >
          MARGIN
        </h1>

        <p
          className="main-subtitle"
          style={{
            textTransform: "uppercase",
            fontSize: "0.75rem",
            letterSpacing: "1.5px",
            marginTop: "10px"
          }}
        >
          Strategic Capital Modeling Interface
        </p>

        <div className="divider" />

        <p
          style={{
            fontSize: "0.9rem",
            lineHeight: "1.7",
            opacity: 0.75,
            maxWidth: "600px",
            margin: "20px auto"
          }}
        >
          Margin provides institutional-style portfolio simulation and
          allocation modeling. Evaluate capital exposure, volatility
          tolerance, and long-term compound growth scenarios using
          structured financial assumptions.
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/test")}
          style={{
            marginTop: "20px"
          }}
        >
          Enter Platform
        </button>

        <p
          style={{
            fontSize: "0.7rem",
            opacity: 0.35,
            marginTop: "50px",
            letterSpacing: "0.5px"
          }}
        >
          Educational Simulation Platform | Not Financial Advice
        </p>

      </div>
    </div>
  );
}