import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./Auth";

const PrivateRoute = ({ children }) => {
  const { user } = useUserAuth();

  
  if (!user) {
    return <Navigate to="/" />;
  } 
  return children;
};

export default PrivateRoute;