import React from 'react'
import Navbar from '../components/Navbar'
import { DedicatedWarnLevel } from '../components/realtimeData'
import { DateSelector} from '../components/realtimeData/Date'


const ParkedCarLog = () => {
  return (
    <>
      <Navbar></Navbar>
      <DedicatedWarnLevel/>
      <div className='text-center text-4xl text-red-700 py-4 mt-3 font-bold' >Parked Car Log </div><br></br>
      <div className='text-center'><DateSelector/></div>

    </>
  )
}

export default ParkedCarLog 