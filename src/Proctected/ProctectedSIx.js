import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
const Proctected = () => {
  // REACT-ROUTER-DOM=V6

  let Token = localStorage.getItem("Token");
  return Token ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default Proctected;
