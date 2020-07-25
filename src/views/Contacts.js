import React from "react";
import { Segment, Header } from "semantic-ui-react";
import ContactForm from "../components/ContactForm";
import ContactTable from "../components/ContactTable";
import { ContactContextProvider } from "../contexts/ContactContext"

export default function Contacts() {
  return (
    <ContactContextProvider>
      <Segment basic>
        <Header as="h3">Contacts</Header>
        <ContactForm />
        <ContactTable />
      </Segment>
    </ContactContextProvider>
  );
}