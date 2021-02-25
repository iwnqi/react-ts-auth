import { css } from "@emotion/react";
const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 820px;
  max-width: 1440px;
  margin: 0 auto;

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
      margin-bottom: 40px;
      margin-top: 0;
    }
    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: rgba(37, 67, 83, 0.75);
      padding: 0 0 2px;
    }
    span.error {
      color: red;
    }
    span.additional {
      font-weight: 600;
      color: rgba(37, 67, 83, 0.4);
    }
    input:first-of-type {
      margin-bottom: 28px;
    }
    input {
      background: #ffffff;
      border: 0.5px solid #c7c7c7;
      box-sizing: border-box;
      border-radius: 3px;
      height: 40px;
      width: 430px;
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
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button:focus,
    input:focus {
      outline: none;
    }
  }
`;
export default styles;
