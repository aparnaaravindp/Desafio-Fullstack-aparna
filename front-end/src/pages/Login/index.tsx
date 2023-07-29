import contactBookImage from "../../assets/contactBookImage.svg";
import { StyledContainer } from "./style";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Loading } from "./loading";
import { ILoginData } from "../../providers/@types";
import { AuthContext } from "../../providers/AuthProvider";

const schema = yup
  .object({
    email: yup.string().required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatório"),
  })
  .required();

export const Login = () => {

    const {loading} = useContext(AuthContext)

    const { userLogin } = useContext(AuthContext);

    const submit: SubmitHandler<ILoginData> = (data) => {
      userLogin(data);
    };

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
            <form onSubmit={handleSubmit(submit)}>
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
            </form>
          </div>
        </StyledContainer>
      )}
    </>
  );
};
