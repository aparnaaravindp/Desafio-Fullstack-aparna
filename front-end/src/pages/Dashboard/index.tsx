import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { DashboardHeader } from "../../components/DashboardHeader";
import { StyledMainDiv } from "./style";

export const Dashboard = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  interface IContact {
    id: number;
    fullname: string;
    email: string;
    telephone: number;
    createdAt: string;
  }

  useEffect(() => {
    (async () => {
      const response = await api.get<IContact[]>("/contacts");
      setContacts(response.data);
    })();
  }, []);

  return (
    <StyledMainDiv>
      <div className="mainContainer">
        <DashboardHeader />
        <div className="contactSection">
          <div className="contact">
            <h1>Contacts</h1>
          </div>
          <div className="contactDetails">
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id} className="contactList">
                  <div className = "contactInfo">
                  <h2 className="contactName">{contact.fullname} </h2>
                  <p className="email">{contact.email}</p>
                  <p className="telephone"> {contact.telephone} </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </StyledMainDiv>
  );
};
