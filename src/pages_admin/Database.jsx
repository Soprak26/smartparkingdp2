import React from 'react'
import Navbar from '../components/Navbar'
import { RealtimeDatainDatabase } from '../components/realtimeData'

const Database = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className = 'text-center text-4xl text-red-700 text-bold py-4 font-bold' >Database</div>
    <RealtimeDatainDatabase/>
    </>
  )
}

export default Database