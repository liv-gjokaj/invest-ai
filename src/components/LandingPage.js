import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="page-center">
      <div className="glass-card">

        <h1 className="main-title">Margin</h1>

        <p className="main-subtitle">
          Understand financial decisions — clearly.
        </p>

        <p className="main-description">
          Margin explores how investment strategies behave over time using
          real market data and established financial principles.
        </p>

        <button
          className="primary-button"
          onClick={() => navigate("/test")}
        >
          Start Your Profile →
        </button>

      </div>
    </div>
  );
}