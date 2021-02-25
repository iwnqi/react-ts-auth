/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "./styles";
import logo from "./assets/logo.png";
const Header: React.FC = () => {
  return (
    <header
      css={css`
        ${styles}
      `}
    >
      <div className="header">
        <img src={logo} alt="logo" />
        <nav>
          <a href="/">Find partner</a>
          <a href="/">Blog</a>
          <a href="/">Log in</a>
          <a href="/">Post a pitch</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
