import { useState } from "react";
import IntakeTest from "../components/IntakeTest";
import InvestmentOptions from "../components/InvestmentOptions";
import Legal from "../components/Legal";
import Disclaimer from "../components/Disclaimer";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);

  return (
    <div className="page-center">
      <div className="glass-card">

        <h1
          className="main-title"
          style={{
            letterSpacing: "2px",
            fontWeight: 500
          }}
        >
          CAPITAL OVERVIEW
        </h1>

        <p
          className="main-subtitle"
          style={{
            textTransform: "uppercase",
            fontSize: "0.75rem",
            letterSpacing: "1.5px"
          }}
        >
          Consolidated Allocation & Exposure Interface
        </p>

        <div className="divider" />

        {/* If no profile yet */}
        {!profile && (
          <>
            <div className="section-label">
              Allocation Assessment Required
            </div>

            <p
              style={{
                fontSize: "0.85rem",
                opacity: 0.7,
                marginBottom: "20px"
              }}
            >
              Complete the capital profile assessment to generate a
              modeled allocation framework.
            </p>

            <IntakeTest onComplete={setProfile} />
          </>
        )}

        {/* If profile exists */}
        {profile && (
          <>
            <div className="section-label">
              Strategic Allocation Output
            </div>

            <InvestmentOptions profile={profile} />

            <div className="divider" />

            <div className="section-label">
              Regulatory & Risk Disclosure
            </div>

            <Legal />
          </>
        )}

        <div className="divider" />

        <p
          style={{
            fontSize: "0.7rem",
            opacity: 0.35,
            marginTop: "20px"
          }}
        >
          Margin | Educational Capital Simulation Platform
        </p>

        <Disclaimer />

      </div>
    </div>
  );
}