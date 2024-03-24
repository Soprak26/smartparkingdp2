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
        <div className='w-screen h-[100px] z-10 bg-zinc-200 drop-shadow-sm'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-4xl font-bold mr-2 mt-2 sm:text-3xl text-red-700'><Link className="text-red-700 no-underline hover:text-blue-500" to="/attendance">Parking Management System</Link></h1>
                    <ul className='hidden hover:text-blue-500 text-2xl font-bold mt-3 xl:flex text-center' >
                        <li className="border-r  border-gray-400 pr-4"><Link className="text-red-700 no-underline hover:text-blue-500" to="/attendance">Home</Link></li>
                        <li className="border-r  border-gray-400 pr-4"><Link className="text-red-700 no-underline hover:text-blue-500" to="/addaccount">Add Record</Link></li>
                        <li className="border-r  border-gray-400 pr-4"><Link className="text-red-700 no-underline hover:text-blue-500" to="/database">Database</Link></li>                     
                        <li className="border-r  border-gray-400 pr-4"><Link className="text-red-700 no-underline hover:text-blue-500" to="/parkedcarlog">Parked Car Log</Link></li>
                    </ul>
                </div>
                <div className='hidden xl:flex'>
                    <button onClick={handleLogout} className='border-none bg-red-700 text-white font-bold mr-4 px-14 py-3 hover:bg-red-800 hover:text-white'>Logout</button>
                </div>
                <div className='xl:hidden'  onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-10 mr-2 ' /> : <XIcon className='w-10 mr-2 ' />}
                </div>
            </div>
            <ul className={!nav ? 'hidden' : ' bg-zinc-200 w-full px-10 font-bold'}>
                <li></li>
                <li></li>
                <li></li>
                <li className='border-b-4 border-zinc-300 w-full text-xl text-bold'><Link className="text-red-700 no-underline hover:text-blue-500" to="/attendance">Home</Link></li>
                <li className='border-b-4 border-zinc-300 w-full text-xl text-bold'><Link className="text-red-700 no-underline hover:text-blue-500" to="/addaccount">Add Record</Link></li>
                <li className='border-b-4 border-zinc-300 w-full text-xl text-bold'><Link className="text-red-700 no-underline hover:text-blue-500" to="/database">Database</Link></li>
                <li className='border-b-4 border-zinc-300 w-full text-xl text-bold'><Link className="text-red-700 no-underline hover:text-blue-500" to="/parkedcarlog">Parked Car Log</Link></li>
                <div className='flex flex-col my-4 pr-4'>
                    <button onClick={handleLogout} className='mt-4 border-none bg-red-700 text-white font-bold px-20 py-3 hover:bg-red-800 hover:text-white'>Logout</button>
                </div>
                <li></li>
            </ul>
        </div>
        
    )
}
export default Navbar



