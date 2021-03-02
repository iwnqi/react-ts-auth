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
import PageSpinner from "./PageSpinner/PageSpinner";

const App: React.FC = () => {
  const [isAuthenticated, setAuthenticationStatus] = useState<boolean>(false);
  const [isConfirmed, setConfirmationStatus] = useState<boolean>(false);
  const [redirectTo, setRedirectTo] = useState<"/" | "/confirmation" | "/home">(
    "/"
  );
  const intervalId = useRef<any>(null);
  const [isLoading, setLoadingStatus] = useState<boolean>(true);
  useEffect(() => {
    if (isAuthenticated && !isConfirmed) {
      intervalId.current = setInterval(() => {
        checkVerification();
      }, 600);
    }

    if (!isAuthenticated || isConfirmed) {
      clearInterval(intervalId.current);
    }
    return () => {
      clearInterval(intervalId.current);
    };
  }, [isAuthenticated, isConfirmed]);
  const onAuthenticate: () => void = () => {
    setAuthenticationStatus(true);
    checkVerification();
  };

  function checkVerification(): void {
    if (app.auth().currentUser && app.auth().currentUser!.emailVerified) {
      setLoadingStatus(false);
      setConfirmationStatus(true);
      setRedirectTo("/home");
      clearInterval(intervalId.current);
    }
    if (app.auth().currentUser && !app.auth().currentUser!.emailVerified) {
      setLoadingStatus(false);
      setAuthenticationStatus(true);
      setRedirectTo("/confirmation");
    } else setLoadingStatus(false);
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
  const MainPage = () => {
    if (isLoading) return <PageSpinner />;
    else
      return (
        <Route path="/">
          <AccountCreation onAuthenticate={onAuthenticate} />
        </Route>
      );
  };

  return (
    <div className="App">
      <Header />

      <Router>
        <Redirect to={redirectTo} />

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
          <MainPage />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
