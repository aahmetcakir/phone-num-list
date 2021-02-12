import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/Contacts";

class App extends Component {
  constructor() {
    super();
    this.addContact = this.addContact.bind(this);
  }
  state = {
    contacts: [
      {
        name: "Ahmet ÇAKIR",
        phone: "5316948991",
      },
      {
        name: "Muhemmet ÇAKIR",
        phone: "5388630512",
      },
      {
        name: "Berkay ÇAKIR",
        phone: "5313055364",
      },
      {
        name: "Umutcan ÇAKIR",
        phone: "5418424549",
      },
    ],
  };
  addContact(contact) {
    this.state.contacts.push(contact);
    this.setState(this.state.contacts);
  }
  render() {
    return (
      <div className="container">
        <Contacts addContact={this.addContact} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
