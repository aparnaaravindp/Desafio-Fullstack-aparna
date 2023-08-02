import contactBookImage from "../../assets/contactBookImage.svg";
import { StyledContainer, StyledLink } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loading } from "./loading";
import { ILoginData } from "../../providers/@types";
import { useAuth } from "../../hooks/useAuth";

const schema = yup
  .object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export const Login = () => {
  const { loading, userLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StyledContainer>
          <div className="imageDiv">
            <img src={contactBookImage} alt="contactsImage"></img>
            <h1>Customer Register</h1>
          </div>
          <div className="loginForm">
            <form onSubmit={handleSubmit(userLogin)}>
              <div className="emailDiv">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Email" {...register("email")} />
                <p>{errors.email?.message}</p>
              </div>
              <div className="passwordDiv">
                <label htmlFor="">Senha</label>
                <input
                  type="password"
                  placeholder=".........."
                  {...register("password")}
                />
                <p>{errors.password?.message}</p>
              </div>
              <button type="submit">Login</button>
              <StyledLink to="/register">Register</StyledLink>
            </form>
          </div>
        </StyledContainer>
      )}
    </>
  );
};
