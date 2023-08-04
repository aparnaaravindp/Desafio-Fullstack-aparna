import styled from "styled-components";

export const StyledMainDiv = styled.div`
  width: 100%;
  background-color: #ffff;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #000000;

  .mainContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .userDiv {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 60%;
      margin-top: 40px;
      background-color: lightgray;
      border-radius: 8px;

      .userName {
        font-family: "Inter";
        font-weight: 600;
        font-size: 20px;
        color: #f10606;
      }
      .userEmail {
        font-family: "Inter";
        font-weight: 600;
        font-size: 16px;
        color: #f10606;
      }

      .userTelephone {
        font-family: "Inter";
        font-weight: 600;
        font-size: 16px;
        color: #f10606;
      }
    }

    .contactSection {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 70%;
      margin-top: 40px;
      .contact {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8rem;
        h1 {
          font-family: "Inter";
          font-weight: 600;
          font-size: 20px;
          color: #f10606;
        }

        .createButton {
          width: 32.49px;
          height: 32px;
          background-color: #f10606;
          border-radius: 5px;
          border: none;
          color: #ffffff;
          font-size: 22px;
        }
      }

      .contactDetails {
        width: 100%;
        background-color: #ff5349;
        border-radius: 8px;
        margin: 0 auto;
        margin-top: 20px;

        ul {
          padding: 10px;

          .contactList {
            display: flex;
            align-items: center;
            justify-content: column;
            width: 80%;
            height: 60px;
            background-color: lightgray;
            border-radius: 5px;
            margin: 0 auto;
            margin-top: 10px;
            padding: 10px;
            cursor: pointer;

            .contactInfo {
              display: flex;
              align-items: center;
              flex-direction: column;
              gap: 0.2rem;
            }

            .contactName {
              font-family: "Inter";
              font-weight: 700;
              font-size: 14.2123px;
              color: black;
            }

            .email {
              font-family: "Inter";
              font-weight: 400;
              font-size: 12.182px;
              color: black;
            }
          }
        }
      }
    }
  }

  @media (min-width: 450px) {
    .mainContainer {
      .userDiv {
        width: 40%;
      }
      .contactSection {
        width: 55%;
      }
    }
  }

  @media (min-width: 700px) {
    .mainContainer {
      .userDiv {
        width: 25%;
      }
      .contactSection {
        width: 30%;
      }
    }
  }

  @media (min-width: 900px) {
    .mainContainer {
      .userDiv {
        width: 15%;

        cursor: pointer;
      }

      .contactSection {
        width: 20%;

        .contactList {
          width: 30%;
        }
      }
    }
    .contact {
      .createButton {
        cursor: pointer;
      }
    }
  }
`;
