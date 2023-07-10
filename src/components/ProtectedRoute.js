import React from 'react'
import {Navigate} from 'react-router-dom'
import{UserAuth} from '../context/AuthContext'

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()

    if (!user){
        return <Navigate to='https://soprak26.github.io/smartparkingdp2/'/>
    }
    return children;

}

export default ProtectedRoute;