import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/Login";
import Navbar from "./components/Navbar";

import AddAccount from './pages_admin/AddAccount';
import Attendance from './pages_admin/Attendance';
import Database from './pages_admin/Database';
import ParkedCarLog from './pages_admin/ParkedCarLog';


import { AuthContextProvider } from "./context/AuthContext";
import { Route, Routes, HashRouter, BrowserRouter } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';





function App() {
  return (
    <div>
        <AuthContextProvider>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route
              path='/smartparkingdp2/navbar'
              element={
                <ProtectedRoute>
                  <Navbar />
                </ProtectedRoute>
              }

            />
            <Route
              path='/smartparkingdp2/addaccount'
              element={
                <ProtectedRoute>
                  <AddAccount />
                </ProtectedRoute>
              }
            />
            <Route
              path='/smartparkingdp2/attendance'
              element={
                <ProtectedRoute>
                  <Attendance />
                </ProtectedRoute>
              }
            />
            <Route
              path='/smartparkingdp2/database'
              element={
                <ProtectedRoute>
                  <Database />
                </ProtectedRoute>
              }
            />
            <Route
              path='/smartparkingdp2/parkedcarlog'
              element={
                <ProtectedRoute>
                  <ParkedCarLog />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
    </div>
  )
}

export default App;
