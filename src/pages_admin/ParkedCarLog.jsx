import React from 'react'
import Navbar from '../components/Navbar'
import { RealtimeDatainParkedCarLog, VacantCounter1Cars, VacantCounter1Vacant, VacantCounter2Cars, VacantCounter2Vacant, } from '../components/realtimeData'
import { DateSelector} from '../components/realtimeData/Date'


const ParkedCarLog = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='text-center text-4xl text-red-700 py-4 font-bold' >Parked Car Log </div><br></br>
      <div className='text-center'><DateSelector/></div>

    </>
  )
}

export default ParkedCarLog 