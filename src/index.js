import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, createBrowserRouter, HashRouter, Route, RouterProvider} from 'react-router-dom'


//Authentication
import Login from './components/Login'
import Signup from './components/Signup';

//ADMIN PAGE * ADMIN PAGE * ADMIN PAGE * ADMIN PAGE
import CameraFootage from './pages_admin/CameraFootage';
import AddAccount from './pages_admin/AddAccount';
import Database from './pages_admin/Database';
import Attendance from './pages_admin/Attendance';
import ParkedCarLog from './pages_admin/ParkedCarLog';

//STAFF PAGE * STAFF PAGE * STAFF PAGE * STAFF PAGE STAFF PAGE 
import CameraFootageStaff from './pages_staff/CameraFootageStaff';
import AccountPage from './pages_staff/AccountPage';
import RequestPlateNumber from './pages_staff/RequestPlateNumber';


ReactDOM.createRoot(document.getElementById('root')).render(

  <HashRouter>
    <App/>
  </HashRouter>
);


/*const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "signup",
    element: <Signup/>,
  },

  {
    path: "login",
    element: <Login/>,
  },
  //ADMIN PAGE * ADMIN PAGE * ADMIN PAGE * ADMIN PAGE
  {
    path: "camerafootage",
    element: <CameraFootage/>,
  },
  {
    path: "addaccount",
    element: <AddAccount/>,
  },
  {
    path: "database",
    element: <Database/>,
  },
  {
    path: "attendance",
    element: <Attendance/>,
  },
  {
    path: "parkedcarlog",
    element: <ParkedCarLog/>,
  },

  //STAFF PAGE * STAFF PAGE * STAFF PAGE * STAFF PAGE STAFF PAGE 
  {
    path: "camerafootagestaff",
    element: <CameraFootageStaff/>,
  },
  {
    path: "accountpage",
    element: <AccountPage/>,
  },
  {
    path: "requestplatenumber",
    element: <RequestPlateNumber/>,
  },
]);
*/





