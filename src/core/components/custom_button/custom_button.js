import React, { Component } from 'react'
import "./custom_button.css"

class CustomButton extends Component {
    render() {
        const { type, buttonText, id, key, hasIcon, onClick } = this.props;
        return (
            <div className="button-container" >
                <button className='custom-button' key={key} id={id} onClick={onClick} type={type}> {hasIcon === true ? null : buttonText} </button>
            </div>
        )
    }
}

export default CustomButton;