/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "./styles";
import React, { useRef, useState, ReactNode } from "react";
import app from "../../firebase";
import Spinner from "../ButtonSpinner/ButtonSpinner";
interface IAccountCreation {
  children?: ReactNode;
  onAuthenticate: () => void;
}
const AccountCreation: React.FC<IAccountCreation> = (props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [mainButtonInner, setButtonInner] = useState<string | React.ReactNode>(
    "Create account"
  );
  const onEmailChange = () => {
    setEmail(emailRef.current!.value);
  };
  const onPasswordChange = () => {
    setPassword(passwordRef.current!.value);
    setErrorMessage(null);
  };

  const { onAuthenticate } = props;

  const handleSubmit = () => {
    if (passwordRef.current!.value.length < 8) {
      setErrorMessage("Password must contain at least 8 characters");
      return;
    }
    setButtonInner(<Spinner />);
    const actionCodeSettings = {
      url: "http://localhost:3000/home",
      handleCodeInApp: true,
    };

    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.removeItem("compareSeconds");
        app.auth().currentUser!.sendEmailVerification(actionCodeSettings);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setButtonInner("Create account");
      })
      .finally(() => {
        if (errorMessage) return;
        if (!errorMessage) onAuthenticate();
      });
  };
  return (
    <div
      css={css`
        ${styles}
      `}
    >
      <div>
        <h1>Create account</h1>
        <label htmlFor="email">
          <span>Email </span>
        </label>
        <input
          onChange={onEmailChange}
          ref={emailRef}
          id="email"
          type="email"
          placeholder="you@example.com"
        />
        <label htmlFor="password">
          <span>Password </span>
          <span className="additional">(min 8 symbols)</span>
        </label>
        <input
          onChange={onPasswordChange}
          ref={passwordRef}
          id="password"
          type="password"
          placeholder="••••••••••••••••••••"
        />
        <span className="error">{errorMessage}</span>
        <div className="mainButton" onClick={handleSubmit}>
          {mainButtonInner}
        </div>
      </div>
    </div>
  );
};
export default AccountCreation;
