import { css } from "@emotion/react";
const styles = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  max-width: 1440px;
  height: 820px;
  div.confirm {
    display: flex;
    align-items: center;
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
      margin-bottom: 20px;
      margin-top: 0;
    }
    p {
      text-align: center;
      width: 294px;
      height: 51px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: rgba(37, 67, 83, 0.4);
      margin: 0;
    }
    span.additional {
      color: rgba(37, 67, 83, 0.75);
    }
    button {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      background-color: inherit;
      border: none;
      text-decoration-line: underline;
      color: rgba(37, 67, 83, 0.75);
      margin-top: 15px;
    }
    div.mainButton {
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

      position: relative;
    }
    button:focus {
      outline: none;
    }
  }
`;
export default styles;
