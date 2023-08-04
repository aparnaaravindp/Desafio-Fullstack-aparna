import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { IUserData } from "../../providers/@types";
import { StyledModalDiv } from "./style";
export const UserUpdateModal = () => {
    const {
      userEditingStatus,
      setUserEditingStatus,
      userUpdate,
      userDelete
    } = useAuth();
  
    const { register, handleSubmit } = useForm({
      defaultValues: {
        fullname: userEditingStatus.fullname,
        email: userEditingStatus.email,
        telephone: userEditingStatus.telephone,
      },
    });
  
    const submit = async (data: IUserData) => {
      await userUpdate(data, userEditingStatus.id);
      setUserEditingStatus(null);
    };
  
    return (
      <StyledModalDiv>
        <form onSubmit={handleSubmit(submit)}>
          <div className="userUpdate">
            <h1 className="formTitle">User Details</h1>
            <button
              className="closeButton"
              type="button"
              onClick={() => setUserEditingStatus(null)}
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
            </div>
            <div className="emailInput">
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Email" {...register("email")} />
            </div>
            <div className="telephoneInput">
              <label htmlFor="">Telephone</label>
              <input
                type="text"
                placeholder="Telephone"
                {...register("telephone")}
              />
            </div>
  
            <div className="buttons">
              <button className="updateBttn" type="submit">
                Save changes
              </button>
              <button
                className="deleteBttn"
                type="button"
                onClick={async () => {
                  await userDelete(userEditingStatus.id);
                  setUserEditingStatus(null);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      </StyledModalDiv>
    );
  }
  