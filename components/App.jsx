import React from "react";
import Card from "../components/Card";
import contacts from "../components/Contacts";

function createCard(contact) {
  return <Card
  key={contact.id}
  name={contact.name}
  src={contact.imgURL}
  tel={contact.phone}
  mail={contact.email}
   />
}

function App() {
  return (
    <div>
    <h1>My Contacts</h1>
    {contacts.map(createCard)}
  </div>
  );
}

export default App;

