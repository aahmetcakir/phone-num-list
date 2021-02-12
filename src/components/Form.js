import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Form.css";

class Form extends Component {
  static propTypes = {
    addContact: PropTypes.func,
  };
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    name: "",
    phone: "",
  };
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addContact({
      ...this.state,
    });
    this.setState({
      name: "",
      phone: "",
    });
  }

  render() {
    return (
      <div className={"container"}>
        <form className={"formArea"} onSubmit={this.onSubmit}>
          <input
            className={"input"}
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            id="name"
            placeholder="Ad giriniz"
          />
          <br />
          <input
            className={"input"}
            value={this.state.phone}
            onChange={this.onChange}
            name="phone"
            id="phone"
            placeholder="Tel NO giriniz"
          />
          <button className={"button"}>Ekle</button>
        </form>
      </div>
    );
  }
}

export default Form;
