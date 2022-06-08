import React, { Component } from 'react'
import "./custom_textfield.css";
class CustomTextField extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, hintText, onChange, isObscure } = this.props;

    return (

      <div className="input-container">
        <label>{header}</label>
        <input
          className={isObscure === "true" ? "input input-obscure" : "input"}
          type="text"
          name="usernameInput"
          onChange={onChange}
          placeholder={hintText}
          required />
      </div>
    )
  }
}
export default CustomTextField;
