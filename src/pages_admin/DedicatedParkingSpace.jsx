
import React from 'react'
import Navbar from '../components/Navbar'
import { DedicatedWarnLevel, RealtimeDatainDPSDatabase } from '../components/realtimeData'
import { CrudDedicatedParkSpace } from '../components/crud'


const DedicatedParkingSpace = () => {
  return (
    <>
    <Navbar></Navbar>
    <DedicatedWarnLevel/>
    <div className = 'text-center text-4xl text-red-700 text-bold py-4 mt-3 font-bold' >Dedicated Parking Space</div>
    <CrudDedicatedParkSpace/>
    <br></br><br></br>
    <RealtimeDatainDPSDatabase/>
    <br></br>
    </>
  )
}

export default DedicatedParkingSpace
