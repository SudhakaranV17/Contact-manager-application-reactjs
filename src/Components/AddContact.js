import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContactCrud } from "../context/ContactCrudContext";


const AddContact =()=> {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const{addContactHandler}=useContactCrud() 
  const navigate = useNavigate();
  //MAIN function for adding contact
    const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandatory!");
      return;
    }
    addContactHandler( {name,email} );
    setName("")
    setEmail("")
    window.confirm("Added successfully. Do you want to see Contact list.?") ? navigate("/") : navigate("/add");
    
  };

 
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName( e.target.value )}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>setEmail( e.target.value )}
            />
          </div>
          <button className="ui button blue">Add</button>
          <Link to="/">
        <button className='ui button blue right' style={{float:"right"}}>Contact List</button>
        </Link>
        </form>
      </div>
    );
  }


export default AddContact;
