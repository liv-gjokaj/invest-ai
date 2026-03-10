import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const hasAgreed = localStorage.getItem("margin_terms_agreed");

  if (!hasAgreed) {
    return <Navigate to="/legal" replace />;
  }

  return children;
}