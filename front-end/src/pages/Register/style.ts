import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  background-color: #000000;
  min-height: 100vh;
  margin: 0 auto;

  .registerForm {
    width: 91%;
    height: 100%;
    margin: 0 auto;
    margin-top: 18px;
    padding: 10px;
    background-color: #ff5349;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px #ff5349;

    h1 {
      font-family: "Inter";
      font-weight: 700;
      font-size: 14.3916px;
      color: #ffff;
      text-align: center;
      margin-top: 20px;
    }

    form {
      margin-top: 30px;

      div {
        label {
          font-family: "Inter";
          font-weight: 400;
          font-size: 12px;
          color: black;
        }
        input {
          width: 100%;
          height: 38.38px;
          font-family: "Inter";
          font-weight: 400;
          font-size: 10px;
          background-color: #ffff;
          border: 0.9772px solid #ff5349;
          border-radius: 3.19812px;

          padding: 10px;
          margin-top: 10px;
        }

        p {
          font-family: "Inter";
          font-weight: 400;
          font-size: 9.73988px;
          color: #ffff;
          margin-bottom: 15px;
          margin-top: 5px;
        }
      }
    }

    .registerButton {
      width: 100%;
      height: 38.38px;
      color: #ffffff;
      font-family: "Inter";
      font-weight: 500;
      font-size: 12.7925px;
      background-color: #f10606;
      border: 1.2182px solid #f10606;
      border-radius: 4.06066px;
      margin-top: 20px;
    }
  }

  @media (min-width: 400px) {
    .registerForm {
      width: 60%;
    }
  }

  @media (min-width: 700px) {
    .registerForm {
      width: 40%;
    }
  }

  @media (min-width: 900px) {
    .registerForm {
      width: 22%;
    }

    .registerButton {
      cursor: pointer;
    }
  }
`;
