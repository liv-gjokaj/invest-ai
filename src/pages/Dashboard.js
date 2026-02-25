import { useState } from "react";
import IntakeTest from "../components/IntakeTest";
import InvestmentOptions from "../components/InvestmentOptions";
import Legal from "../components/Legal";
import Disclaimer from "../components/Disclaimer";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);

  return (
    <div className="page">
      <h2>Your Financial Snapshot</h2>

      {!profile && <IntakeTest onComplete={setProfile} />}

      {profile && (
        <>
          <InvestmentOptions profile={profile} />
          <Legal />
        </>
      )}

      <Disclaimer />
    </div>
  );
}
