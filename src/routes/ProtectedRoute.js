import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
const ProtectedRoute = () => {
  const { user } = useUserAuth();

  //console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  // render child elements with outlet https://reactrouter.com/en/main/components/outlet
  return <Outlet />;
};

export default ProtectedRoute;
