import React, { Component } from "react";
import { Link } from "react-router-dom";


class AddContact extends Component {
  
  state = {
    name: "",
    email: "",
    
  };
  //MAIN function for adding contact
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are mandatory!");
      return;
    }
    this.props.addContactHandler({
      id: Math.floor(Math.random()*100),
      name: this.state.name,
      email: this.state.email,
    });
    this.setState({ name: "", email: "" });
    // console.log(this.props);
    // window.confirm("Contact added successfully. Do you want to go to Contact List ?")?<Link to={'/'}></Link>:alert("Thank You.");
    alert("added")
    
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
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
}

export default AddContact;
