import React from 'react';
import user from '../Images/user.jpg';
import { useLocation } from 'react-router-dom';


//display contact as a seperate {CARD} like style 
function ContactDetail(props) {
  const location = useLocation();
  const state = location.state
//   const contact = window.location.state.contact;
// console.log(window.location.state.contact.props.contact);
//  console.log("data is props: ",Object.values(props.contacts[1]));
// console.log(state);
  const { id,name, email } = state.contact;

  return (
    <div className="main" style={{marginTop:"50px"}}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">Name:  {name}</div>
          <div className="description">Mail:  {email}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
