import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/Login";
import Navbar from "./components/Navbar";

import AddAccount from './pages_admin/AddAccount';
import Attendance from './pages_admin/Attendance';
import Database from './pages_admin/Database';
import ParkedCarLog from './pages_admin/ParkedCarLog';

import RequestPlateNumber from './pages_staff/RequestPlateNumber';


import { AuthContextProvider } from "./context/AuthContext";
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';





function App() {
  return (

    <div>
        Hello world

    
    </div>
    /*
    <div>
      <AuthContextProvider>
        <Routes>
          <Route href='https://soprak26.github.io/smartparkingdp2/' element={<Login />} />
          <Route
            path='/navbar'
            element={
              <ProtectedRoute>
                <Navbar />
              </ProtectedRoute>
            }

          />
          <Route
            path='/addaccount'
            element={
              <ProtectedRoute>
                <AddAccount />
              </ProtectedRoute>
            }
          />
          <Route
            path='/attendance'
            element={
              <ProtectedRoute>
                <Attendance />
              </ProtectedRoute>
            }
          />
          <Route
            path='/database'
            element={
              <ProtectedRoute>
                <Database/>
              </ProtectedRoute>
            }
          />
          <Route
            path='/parkedcarlog'
            element={
              <ProtectedRoute>
                <ParkedCarLog/>
              </ProtectedRoute>
            }
          />
          
        </Routes>
      </AuthContextProvider>
    </div>
    */    
  )
}

export default App;
