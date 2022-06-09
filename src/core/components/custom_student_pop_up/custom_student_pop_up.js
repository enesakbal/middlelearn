import React, { useState } from 'react';
import './custom_student_pop_up.css'

const CustomStudentPopup = ({ handleClose, show, data }) => {

    const { lesson_name,subjects } = data;

    const [isInside, setIsInside] = useState(false);

    const clicksOutside = (e) => {
       
        return isInside ? null : handleClose();
    }

    return (
        show === true ?
            <div className=' student-modal student-display-block' onClick={clicksOutside}>
                <div className="student-modal-main">
                    <div className='student-modal-body'
                        onPointerEnter={() => { setIsInside(true); }}
                        onPointerLeave={() => { setIsInside(false) }}>
                        <label className='student-modal-title'>{lesson_name}</label>
                        <div className='student-modal-li-box'>
                            {subjects.map((element, key) => {
                                return <li key={key} className='student-modal-li'>
                                    <a className='student-modal-li-a' href={element[1]} target='_blank'>{element[0]}</a>
                                </li>
                            })}
                            {subjects.map((element, key) => {
                                return <li key={key} className='student-modal-li'>
                                    <a className='student-modal-li-a' href={element[1]} target='_blank'>{element[0]}</a>
                                </li>
                            })}  {subjects.map((element, key) => {
                                return <li key={key} className='student-modal-li'>
                                    <a className='student-modal-li-a' href={element[1]} target='_blank'>{element[0]}</a>
                                </li>
                            })}

                        </div>
                    </div>
                </div>
            </div > : null


    );
};
export default CustomStudentPopup;
