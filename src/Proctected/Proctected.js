import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
function Proctected({ children, ...rest }) {
  // REACT-ROUTER-DOM=V5
  return (
    <Route
      {...rest}
      render={() => {
        return localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}
export default Proctected;
