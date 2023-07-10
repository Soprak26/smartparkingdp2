
import React from 'react'
import Navbar from '../components/Navbar'
import { Crud } from '../components/crud'

const AddAccount = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className = 'text-center text-4xl text-red-700 text-bold py-4 font-bold' >Add Record</div>
    <Crud></Crud>
    </>
  )
}

export default AddAccount