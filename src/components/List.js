import React, { Component } from "react";
import PropTypes from "prop-types";
import "./List.css";

class List extends Component {
  constructor() {
    super();
    this.onChangeFilterText = this.onChangeFilterText.bind(this);
  }
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };
  state = {
    filterText: "",
  };
  onChangeFilterText(e) {
    this.setState({
      filterText: e.target.value,
    });
  }
  render() {
    const filteredContacts = this.props.contacts.filter((contact) => {
      return (
        contact.name
          .toLowerCase()
          .indexOf(this.state.filterText.toLowerCase()) !== -1
      );
    })
    console.log(filteredContacts)

    return (
      <div>
        <div className={"filterArea"}>
          <input
            value={this.state.filterText}
            id={"filter"}
            className={"filter"}
            type="text"
            onChange={this.onChangeFilterText}
            name="filter"
            placeholder="Filtreleyin"
          />
        </div>
        <ul className={"listArea"}>
          {filteredContacts.map((contact) => {
            return (
              <li className={"item"} key={contact.phone}>
                <div className={"name"}>{contact.name}</div>
                <div className={"span"}>{contact.phone}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
