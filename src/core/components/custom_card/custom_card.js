import React, { Component } from 'react';
import './custom_card.css';
import CustomButton from '../custom_button/custom_button.js';

const CustomCard = (props) => {
    const { data , onClick} = props;
    const { lesson_name, pic_url, subjects } = data;

    return (
        
        <div className='card'>
            <div className='card-form'>
                <img className='card-img' src={pic_url}></img>
                <label className='card-title'>{lesson_name}</label>
                <label className='card-subtitle'> Last Added</label>
                <li className='card-li'>{subjects[0][0]}</li>
                <li className='card-li'>{subjects[1][0]}</li>
                <li className='card-li'>{subjects[2][0]}</li>
                <CustomButton
                    onClick={onClick}
                    buttonText="Show All" 
                    borderRadius='10px'/>
            </div>
        </div>
    )

}
export default CustomCard;