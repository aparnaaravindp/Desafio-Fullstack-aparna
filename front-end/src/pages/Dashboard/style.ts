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

    .contactSection {
        display:flex;
        align-items:center;
        flex-direction:column;
        width:20%;
        margin-top:40px;
      .contact {
        h1 {
          font-family: "Inter";
          font-weight: 600;
          font-size: 20px;
          color: #f10606;
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
            width: 100%;
            height: 60px;
            background-color: lightgray;
            border-radius: 5px;
            margin: 0 auto;
            margin-top: 10px;
            padding: 10px;
            cursor: pointer;

            .contactInfo{
                display:flex;
                align-items:center;
                flex-direction:column;
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


  @media (min-width: 900px) {

    .contact {
      .createButton {
        cursor: pointer;
      }
    }
  }
`;
