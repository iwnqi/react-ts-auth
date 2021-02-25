/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "./styles";
import mail from "./assets/mail.png";
import app from "../../firebase";

import React, { ReactNode, useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
interface IAccountConfirmationProps {
  children?: ReactNode;
  isAuthenticated: boolean;
  onSignOut: () => void;
}
const AccountConfirmation: React.FC<IAccountConfirmationProps> = (props) => {
  const [email, setEmail] = useState<null | string>("");
  const { onSignOut } = props;
  const [coolDown, setCooldown] = useState<number | null>(null);
  const actionCodeSettings = {
    url: "http://localhost:3000/home",
    handleCodeInApp: true,
  };
  useEffect(() => {
    app.auth().onAuthStateChanged(() => {
      if (app.auth().currentUser !== null) {
        const newEmail = app.auth().currentUser!.email;
        setEmail(newEmail);
      }
    });
    localStorage.removeItem("compareSeconds");
    coolDownHandler();
  }, []);

  const coolDownHandler = () => {
    if (!localStorage.compareSeconds) {
      const compareSeconds = Date.now();
      localStorage.compareSeconds = compareSeconds;
    }

    const timerId = setInterval(() => {
      const seconds = Date.now();
      const compare: any = (
        (seconds - localStorage.compareSeconds) /
        1000
      ).toFixed();
      if (compare < 61) {
        setCooldown(60 - compare);
      } else {
        setCooldown(-1);
        clearInterval(timerId);
        localStorage.removeItem("compareSeconds");
      }
    }, 1000);
  };
  const onResend = () => {
    if (coolDown! < 61) {
      app.auth().currentUser!.sendEmailVerification(actionCodeSettings);
      coolDownHandler();
    }
  };

  const buttonInner = coolDown ? (
    coolDown! > 0 ? (
      coolDown
    ) : (
      "Resend"
    )
  ) : (
    <Spinner />
  );

  return (
    <div
      css={css`
        ${styles}
      `}
    >
      <div className="confirm">
        <h1>Confirm account</h1>
        <p>
          Please confirm your email by clicking on the link in the confirmation
          email that we sent to
          <span className="additional"> {email}</span>
        </p>
        <div className="mainButton" onClick={onResend}>
          {buttonInner}
        </div>
        <button onClick={() => onSignOut()}>Sign out</button>
      </div>
      <div>
        <img src={mail} alt="mail" />
      </div>
    </div>
  );
};
export default AccountConfirmation;
