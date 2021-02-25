/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactNode } from "react";
import styles from "./styles";
interface IHomePageProps {
  children?: ReactNode;
  onSignOut: () => void;
}
const HomePage: React.FC<IHomePageProps> = ({ onSignOut }) => {
  return (
    <div
      css={css`
        ${styles}
      `}
    >
      <div>
        <h1>Home page</h1>
        <button onClick={() => onSignOut()}>Sign out</button>
      </div>
    </div>
  );
};
export default HomePage;
