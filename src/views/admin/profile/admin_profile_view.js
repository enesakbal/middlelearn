import React from 'react';
import { useLocation } from 'react-router-dom';
import CustomNavbar from '../../../core/components/custom_navbar/custom_navbar';
import './admin_profile_view.css'


function upperWord(string) {

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const AdminProfileView = () => {
    const location = useLocation();
    const data = location.state.data;
    console.log(data)
    const { name, surname, pic_url, education, email, profession , adress } = data;
    return (
        <>
            
                <CustomNavbar data={data} index="1" isAdmin={true} />
                <div className='admin-profile-body'>
                    <div className='admin-profile-card'>
                        <img className='admin-profile-card-image' src={pic_url}></img>
                        {/* <label className='admin-profile-card-title'>
                            {upperWord(name) + ' ' + upperWord(surname)}
                        </label> */}
                        <div className='admin-profile-form-card '>
                            <label className='admin-profile-form-card-subtitle'>Name</label>
                            <label className='admin-profile-form-card-info'>{upperWord(name) + ' ' + upperWord(surname)}</label>
                            <br />
                            <br />

                            <label className='admin-profile-form-card-subtitle'>Profession</label>
                            <label className='admin-profile-form-card-info'>{upperWord(profession)}</label>
                            <br />
                            <br />

                            <label className='admin-profile-form-card-subtitle'>Education</label>
                            <label className='admin-profile-form-card-info'>{education}</label>
                            <br />
                            <br />

                            <label className='admin-profile-form-card-subtitle'>Email Adress</label>
                            <label className='admin-profile-form-card-info'>{email}</label>
                            <br />
                            <br />

                            <label className='admin-profile-form-card-subtitle'>Adress</label>
                            <label className='admin-profile-form-card-info'>{adress}</label>


                        </div>
                    </div>

                </div>
            


        </>
    )



}

export default AdminProfileView;