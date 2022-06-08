import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginView from './views/login/login_view';
import StudentHomeView from './views/student/home/student_home_view';
import AdminHomeView from './views/admin/home/admin_home_view';
import ProfileView from './views/admin/profile/admin_profile_view';
import NavigationPaths from './core/init/navigation/router_paths';
import AdminProfileView from './views/admin/profile/admin_profile_view';
import StudentProfileView from './views/student/profile/student_profile_view';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginView></LoginView>} />
{/* 
        <Route path='/' element={<ComponentA></ComponentA>} />
        <Route path='/componentB' element={<ComponentB></ComponentB>} /> */}

        <Route path={NavigationPaths.HOME_STUDENT} element={<StudentHomeView />} />
        <Route path={NavigationPaths.HOME_ADMIN} element={<AdminHomeView />} />
        <Route path={NavigationPaths.PROFILE_ADMIN} element={<AdminProfileView></AdminProfileView>}></Route>
        <Route path={NavigationPaths.PROFILE_STUDENT} element={<StudentProfileView></StudentProfileView>}></Route>


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
