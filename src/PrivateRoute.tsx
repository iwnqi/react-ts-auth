import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
export interface PrivateRouteProps extends RouteProps {
  component: any;
  isAuthenticated?: boolean;
  isConfirmed?: boolean;
  onConfirm?: () => void;
  onSignOut: () => void;
}
const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const {
    component: Component,
    isAuthenticated,
    isConfirmed,
    onSignOut,
    ...rest
  } = props;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated || isConfirmed)
          return <Component {...props} onSignOut={onSignOut} />;
        else return <Redirect to={{ pathname: "/" }} />;
      }}
    />
  );
};
export default PrivateRoute;
