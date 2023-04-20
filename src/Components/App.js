import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import ContactList from "./ContactList"; //listing contact
import AddContact from "./AddContact";  //adding contact
import ContactDetail from "./ContactDetail"; //views contact detail

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // adding contact handler
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  // removing contact handler
  const removeContactHandler = (id)=>{
    const newContact = contacts.filter((contact)=>{
      return contact.id !== id;
    })
    setContacts(newContact)
  }

  /*loacal storage getting item useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect. Some examples of side effects are: fetching data, directly updating the DOM, and timers.

      useEffect accepts two arguments. The second argument is optional.

      useEffect(<function>, <dependency>)
 */

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log("contacts set in local storage " + savedContacts);
    if (savedContacts && savedContacts.length > 0) {
      setContacts(savedContacts);
    }
  }, []);
  
  //local storage setting item
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // console.log("Contacts saved to local storage:", contacts);
  }, [contacts]);
  

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/contact/:id" element={<ContactDetail></ContactDetail>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

