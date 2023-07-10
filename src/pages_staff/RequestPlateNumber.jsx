import React from 'react'
import Navbar_Staff from '../components/Navbar_Staff'
import { RealtimeDatainDatabase } from '../components/realtimeData'
import 'bootstrap/dist/css/bootstrap.min.css';

const RequestPlateNumber = () => {
  return (
    <>
    <Navbar_Staff></Navbar_Staff>
    <div><RealtimeDatainDatabase/></div>
    </>
  )
}

export default RequestPlateNumber