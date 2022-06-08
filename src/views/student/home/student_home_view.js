import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import CustomNavbar from '../../../core/components/custom_navbar/custom_navbar';
import './student_home_view.css'
import CustomCard from '../../../core/components/custom_card/custom_card'
import LessonDatabase from '../../../core/constants/lesson_data/lesson_data'
import CustomStudentPopup from '../../../core/components/custom_student_pop_up/custom_student_pop_up';
const StudentHomeView = () => {
    const location = useLocation();
    const data = location.state.data;
    //user datası

    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);

    const onDisplay = (index) => {
        setShow(true);
        setIndex(index);
    }
    const offDisplay = () => {
        setShow(false);
        setIndex(0);
    }

    return (
        <>
            <CustomNavbar data={data} index="0" ></CustomNavbar>
            <div className='home'>
                <CustomStudentPopup data={LessonDatabase[index]} show={show} handleClose={offDisplay} />


                <div className='grid-container'>
                    {LessonDatabase.map((data, key) => {
                        return <CustomCard key={key} data={data} onClick={() => { onDisplay(key)}} />
                    })}
                    {/* <CustomCard data={LessonDatabase[0]} onClick={onDisplay} />
                    <CustomCard data={LessonDatabase[1]} />
                    <CustomCard data={LessonDatabase[2]} />
                    <CustomCard data={LessonDatabase[3]} /> */}
                </div>


            </div>

        </>
    )


}

export default StudentHomeView;
