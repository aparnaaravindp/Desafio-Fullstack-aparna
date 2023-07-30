import contactBookImage from "../../assets/contactBookImage.svg";
import { useAuth } from "../../hooks/useAuth";
import { StyledDashboardHeader } from "./style";

export const DashboardHeader = () => {
  const { userLogout } = useAuth();

  return (
    <StyledDashboardHeader>
      <div className="mainPageHeader">
        <div className="title">
          <img src={contactBookImage} alt="contactBookImage"></img>
          <h1 className="name">Customer Register</h1>
        </div>
        <button className="logoutButton" onClick={() => userLogout()}>
          Logout
        </button>
      </div>
    </StyledDashboardHeader>
  );
};
