import styled from "styled-components";

export const StyledDashboardHeader = styled.div`
  width: 100%;

  .mainPageHeader {
    width: 100%;
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    border-bottom: 1px solid #ff5349;

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      gap: 0.5rem;

      img {
        width: 8%;
      }

      .name {
        font-family: "Inter";
        font-weight: 600;
        font-size: 18px;
        color: #f10606;
      }
    }

    .logoutButton {
      font-family: "Inter";
      font-weight: 600;
      font-size: 12px;
      color: #ffff;
      width: 100px;
      height: 32px;
      background-color: #f10606;
      border-radius: 5px;
      border: none;
      margin-top: 30px;
    }
  }

  @media (min-width: 900px) {
    .logoutButton {
      cursor: pointer;
    }
  }
`;
