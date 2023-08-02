import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  .header {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    .titleSection {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      img {
        margin-top: 20px;
        width: 13%;
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

    a {
      width: 79.54px;
      height: 31.95px;
      background-color: #f10606;
      border-radius: 4px;
      color: #ffff;
      padding: 10px 20px;
      font-family: "Inter";
      font-weight: 600;
      font-size: 12px;
      margin-top: 20px;
      margin-left: -20px;
    }
  }

  @media (min-width: 400px) {
    .header {
      justify-content: center;
      gap: 70px;
    }
  }

  @media (min-width: 700px) {
    .header {
      justify-content: center;
      gap: 100px;
    }
  }

  @media (min-width: 900px) {
    .header {
      justify-content: center;
      gap: 120px;
    }
  }
`;
