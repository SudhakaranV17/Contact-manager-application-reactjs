import React from 'react';
import user from '../Images/user1.jpg';
import { Link, useLocation } from 'react-router-dom';


//display contact as a seperate {CARD} like style 
function ContactDetail(props) {
  const location = useLocation();
  const state = location.state
//   const contact = window.location.state.contact;
// console.log(window.location.state.contact.props.contact);
//  console.log("data is props: ",Object.values(props.contacts[1]));
// console.log(state);
  const { name, email } = state.contact;

  return (
    <div className="main" style={{paddingTop:"70px"}} >
      <div className="ui card centered" >
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">Name:  {name}</div>
          <div className="description">Mail:  {email}</div>
        </div>
      </div>
      <div className='center-div' style={{textAlign:"center"}}>
        <Link to='/'>
        <button className='ui button blue center'>Back to contact List</button>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetail; 
