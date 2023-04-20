import React from "react";
import download from "../Images/download.png"
import { Link, } from "react-router-dom";

// contains DISPLAY property of the contact as a list
function ContactCard(props) {
  const { id, email, name } = props.contact; // destructuring props

  return (
    <div className="item">
      <img src={download} className="ui avatar image" alt="usr"></img>
      <div className="content">
        <Link to={{pathname:`/contact/${id}`}} state={{contact:props.contact}}> {/* passing link along with data and state */}
          <div className="header">{name}</div>
          <div>{email}</div>
          <div>ID: {id}</div>    
        </Link>    
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "15px",float:"right",fontSize:"1.35rem",cursor:"pointer" }}
        onClick={()=>props.clickHandler(id)}
      ></i>
    </div>
  );
}

export default ContactCard;
