import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../hooks/useAuth";
import { RegisterHeader } from "../../components/RegisterHeader";
import { StyledDiv } from "./style";
import { IRegisterData } from "../../providers/@types";

const schema = yup
  .object({
    fullname: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    telephone: yup
      .number()
      .typeError("It should be a number")
      .required("Telephone is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(/(\d)/, "Must contain at least 1 number")
      .matches(/[a-z]/, "Must contain at least 1 lower case letter")
      .matches(/[A-Z]/, "Must contain at least 1 capital letter")
      .matches(/(\W|_)/, "Must contain at least 1 special character")
      .matches(/.{8,}/, "Must contain at least 8 characters"),
  })
  .required();

export function RegisterPage() {
  const { userRegister } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<IRegisterData> = (data) => {
    userRegister(data);
  };

  return (
    <StyledDiv>
      <RegisterHeader />

      <div className="registerForm">
        <h1>Create your account</h1>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="">Fullname</label>
            <input
              type="text"
              placeholder="Digit your fullname"
              {...register("fullname")}
            />
            <p>{errors.fullname?.message}</p>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Digit your email"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <label htmlFor="">Telephone</label>
            <input
              type="number"
              placeholder="Option for telephone"
              {...register("telephone")}
            />
            <p>{errors.telephone?.message}</p>
          </div>

          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Digit your password"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </div>

          <button className="registerButton" type="submit">
            Register
          </button>
        </form>
      </div>
    </StyledDiv>
  );
}
