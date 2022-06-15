import React, { Component } from "react";
import axios from "axios";

export default class CreateContact extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    _id: "",
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
    };
    axios.post("http://localhost:4000/api/contacts", newContact);

    window.location.href = "/";
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="col-md-4 mt-4">
        <div className="card card-body">
          <h4>Create new</h4>
          <form onSubmit={this.onSubmit}>
            {/* Add firstname */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={this.onInputChange}
                name="firstName"
                value={this.state.firstName}
                required
              />
            </div>
            {/* Add lastname */}
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastName"
                onChange={this.onInputChange}
                value={this.state.lastName}
                required
              ></textarea>
            </div>
            {/* Add phone number */}
            <div className="form-group">
              <textarea
                type="number"
                className="form-control"
                placeholder="Phone number"
                name="phoneNumber"
                onChange={this.onInputChange}
                value={this.state.phoneNumber}
                required
              ></textarea>
            </div>
            <button className="btn btn-primary">Add new</button>
          </form>
        </div>
      </div>
    );
  }
}
