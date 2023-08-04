import styled from "styled-components";

export const StyledModalDiv = styled.div`
  width: 91%;
  height: 360px;
  background-color: lightgrey;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px #ff5349;
  border-radius: 3.20867px;
  position: absolute;
  top: 60%;
  left: 41%;
  transform: translate(-40%, -60%);

  form {
    .userUpdate {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #ff5349;
      height: 40.11px;
      width: 100%;
      padding: 10px;

      .formTitle {
        font-family: "Inter";
        font-weight: 700;
        font-size: 13px;
        color: black;
      }

      .closeButton {
        font-family: "Nunito";
        font-weight: 600;
        font-size: 12.8347px;
        color: black;
        background-color: #ff5349;
        border: none;
      }
    }

    .inputData {
      padding: 10px;
      .nameInput {
        label {
          font-family: "Inter";
          font-weight: 400;
          font-size: 11px;
          color: black;
        }
        input {
          width: 100%;
          height: 38.5px;
          font-family: "Inter";
          font-weight: 400;
          font-size: 10px;
          background-color: lightgrey;
          color: black;
          border: 0.9772px solid black;
          border-radius: 3.20867px;
          padding: 10px;
          margin-top: 10px;
        }
      }

      .emailInput {
        label {
          font-family: "Inter";
          font-weight: 400;
          font-size: 11px;
          color: black;
        }
        input {
          width: 100%;
          height: 38.5px;
          font-family: "Inter";
          font-weight: 400;
          font-size: 10px;
          background-color: lightgrey;
          color: black;
          border: 0.9772px solid black;
          border-radius: 3.20867px;
          padding: 10px;
          margin-top: 10px;
        }
      }

      .telephoneInput {
        label {
          font-family: "Inter";
          font-weight: 400;
          font-size: 11px;
          color: black;
        }
        input {
          width: 100%;
          height: 38.5px;
          font-family: "Inter";
          font-weight: 400;
          font-size: 10px;
          background-color: lightgrey;
          color: black;
          border: 0.9772px solid black;
          border-radius: 3.20867px;
          padding: 10px;
          margin-top: 10px;
        }
      }
      .buttons {
        display: flex;
        gap: 30px;
        margin-top: 15px;
        align-items: center;
        margin-top: 20px;

        .updateBttn {
          width: 60%;
          height: 38.37px;
          background-color: #f10606;
          border: 1.2182px solid #f10606;
          border-radius: 5px;
          color: #ffffff;
        }

        .deleteBttn {
          width: 30%;
          height: 38.37px;
          background-color: #f10606;
          border: 1.2182px solid #f10606;
          border-radius: 5px;
          font-family: "Inter";
          font-weight: 500;
          font-size: 12.7913px;
          color: #ffffff;
        }
      }
    }
  }

  @media (min-width: 400px) {
    width: 65%;
    top: 75%;
    left: 45%;
    transform: translate(-40%, -50%);
  }

  @media (min-width: 700px) {
    width: 36%;
    top: 75%;
    left: 53%;
    transform: translate(-60%, -50%);
  }

  @media (min-width: 900px) {
    width: 22%;
    top: 65%;
    left: 48%;
    transform: translate(-40%, -50%);

    form {
      .closeButton {
        cursor: pointer;
      }
    }
    .techRegButton {
      cursor: pointer;
    }
  }
`;
