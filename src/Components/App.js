import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import ContactList from "./ContactList"; //listing contact
import AddContact from "./AddContact"; //adding contact
import ContactDetail from "./ContactDetail"; //views contact detail
import EditContact from "./EditContact";
import { ContactCrudContextProvider } from "../context/ContactCrudContext"; //context file to pass in router


function App() {

  //useffect for retrive contacts

  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactCrudContextProvider>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList />
            }
          />
          <Route
            path="/add"
            element={<AddContact  />}
          />

          <Route
            path="/edit"
            element={
              <EditContact></EditContact>
            }
          />

          <Route
            path="/contact/:id"
            element={<ContactDetail></ContactDetail>}
          />
        </Routes>
        </ContactCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;


  /*loacal storage getting item useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect. Some examples of side effects are: fetching data, directly updating the DOM, and timers.

      @useEffect accepts two arguments. The second argument is optional.
      @useEffect(<function>, <dependency>)
 */
  // const LOCAL_STORAGE_KEY = "contacts";
  // @local storage SETTING item
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  //   console.log("Contacts saved to local storage:", contacts);
  // }, [contacts]);

  // @local storage GETTING item
  // useEffect(() => {
  // const savedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  // if (savedContacts && savedContacts.length > 0) {
  //   setContacts(savedContacts);
  // }
  // }, []);

