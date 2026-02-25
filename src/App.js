import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import IntakeTest from "./components/IntakeTest";
import InvestmentResults from "./components/InvestmentResults";
import Disclaimer from "./components/Disclaimer";
import Dashboard from "./pages/Dashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">

        {/* Global Background Layer */}
        <div className="app-background" />

        {/* Main Content */}
        <div className="app-content">
          <Routes>

            {/* Landing */}
            <Route path="/" element={<LandingPage />} />

            {/* Intake Questionnaire */}
            <Route path="/test" element={<IntakeTest />} />

            {/* Results Page (Graph + Companies + Sources) */}
            <Route path="/results" element={<InvestmentResults />} />

            {/* Optional Pages */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/disclaimer" element={<Disclaimer />} />

          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;