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
      <div className="sm:max-w-l w-full p-3">
        <h1 className="pt-8 uppercase">Create new</h1>
        <form className="pt-16" onSubmit={this.onSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className="form-cshadow appearance-none border w-full py-2 px-3 text-gray-700 focus:outline-none"
              placeholder="First name"
              onChange={this.onInputChange}
              name="firstName"
              value={this.state.firstName}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="form-cshadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlineontrol"
              placeholder="Last name"
              onChange={this.onInputChange}
              name="lastName"
              value={this.state.lastName}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              pattern="[789][0-9]{9}"
              className="form-cshadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlineontrol"
              placeholder="Phone number"
              name="phoneNumber"
              onChange={this.onInputChange}
              value={this.state.phoneNumber}
              required
            />
          </div>
          <div>
            <button className="bg-[#04cccc] text-white font-bold py-2 px-4 uppercase tracking-widest">
              Add new
            </button>
          </div>
        </form>
      </div>
    );
  }
}
