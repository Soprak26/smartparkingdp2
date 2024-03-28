import React from 'react'
import Navbar from '../components/Navbar'
import { RealtimeDatainDatabase, DedicatedWarnLevel,VehicleCount,VacantSlot } from '../components/realtimeData'
import { CurrentDate,JustDate} from '../components/realtimeData/Date'

const Attendance = () => {
  return (
    <>
    <Navbar/>
    <DedicatedWarnLevel/>
    <div className = 'text-center text-4xl text-red-700 text-bold py-4 mt-3 font-bold'  >Parking Slots</div><br></br>
      <div className='flex-container'>
        <VehicleCount/>
        <JustDate/>
        <VacantSlot/>
      </div>
    <div className='text-center'><CurrentDate/></div>

    <br></br><br></br>
    
    </>
  )
}

export default Attendance