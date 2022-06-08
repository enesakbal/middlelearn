import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CustomAdminPopup from '../../../core/components/custom_admin_pop_up/custom_admin_pop_up';
import CustomButton from '../../../core/components/custom_button/custom_button';
import CustomCard from '../../../core/components/custom_card/custom_card';
import CustomNavbar from '../../../core/components/custom_navbar/custom_navbar';
import FileDatabase from '../../../core/constants/file_data/file_data';
import LessonDatabase from '../../../core/constants/lesson_data/lesson_data';
import './admin_home_view.css';


const AdminHomeView = () => {
    const location = useLocation();
    const data = location.state.data;
    //admin datası
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
            <CustomNavbar data={data} index='0' isAdmin={true} />
            <div className='home'>
                <CustomAdminPopup data={LessonDatabase[index]} show={show}  handleClose={offDisplay} />
                <div className='grid-container'>
                    {LessonDatabase.map((data, key) => {
                        return <CustomCard key={key} data={data}  onClick={() => { onDisplay(key) }} />
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

export default AdminHomeView;