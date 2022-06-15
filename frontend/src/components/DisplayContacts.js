import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class DisplayContacts extends Component {
  state = {
    contacts: [],
  };

  async componentDidMount() {
    this.getContacts();
  }

  getContacts = async () => {
    const res = await axios.get("http://localhost:4000/api/contacts/");
    this.setState({
      contacts: res.data,
    });
  };

  deleteContact = async (contactId) => {
    await axios.delete("http://localhost:4000/api/contacts/" + contactId);
    this.getContacts();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.contacts && this.state.contacts.length > 0 ? (
            this.state.contacts
              .slice(0, 4)
              .sort((a, b) => a.firstName.localeCompare(b.firstName))
              .map((contact) => (
                <div className="col-md-8" key={contact._id}>
                  <div className="card">
                    <div className="card-body">
                      <h6>FIRSTNAME</h6>
                      <p>{contact.firstName}</p>
                      <h6>LASTNAME</h6>
                      <p>{contact.lastName}</p>
                      <h6>PHONE NUMBER</h6>
                      <p>{contact.phoneNumber}</p>
                    </div>
                    <div className="card-footer">
                      <button
                        className="btn btn-danger"
                        onClick={() => this.deleteContact(contact._id)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <h1>The contact list is empty.</h1>
          )}
        </div>
      </div>
    );
  }
}
