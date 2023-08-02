import { Link } from "react-router-dom";
import contactBookImage from "../../assets/contactBookImage.svg";
import { StyledHeaderContainer } from "./style";

export const RegisterHeader = () => {
  return (
    <StyledHeaderContainer>
      <div className="header">
        <div className="titleSection">
          <img src={contactBookImage} alt="contactBookImage"></img>
          <h1>Customer Register</h1>
        </div>
        <Link to="/">Back</Link>
      </div>
    </StyledHeaderContainer>
  );
};
