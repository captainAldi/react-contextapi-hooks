import React from 'react';
import { Container } from "semantic-ui-react";
import ContactView from "./views/Contacts"

function App() {
  return (
   <Container>
     <h1>React Context Hooks Demo</h1>
      <ContactView/>
   </Container>
  );
}

export default App;
