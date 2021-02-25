import { css } from "@emotion/react";
const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 820px;
  margin: 0 auto;

  max-width: 1440px;
  div {
    display: flex;
    width: 430px;
    flex-direction: column;
    h1 {
      height: 50px;
      font-weight: 800;
      font-size: 36px;
      color: #254353;
      text-align: center;
      font-style: normal;
      line-height: 50px;
      margin: 0;
    }
    button {
      width: 430px;
      height: 50px;
      background: #57b3e4;
      border: none;
      border-radius: 35px;
      font-weight: bold;
      font-size: 18px;
      line-height: 50px;
      text-align: center;
      color: #ffffff;
      margin: 40px 0;
    }
    button:focus {
      outline: none;
    }
  }
`;
export default styles;
