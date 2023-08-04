import { useForm } from "react-hook-form";
import { StyledModalDiv } from "../UpdateModal/style";
import { useAuth } from "../../hooks/useAuth";
import { IContactData } from "../../providers/@types";

export function UpdateModal() {
  const { editingStatus, setEditingStatus, contactUpdate, contactDelete } =
    useAuth();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullname: editingStatus!.fullname,
      email: editingStatus!.email,
      telephone: editingStatus!.telephone,
    },
  });

  const submit = async (data: IContactData) => {
    await contactUpdate(data, editingStatus!.id);
    setEditingStatus(null);
  };

  return (
    <StyledModalDiv>
      <form onSubmit={handleSubmit(submit)}>
        <div className="contactUpdate">
          <h1 className="formTitle">Contact Details</h1>
          <button
            className="closeButton"
            type="button"
            onClick={() => setEditingStatus(null)}
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
                await contactDelete(editingStatus!.id);
                setEditingStatus(null);
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
