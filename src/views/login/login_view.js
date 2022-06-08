import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../core/components/custom_button/custom_button";
import CustomTextField from "../../core/components/custom_text_field/custom_textfield";
import LessonDatabase from "../../core/constants/lesson_data/lesson_data";
import UserDatabase from "../../core/constants/user_data/user_data";

import NavigationPaths from "../../core/init/navigation/router_paths";


import "./login_view.css";

const LoginView = () => {
    const [usernameText, setUsernameText] = useState('')
    const [passwordText, setPasswordText] = useState('')

    const [isVisibleError, setIsVisibleError] = useState(null);

    const Navigate = useNavigate();

    const TO_HOME_ADMIN = (data) => Navigate(NavigationPaths.HOME_ADMIN, { state: { data: data } })


    const TO_HOME_STUDENT = (data) => Navigate(NavigationPaths.HOME_STUDENT, { state: { data: data } })


    const errorText = () => {

        if (isVisibleError === 'password_error') {
            return <div className="error">*Check your password</div>

        } else if (isVisibleError === 'not_found_error') {
            return <div className=" error"> *Not found account </div>

        } else if (isVisibleError === 'success') {
            return <div className="success"> Success !</div>

        }
        return null
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(usernameText);
        console.log(passwordText);
        const isStudent = UserDatabase.STUDENT_LIST.find(value => value.username === usernameText);
        const isAdmin = UserDatabase.ADMIN_LIST.find(value => value.username === usernameText);

        if (isStudent || isAdmin) {
            if (isStudent !== undefined && isStudent.password === passwordText) {
                // console.log("ögrenci girdi");
                setIsVisibleError('success');
                TO_HOME_STUDENT(isStudent)

            }
            else if (isAdmin !== undefined && isAdmin.password === passwordText) {
                // console.log("admin girdi");
                setIsVisibleError('success');
                TO_HOME_ADMIN(isAdmin)

            }
            else {
                // console.log("yanlıs parola");
                setIsVisibleError('password_error')
            }
        } else {
            // console.log("HESAP YOK")
            setIsVisibleError('not_found_error')

        }
    }

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Log In</div>
                <div>
                    <form onSubmit={onSubmit}>
                        <CustomTextField
                            onChange={event => setUsernameText(event.target.value)}
                            name="usernameInput"
                            header="Username"
                            hintText="user1"
                        />

                        <CustomTextField
                            onChange={event => setPasswordText(event.target.value)}
                            name="passwordInput"
                            header="Password"
                            hintText="pass1"
                            isObscure="true" />

                        {errorText()}

                        <div style={{ height: "30px" }}></div>
                        <CustomButton
                            type="submit"
                            buttonText="Log In"
                            hasIcon={false}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginView;
