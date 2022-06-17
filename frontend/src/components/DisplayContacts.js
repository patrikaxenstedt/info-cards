import React, { Component } from "react";
import axios from "axios";

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
      <div className="sm:max-w-l w-full p-3">
        <h1 className="pt-8 uppercase">List</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 pt-16">
          {this.state.contacts && this.state.contacts.length > 0 ? (
            this.state.contacts
              .sort((a, b) => a.firstName.localeCompare(b.firstName))
              .slice(0, 4)
              .map((contact) => (
                <div className="w-full" key={contact._id}>
                  <button
                    className="float-right py-1 px-2 m-2 text-sm font-medium text-center text-white bg-[#d41a54]"
                    onClick={() => this.deleteContact(contact._id)}
                  >
                    X
                  </button>
                  <div className="p-12 bg-white border border-gray-200 shadow-sm">
                    <h5 className="text-sm font-bold uppercase tracking-tight text-gray-700 dark:text-gray-400">
                      First name
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {contact.firstName}
                    </p>
                    <h5 className="text-sm font-bold uppercase tracking-tight text-gray-700 dark:text-gray-400">
                      Last name
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {contact.lastName}
                    </p>
                    <h5 className="text-sm font-bold uppercase tracking-tight text-gray-700 dark:text-gray-400">
                      Phone number
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {contact.phoneNumber}
                    </p>
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
