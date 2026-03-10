import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import IntakeTest from "./components/IntakeTest";
import InvestmentResults from "./components/InvestmentResults";
import DisclaimerGate from "./components/DisclaimerGate";

import "./App.css";

function App() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("disclaimerAccepted");
    if (stored === "true") {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setAccepted(true);
  };

  return (
    <Router>
      <div className="app-container">
        <div className="app-background" />
        <div className="app-content">
          <Routes>

            <Route
              path="/disclaimer"
              element={<DisclaimerGate onAccept={handleAccept} />}
            />

            <Route
              path="/"
              element={
                accepted ? <LandingPage /> : <Navigate to="/disclaimer" replace />
              }
            />

            <Route
              path="/test"
              element={
                accepted ? <IntakeTest /> : <Navigate to="/disclaimer" replace />
              }
            />

            <Route
              path="/results"
              element={
                accepted ? <InvestmentResults /> : <Navigate to="/disclaimer" replace />
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;