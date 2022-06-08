import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import './custom_navbar.css'
import '../../init/date_manager/date_manager'
import DateManager from '../../init/date_manager/date_manager';
import NavigationPaths from '../../init/navigation/router_paths';

function upperWord(string) {

  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const CustomNavbar = (probs) => {

  const { data, index, isAdmin } = probs;

  const Navigate = useNavigate();

  const TO_PROFILE = () => {
    isAdmin ? Navigate(NavigationPaths.PROFILE_ADMIN, { state: { data: data } }) : Navigate(NavigationPaths.PROFILE_STUDENT, { state: { data: data } })
  }
  const TO_HOME = () => {
    isAdmin ? Navigate(NavigationPaths.HOME_ADMIN, { state: { data: data } }) : Navigate(NavigationPaths.HOME_STUDENT, { state: { data: data } })
  }

  const TO_LOGIN = () => {
    Navigate('/')

  }

  const [currentTime, setTime] = useState(DateManager.getCurrentTime)

  function updateTime() {
    setTime(DateManager.getCurrentTime)
  }
  setInterval(updateTime, 1000);


  return (
    <div className='full'>
      <div className='firsthalf'>
        <a href='/'><img className='flat' src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'></img></a>
        <button onClick={TO_HOME} className={index === '0' ? 'btn active' : 'btn'}>Home</button>
        <button onClick={TO_PROFILE} className={index === '1' ? 'btn active' : 'btn'}>Profile</button>
        <p className='date'>
          {DateManager.getCurrentDate()}
          <br />
          {currentTime}
        </p>
      </div>

      <div className='secondhalf'>
        <img className='circle' alt='Avatar' src={data.pic_url}></img>
        <label className='info'>{upperWord(data.name) + ' ' + upperWord(data.surname)}</label>
        <a className='quit' onClick={TO_LOGIN}>Quit</a>
      </div>

    </div>
  )
}

export default CustomNavbar;
