import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { authed } = useContext(AuthContext);

  return (
    <Route
      path="/home"
      {...rest}
      render={(props) => {
        if (authed) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}
