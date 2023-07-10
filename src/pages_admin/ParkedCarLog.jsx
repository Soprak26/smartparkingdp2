import React from 'react'
import Navbar from '../components/Navbar'
import { RealtimeDatainParkedCarLog } from '../components/realtimeData'

const ParkedCarLog = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className = 'text-center text-4xl text-red-700 text-bold py-4 font-bold' >Parked Car Log</div>
    <div><RealtimeDatainParkedCarLog/></div>
    </>
  )
}

export default ParkedCarLog