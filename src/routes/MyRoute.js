/* eslint-disable react/prop-types */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { prevePath: rest.location.pathname },
        }}
      />
    );
  }

  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.PropTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
