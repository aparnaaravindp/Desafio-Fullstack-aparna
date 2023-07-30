import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #000000;
  min-height: 100vh;
  margin: 0 auto;
  width: 100%;

  .imageDiv {
    width: 100%;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    img {
      width: 30%;
    }

    h1 {
      font-family: "Inter";
      font-weight: 700;
      font-size: 20px;
      color: #f10606;
      margin-top: 20px;
      text-align: center;
    }
  }

  .loginForm {
    width: 91%;
    height: 100%;
    margin: 0 auto;
    padding: 10px;
    background-color: #ff5349;
    margin-top: 10px;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

    form {
      margin-top: 25px;
      height: 340px;
    }

    .emailDiv {
      label {
        font-family: "Inter";
        font-weight: 400;
        font-size: 12px;
        color: black;
      }

      input {
        width: 100%;
        height: 38.5px;
        margin-top: 10px;
        background-color: #ffff;
        border: 0.9772px solid #ff5349;
        border-radius: 3.20867px;
        padding: 10px;
        color: black;
        font-weight: 400;
        font-size: 11px;
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

    .passwordDiv {
      label {
        font-family: "Inter";
        font-weight: 400;
        font-size: 12px;
        color: black;
      }
      input {
        width: 100%;
        height: 38.5px;
        font-family: "Inter";
        font-weight: 400;
        font-size: 13.0293px;
        color: black;
        background-color: #ffff;
        border: 0.9772px solid #ff5349;
        border-radius: 3.20867px;
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

    button {
      width: 100%;
      height: 38.5px;
      font-family: "Inter";
      font-weight: 500;
      font-size: 18px;
      background-color: #f10606;
      border: 1.2182px solid #f10606;
      border-radius: 4.06066px;
      color: #ffffff;
      margin-top:60px;
    }
  }

  @media (min-width: 400px) {
    .imageDiv {
      img {
        width: 8%;
      }
    }

    .loginForm {
      width: 60%;
    }
  }

  @media (min-width: 700px) {
    .loginForm {
      width: 40%;
    }
  }

  @media (min-width: 900px) {
    .loginForm {
      width: 22%;
    }

    button {
      cursor: pointer;
    }
  }
`;
