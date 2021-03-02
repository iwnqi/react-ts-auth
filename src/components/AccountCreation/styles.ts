import { css } from "@emotion/react";
const styles = css`
  display: flex;
  justify-content: center;
  height: 820px;
  max-width: 1440px;
  margin: 208px auto;
  div {
    display: flex;
    width: 430px;
    flex-direction: column;
    h1 {
      height: 44px;
      font-weight: 800;
      font-size: 36px;
      color: #254353;
      text-align: center;
      font-style: normal;
      line-height: 44px;
      margin-top: 0;
      margin-bottom: 40px;

      color: #254353;
    }
    span {
      /* height: 17px; */
      padding: 0 0 2px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: rgba(37, 67, 83, 0.75);
    }
    span.error {
      color: red;
      padding-top: 2px;
    }
    span.additional {
      font-weight: 600;
      color: rgba(37, 67, 83, 0.4);
    }
    input:first-of-type {
      margin-bottom: 28px;
    }
    input {
      padding-left: 20px;
      background: #ffffff;
      border: 0.5px solid #c7c7c7;
      box-sizing: border-box;
      border-radius: 3px;
      height: 40px;
      width: 430px;
    }
    input::placeholder {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.03em;
      color: rgba(37, 67, 83, 0.4);
    }
    input:last-of-type::placeholder {
      font-weight: 800;
    }
    div.mainButton {
      width: 430px;
      height: 50px;
      background: #57b3e4;
      border: none;
      border-radius: 35px;
      font-weight: 700;
      font-size: 18px;
      line-height: 50px;
      text-align: center;
      color: #ffffff;
      margin-top: 40px;
      display: flex;
      position: relative;
      cursor: pointer;
    }
    button:focus,
    input:focus {
      outline: none;
    }
  }
`;
export default styles;
