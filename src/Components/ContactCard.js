import React from "react";
import download from "../Images/download.png"
import { Link, useNavigate} from "react-router-dom";
import { useContactCrud } from "../context/ContactCrudContext";

// contains DISPLAY property of the contact as a list
// @props: from ContactList.js file
function ContactCard(props) {
  const {removeContactHandler} = useContactCrud();
  const { id, email, name } = props.contact; 
  const navigate = useNavigate();
  const deleteHandler=(id)=>{
    window.confirm("Are you sure you want to Delete.?")?removeContactHandler(id) : navigate("/")
    
  }
  return (
    <div className="item">
      <img src={download} className="ui avatar image" alt="usr"></img>
      <div className="content">
        {/* passing link along with data and state */}
        <Link to={{pathname:`/contact/${id}`}} state={{contact:props.contact}}> 
          <div className="header">{name}</div>
          <div>{email}</div>
          <div>ID: {id}</div>    
        </Link>    
      </div>
      {/* delete icon */}
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "15px",float:"right",fontSize:"1.35rem",cursor:"pointer", marginLeft: "15px" }}
        onClick={()=>deleteHandler(id)}
      ></i>
      {/* edit icon */}
      <Link to={`/edit`} state={{contact:props.contact}}>
       <i
        className="edit alternate outline icon"
        style={{ color: "blue", marginTop: "15px",float:"right",fontSize:"1.35rem",cursor:"pointer" }}
        
      ></i>
      </Link>
    </div>
  );
}

export default ContactCard;
