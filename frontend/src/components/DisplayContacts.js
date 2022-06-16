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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 pt-40">
        {this.state.contacts && this.state.contacts.length > 0 ? (
          this.state.contacts
            .slice(0, 4)
            .sort((a, b) => a.firstName.localeCompare(b.firstName))
            .map((contact) => (
              <div className="w-full" key={contact._id}>
                <button
                  className="float-right py-2 px-3 m-2 text-sm font-medium text-center text-white bg-[#d41a54]"
                  onClick={() => this.deleteContact(contact._id)}
                >
                  X
                </button>
                <div class="p-12 bg-white border border-gray-200 shadow-sm">
                  <h5 class="text-md font-bold tracking-tight text-gray-900 dark:text-black">
                    First name
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {contact.firstName}
                  </p>
                  <h5 class="text-md font-bold tracking-tight text-gray-900 dark:text-black">
                    Last name
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {contact.lastName}
                  </p>
                  <h5 class="text-md font-bold tracking-tight text-gray-900 dark:text-black">
                    Phone number
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {contact.phoneNumber}
                  </p>
                </div>
              </div>
            ))
        ) : (
          <h1>The contact list is empty.</h1>
        )}
      </div>
    );
  }
}
