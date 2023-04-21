import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContactCrud} from '../context/ContactCrudContext'

const EditContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {updateContactHandler} = useContactCrud();
  const { id, name, email} =location.state.contact;
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);




  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "") {
      alert("All fields are mandatory!");
      return;
    }
    updateContactHandler({
      id: id ,
      name:newName,
      email:newEmail,
    });
    setNewName("");
    setNewEmail("");
    window.confirm("Updated successfully. Do you want to see Contact list.?") ? navigate("/") : navigate("/add");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
        <Link to="/">
          <button
            className="ui button blue right"
            style={{ float: "right" }}
          >
            Contact List
          </button>
        </Link>
      </form>
    </div>
  );
};

export default EditContact;
