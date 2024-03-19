import React from 'react'
import Navbar from '../components/Navbar'
import { RealtimeDatainDatabase, DedicatedWarnLevel,VehicleCount,VacantSlot } from '../components/realtimeData'
import { CurrentDate} from '../components/realtimeData/Date'

const Attendance = () => {
  return (
    <>
    <Navbar/>
    <DedicatedWarnLevel/>
    <div className = 'text-center text-4xl text-red-700 text-bold py-4 mt-3 font-bold'  >Attendance</div><br></br>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px'}}>
      <VehicleCount/>
      <VacantSlot/>
    </div>
    <br></br><br></br>
    <div className='text-center'><CurrentDate/></div>
    </>
  )
}

export default Attendance