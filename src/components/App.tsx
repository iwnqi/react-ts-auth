import React, { useEffect, useRef, useState } from "react";
import AccountCreation from "./AccountCreation";
import Header from "./Header";
import AccountConfirmation from "./AccountConfirmation";
import HomePage from "./HomePage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import app from "../firebase";
import PrivateRoute from "../PrivateRoute";

const App: React.FC = () => {
  const [isAuthenticated, setAuthenticationStatus] = useState<boolean>(false);
  const [isConfirmed, setConfirmationStatus] = useState<boolean>(false);
  const [redirectTo, setRedirectTo] = useState<"/" | "/confirmation" | "/home">(
    "/"
  );
  const intervalId = useRef<any>(null);

  useEffect(() => {
    if (isAuthenticated && !isConfirmed) {
      intervalId.current = setInterval(() => {
        checkVerification();
      }, 600);
    }

    if (!isAuthenticated || isConfirmed) clearInterval(intervalId.current);
    return () => {
      clearInterval(intervalId.current);
    };
  });
  const onAuthenticate: () => void = () => {
    setAuthenticationStatus(true);
    checkVerification();
  };

  function checkVerification(): void {
    if (app.auth().currentUser && app.auth().currentUser!.emailVerified) {
      setConfirmationStatus(true);
      setRedirectTo("/home");
      clearInterval(intervalId.current);
    }
    if (app.auth().currentUser && !app.auth().currentUser!.emailVerified) {
      setAuthenticationStatus(true);
      setRedirectTo("/confirmation");
    }
  }
  function onSignOut(): void {
    app.auth().signOut();
    setAuthenticationStatus(false);
    setConfirmationStatus(false);
    window.clearInterval(intervalId.current);
  }
  app.auth().onAuthStateChanged(() => {
    checkVerification();
  });

  return (
    <div className="App">
      <Header />
      <Router>
        <Redirect to={redirectTo} />
        {/*if isConfirmed/isAuthenticated then render Redirect to="/confirmation"*/}
        <Switch>
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            path="/confirmation"
            component={AccountConfirmation}
            onSignOut={onSignOut}
          />

          <PrivateRoute
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            onSignOut={onSignOut}
            path="/home"
            component={HomePage}
          />

          <Route path="/">
            <AccountCreation onAuthenticate={onAuthenticate} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
