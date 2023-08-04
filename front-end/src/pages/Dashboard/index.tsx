import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { DashboardHeader } from "../../components/DashboardHeader";
import { StyledMainDiv } from "./style";
import { useAuth } from "../../hooks/useAuth";
import { CreateModal } from "../../components/CreateModal";
import { IContact } from "../../providers/@types";
import { UpdateModal } from "../../components/UpdateModal";
import { UserUpdateModal } from "../../components/UserUpdateModal";

export const Dashboard = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const {
    contactModal,
    setContactModal,
    setEditingStatus,
    userEditingStatus,
    setUserEditingStatus,
    editingStatus,
  } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await api.get<IContact[]>("/contacts");
      setContacts(response.data);
    })();
  }, []);

  const { user } = useAuth();

  return (
    <StyledMainDiv>
      <div className="mainContainer">
        <DashboardHeader />
        {contactModal ? <CreateModal /> : null}

        <div className="userDiv" onClick={() => setUserEditingStatus(user)}>
          <h1 className="userName">{user.fullname} </h1>
          <p className="userEmail">{user.email}</p>
          <p className="userTelephone">{user.telephone}</p>
        </div>
        <div className="contactSection">
          <div className="contact">
            <h1>Contacts</h1>
            {
              <button
                className="createButton"
                onClick={() => setContactModal(true)}
              >
                +
              </button>
            }
          </div>
          <div className="contactDetails">
            <ul>
              {contacts.map((contact) => (
                <li
                  key={contact.id}
                  className="contactList"
                  onClick={() => setEditingStatus(contact)}
                >
                  <div className="contactInfo">
                    <h2 className="contactName">{contact.fullname} </h2>
                    <p className="email">{contact.email}</p>
                    <p className="telephone"> {contact.telephone} </p>
                  </div>
                </li>
              ))}
            </ul>
            {userEditingStatus ? <UserUpdateModal /> : null}
            {editingStatus ? <UpdateModal /> : null}
          </div>
        </div>
      </div>
    </StyledMainDiv>
  );
};
