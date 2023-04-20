import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom';

//contact listing
function ContactList(props) {
  const deleteHandler=(id)=>{
    props.getContactId(id);
  }
  
  
  const renderContactList = props.contacts.length === 0
  ? <div>No contacts found</div> 
  : props.contacts.map((contact) => (
      <ContactCard key={contact.id} contact={contact} clickHandler={deleteHandler} />
  ));

  return (
      <div className='main'>
        <h2>Contact List</h2>
        <Link to="/add">
        <button className='ui button blue right'>Add Contact</button>
        </Link>
        <div className="ui celled list">{renderContactList}</div>
    </div>
);
  
}


export default ContactList