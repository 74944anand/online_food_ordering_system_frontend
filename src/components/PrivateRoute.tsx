import React from "react";
import { Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactNode;
  isAuthenticated: boolean;
  redirectTo: string;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { element, isAuthenticated, redirectTo } = props;

  return isAuthenticated ? (
    <Route element={element} />
  ) : (
    <Navigate to={redirectTo} replace />
  );
}

export default PrivateRoute;
