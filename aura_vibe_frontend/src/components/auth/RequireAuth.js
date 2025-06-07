import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// PUBLIC_INTERFACE
export default function RequireAuth({ children }) {
  // Always call hooks at the top level, unconditionally
  const auth = useAuth();
  // If context is missing, fallback to always-logged-in for scaffolding
  const user = (auth && typeof auth.user !== "undefined") ? auth.user : true;

  if (!user) return <Navigate to="/login" />;
  return children ? children : <Outlet />;
}
