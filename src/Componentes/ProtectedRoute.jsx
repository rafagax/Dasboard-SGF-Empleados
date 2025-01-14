import React, { useContext } from "react";
import { PasswordContext } from "../PasswordContext/PasswordContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ roleRequired, children }) {
  const { role, showPasswordState } = useContext(PasswordContext);

  if (showPasswordState) {
    return <Navigate to="/" />;
  }

  if (role !== roleRequired) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

export default ProtectedRoute;
