import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PublicRoute = () => {
  //react-router-dom=v6
  let Token = localStorage.getItem("token");
  return !Token ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoute;
