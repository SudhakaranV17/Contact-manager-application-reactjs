import {createContext ,useContext, useState} from 'react'
import api from "../api/contacts";

const contactscrudContext = createContext() //useContext() name

//Context Provider
export function ContactCrudContextProvider({children}) {
    const [contacts,setContacts] = useState([]);
    const [searchTerm, setSearchterm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    //retrive contacts using JSON server 
    const retriveContacts = async () => {
        const response = await api.get("/contacts");
        if(response.data) setContacts(response.data);
        
    };

    // adding contact handler usin JSON server
    const addContactHandler = async (contact) => {
      const request = {
        id: Math.floor(Math.random() * 100),
        ...contact,
      };
      const response = await api.post("/contacts", request);
      setContacts([...contacts, response.data]);
    };

      // removing contact handler using JSON server
    const removeContactHandler = async (id) => {
      await api.delete(`/contacts/${id}`);
      const newContact = contacts.filter((contact) => {
        return contact.id !== id;
      });
      setContacts(newContact);
    };

      //updating contact using JSON server
    const updateContactHandler = async (contact) => {
      const response = await api.put(`/contacts/${contact.id}`, contact);
      const { id } = response.data;
      setContacts(
        contacts.map((contact) => {
          return contact.id === id ? { ...response.data } : contact;
        })
      );
    };

    //search handler
    const SearchHandler = (searchTerm) => {
      setSearchterm(searchTerm);
      if (searchTerm !== "") {
        const newContactList = contacts.filter((contact) => {
          return Object.values(contact)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
        setSearchResults(newContactList);
      } else {
        setSearchResults(contacts);
      }
    };


    const value = {
        contacts,
        searchTerm,
        searchResults,
        retriveContacts,
        addContactHandler,
        removeContactHandler,
        updateContactHandler,
        SearchHandler
    }
  return (
   
    <contactscrudContext.Provider value={value}>
        {children}
    </contactscrudContext.Provider>
  )
}

//context CRUD function
export function useContactCrud() { 
    return useContext(contactscrudContext)
 }

