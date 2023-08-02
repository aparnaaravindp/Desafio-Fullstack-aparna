import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAuth } from "../../hooks/useAuth";
import { StyledModalDiv } from "./style";
import { IContactData } from "../../providers/@types";

export const CreateModal = () => {
  const { setContactModal, contactCreate } = useAuth();

  const schema = yup
    .object({
      fullname: yup.string().required("Name is required"),
      email: yup.string().required("Email is required"),
      telephone: yup
        .number()
        .typeError("It should be a number")
        .required("Telephone is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = async (data: IContactData) => {
    await contactCreate(data);
    setContactModal(false);
  };

  return (
    <StyledModalDiv>
      <form onSubmit={handleSubmit(submit)}>
        <div className="contactRegister">
          <h1 className="formTitle">Register Contact</h1>
          <button
            className="closeButton"
            type="button"
            onClick={() => setContactModal(false)}
          >
            X
          </button>
        </div>
        <div className="inputData">
          <div className="nameInput">
            <label htmlFor="">Fullname</label>
            <input
              type="text"
              placeholder="Fullname"
              {...register("fullname")}
            />
            <p>{errors.fullname?.message}</p>
          </div>
          <div className="emailInput">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>
          <div className="telephoneInput">
            <label htmlFor="">Telephone</label>
            <input
              type="text"
              placeholder="Telephone"
              {...register("telephone")}
            />
            <p>{errors.telephone?.message}</p>
          </div>

          <button className="contactRegButton" type="submit">
            Register Contact
          </button>
        </div>
      </form>
    </StyledModalDiv>
  );
};
