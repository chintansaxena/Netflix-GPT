import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute brightness-50'>
                <img
                    alt='backgroung_image'
                    src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg'
                />
            </div>
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='text-white text-3xl font-semibold py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input
                    className='my-3 p-3 w-full bg-gray-800 rounded-sm bg-opacity-60 border border-white'
                    type='text'
                    placeholder='Full Name' />
                }
                <input
                    className='my-3 p-3 w-full bg-gray-900 rounded-sm bg-opacity-60 border border-white'
                    type='text'
                    placeholder='Email or mobile number' />
                <input
                    className='my-3 p-3 w-full bg-gray-800 rounded-sm bg-opacity-60 border border-white'
                    type='password'
                    placeholder='Password' />
                <button className='p-2 my-1 rounded-sm bg-red-700 w-full font-'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 text-sm cursor-pointer'
                    onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign up now." : "Already a user? Sign in."}
                </p>
            </form>
        </div>
    )
}

export default Login