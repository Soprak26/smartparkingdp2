import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import { UserAuth } from '../context/AuthContext';



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const navigate = useNavigate()
    const { user, logout } = UserAuth();


    const handleLogout = async () => {
        try {
            await logout(); 
            navigate('https://soprak26.github.io/smartparkingdp2/');
            console.log('You are logged out')
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div className='w-screen h-[150px] z-10 bg-zinc-200 drop-shadow-sm'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-4xl font-bold mr-2 sm:text-4xl text-red-700'>Parking Management System</h1>
                    <ul className='hidden text-lg font-bold xl:flex text-center' >
                        <li><Link to="/addaccount">Add Record</Link></li>
                        <li><Link to="/database">Database</Link></li>
                        <li><Link to="/attendance">Attendance</Link></li>
                        <li><Link to="/parkedcarlog">Parked Car Log</Link></li>
                    </ul>
                </div>
                <div className='hidden xl:flex'>
                    <button onClick={handleLogout} className='border-none bg-red-700 text-white font-bold mr-4 px-14 py-3 hover:bg-red-800 hover:text-white'>Logout</button>

                </div>
                <div className='xl:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-10 mr-2 ' /> : <XIcon className='w-10 mr-2 ' />}
                </div>
            </div>

            <ul className={!nav ? 'hidden' : ' bg-zinc-200 w-full px-10 font-bold '}>
                <li className='border-b-4 border-zinc-300 w-full text-lg text-bold'><Link to="/addaccount">Add Record</Link></li>
                <li className='border-b-4 border-zinc-300 w-full text-lg text-bold'><Link to="/database">Database</Link></li>
                <li className='border-b-4 border-zinc-300 w-full text-lg text-bold'><Link to="/attendance">Attendance</Link></li>
                <li className='border-b-4 border-zinc-300 w-full text-lg text-bold'><Link to="/parkedcarlog">Parked Car Log</Link></li>
                <div className='flex flex-col my-4 pr-4'>
                    <button onClick={handleLogout} className=' border-none bg-red-700 text-white font-bold px-20 py-3 hover:bg-red-800 hover:text-white'>Logout</button>
                </div>
            </ul>
        </div>


    )
}
export default Navbar



