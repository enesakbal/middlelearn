import React from "react";
import { useLocation } from "react-router-dom";
import CustomNavbar from "../../../core/components/custom_navbar/custom_navbar";
import './student_profile_view.css';
function upperWord(string) {

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const StudentProfileView = () => {
    const location = useLocation();
    const data = location.state.data;
    const { name, surname, pic_url, number ,education, email, profession, adress } = data;

    return (
        <>
            <CustomNavbar index="1" data={data}></CustomNavbar>
            <div className='student-profile-body'>
                <div className='student-profile-card'>
                    <img className='student-profile-card-image' src={pic_url}></img>

                    <div className='student-profile-form-card '>
                        <label className='student-profile-form-card-subtitle'>Name</label>
                        <label className='student-profile-form-card-info'>{upperWord(name) + ' ' + upperWord(surname)}</label>
                        <br />
                        <br />

                        <label className='student-profile-form-card-subtitle'>Number</label>
                        <label className='student-profile-form-card-info'>{number}</label>
                        <br />
                        <br />

                        <label className='student-profile-form-card-subtitle'>Education</label>
                        <label className='student-profile-form-card-info'>{education}</label>
                        <br />
                        <br />

                        <label className='student-profile-form-card-subtitle'>Email Adress</label>
                        <label className='student-profile-form-card-info'>{email}</label>
                        <br />
                        <br />

                        <label className='student-profile-form-card-subtitle'>Adress</label>
                        <label className='student-profile-form-card-info'>{adress}</label>


                    </div>
                </div>

            </div>
        </>
    )
}
export default StudentProfileView;