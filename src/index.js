import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, createBrowserRouter, HashRouter, Route, RouterProvider } from 'react-router-dom'


//Authentication
import Login from './components/Login'
import Signup from './components/Signup';

//ADMIN PAGE * ADMIN PAGE * ADMIN PAGE * ADMIN PAGE
import DedicatedParkingSpace from './pages_admin/DedicatedParkingSpace';
import AddAccount from './pages_admin/AddAccount';
import Database from './pages_admin/Database';
import Attendance from './pages_admin/Attendance';
import ParkedCarLog from './pages_admin/ParkedCarLog';

//STAFF PAGE * STAFF PAGE * STAFF PAGE * STAFF PAGE STAFF PAGE 
import CameraFootageStaff from './pages_staff/CameraFootageStaff';
import AccountPage from './pages_staff/AccountPage';
import RequestPlateNumber from './pages_staff/RequestPlateNumber';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);






