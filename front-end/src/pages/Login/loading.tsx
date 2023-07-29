import loadingImage from "../../assets/loadingImage.svg";
import { StyledLoadingDiv } from "./loadingStyle";

export const Loading = () => {
  return (
    <StyledLoadingDiv>
      <img src={loadingImage} alt="loadingImage"></img>
    </StyledLoadingDiv>
  );
};
