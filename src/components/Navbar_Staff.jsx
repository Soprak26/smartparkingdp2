/*
import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";
import {useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';


const Navbar_Staff = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)




    return (

        <div className='w-screen h-[150px] z-10 bg-zinc-200 drop-shadow-sm'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-4xl font-bold mr-2 sm:text-4xl text-red-700'>Polytechnic University of the Philippines</h1>
                    <ul className='hidden text-lg font-bold xl:flex text-center px-40 space-x-10' >
                        <li><Link to="/camerafootagestaff">Camera Footage</Link></li>
                        <li><Link to="/accountpage">Account Page</Link></li>
                        <li><Link to="/requestplatenumber">Request Plate Number</Link></li>
                    </ul>
                </div>
                <div className='hidden xl:flex'>
                    <button className='border-none bg-red-700 text-white font-bold mr-4 px-14 py-3 hover:bg-red-800 hover:text-white '>Logout</button>

                </div>
                <div className='xl:hidden ' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-10 mr-2' /> : <XIcon className='w-10 mr-2' />}
                </div>
            </div>

            <ul className={!nav ? 'hidden' : ' bg-zinc-200 w-full px-10 font-bold'}>
                <li className='border-b-4 border-zinc-300 w-full text-lg text-bold'><Link to="/camerafootagestaff">Camera Footage</Link></li>
                <li className='border-b-4 border-zinc-300 w-full text-lg text-bold'><Link to="/accountpage">Account Page</Link></li>
                <li className='border-b-4 border-zinc-300 w-full text-lg text-bold'><Link to="/requestplatenumber">Request Plate Number</Link></li>
                <div className='flex flex-col my-4 pr-4'>
                    <button className=' border-none bg-red-700 text-white font-bold px-20 py-3 hover:bg-red-800 hover:text-white'>Logout</button>
                </div>
            </ul>
        </div>


    )
}

export default Navbar_Staff
*/

