import React,{useEffect} from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom';
import {useContactCrud} from '../context/ContactCrudContext'

//contact listing
function ContactList(props) {

  const {contacts,retriveContacts,searchTerm,searchResults,SearchHandler} = useContactCrud(); //user defined context

  

    //useffect hook
    useEffect (()=>{
      retriveContacts()
    })
  
  //renders contact list 
  const renderContactList =(searchTerm.length < 1 ? contacts : searchResults).map((contact) => 
    (
        <ContactCard key={contact.id} contact={contact} />
    ));

  const getSearchTerm = (e) =>{
    SearchHandler(e.target.value)
  }



  return (
      <div className='main'>
        <h2 style={{paddingTop:"60px"}}>Contact List
        <Link to="/add">
        <button className='ui button blue' style={{float:"right"}}>Add Contact</button>
        </Link>
        </h2>
        <div className='ui search'>
          <div className='ui icon input'>
            <input type='text' placeholder='Search Contacts' className='prompt' value={searchTerm} onChange={(e)=>getSearchTerm(e)}/>
          <i className='search icon'></i>
          </div>
        </div>
        <div className="ui celled list">{renderContactList.length>0 ? renderContactList : "No contacts Available."}</div>
    </div>
);
  
}


export default ContactList
