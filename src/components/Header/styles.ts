import { css } from "@emotion/react";
const styles = css`
  width: 100%;
  box-shadow: 0px 5px 20px rgba(236, 236, 236, 0.5);
  background: #ffffff;
  .header {
    padding: 0 51px;
    display: flex;
    margin: 0 auto;
    height: 80px;
    max-width: 1440px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    nav {
      height: 42px;
      display: flex;
      align-items: center;
    }
    a:any-link {
      font-weight: 600;
      font-size: 16px;
      color: #757373;
      text-decoration: none;
    }

    nav a {
      margin: 0 0 0 40px;
    }
    a:last-of-type {
      text-align: center;
      background: #57b3e4;
      border-radius: 5px;
      color: #ffffff;
      width: 162px;
      height: 42px;
      line-height: 42px;
    }
  }
`;
export default styles;
