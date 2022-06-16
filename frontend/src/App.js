import React, { Component } from "react";
import CreateContact from "./components/CreateContact";
import DisplayContacts from "./components/DisplayContacts";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <CreateContact />
          <DisplayContacts />
        </div>
      </div>
    );
  }
}

export default App;
