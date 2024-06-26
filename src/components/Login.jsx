import React, {useState} from 'react'
import loginImg from '../assets/Parked_Cars.jpg'
import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Add this state variable
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {signIn} = UserAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('')
        try{
            await signIn(email,password)
            navigate('/attendance')
        }catch (e){
            setError(e.message)
            console.log(e.message)
        }
    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover " src={loginImg} alt="" />
            </div>

            <div className="bg-gray-800 flex flex-col justify-center">
            <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg" onSubmit={handleSubmit} >
                    <h2 className="text-4xl dark:text-white font-bold text-center">SIGN IN</h2>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Email</label>
                        <input className="rounded-lg w-[300px] bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email" onChange={(e) =>setEmail(e.target.value)}/>
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Password</label>
                        <div className="relative">
                            <input className="rounded-lg w-[300px] bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type={showPassword ? "text" : "password"} onChange={(e) =>setPassword(e.target.value)} />
                            <div className="absolute inset-y-0 right-0  flex items-center text-sm leading-5">
                                {showPassword ? (
                                    <EyeOffIcon className="h-6 text-gray-700" onClick={() => setShowPassword(false)} />
                                ) : (
                                    <EyeIcon className="h-6 text-gray-700" onClick={() => setShowPassword(true)} />
                                )}
                            </div>
                        </div>
                    </div>
                    <button className="w-full my-5 py-2 bg-blue-500/80 shadow-lg  hover:shadow-teal-500/40 text-white font-semibold rounded-lg">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login