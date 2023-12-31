/*
import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';




const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const {createUser} = UserAuth()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await createUser(email,password)
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className="hidden sm:block">
            <img className="w-full h-full object-cover "  alt="" />
        </div>

        <div className="bg-gray-800 flex flex-col justify-center">
            <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg" onSubmit={handleSubmit}>
                <h2 className="text-4xl dark:text-white font-bold text-center">SIGN UP</h2>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Email</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email" onChange={(e) =>setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Password</label>
                    <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password" onChange={(e) =>setPassword(e.target.value)}/>
                </div>
                <div className="flex justify-between text-gray-400">
                    <p>Forgot Password</p>
                </div>
                <button className="w-full my-5 py-2 bg-blue-500/80 shadow-lg  hover:shadow-teal-500/40 text-white font-semibold rounded-lg" >Sign Up</button>
            </form>
        </div>
    </div>
    )
}

export default Signup
*/