import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateFormData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        //Validate the form data
        const message = validateFormData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (!isSignInForm) {
            const message = validateFormData(email.current.value, password.current.value, name.current.value);
            setErrorMessage(message);
        }
        if (message) return;

        //sign-in sign-up logic
        if (!isSignInForm) {
            //sign-up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRUgleswgt7gwJsXbTfUdpgyuHuLqPuwKMpsmqqC9fcFJ5xQicSiPpEHyul5okHnMnFFOBMFK1iApRLYZUKe06X421iVa0ce6mnA.png?r=1d8"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message)
                    });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    // ..
                });
        }
        else {
            //sign-in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }

    }

    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute brightness-50'>
                <img
                    alt='background_image'
                    src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg'
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='w-96 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='text-white text-3xl font-semibold py-2 mb-2'>
                    {isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input
                    ref={name}
                    className='my-3 p-3 w-full bg-gray-800 rounded-sm bg-opacity-60 border border-white'
                    type='text'
                    placeholder='Full Name' />
                )}
                <input
                    ref={email}
                    className='my-3 p-3 w-full bg-gray-800 rounded-sm bg-opacity-60 border border-white'
                    type='text'
                    placeholder='Email or mobile number' />
                <input
                    ref={password}
                    className='my-3 p-3 w-full bg-gray-800 rounded-sm bg-opacity-60 border border-white'
                    type='password'
                    placeholder='Password' />
                <p className='text-red-600 text-sm py-2'>{errorMessage}</p>
                <button className='p-2 my-1 rounded-sm bg-red-700 w-full' onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                {isSignInForm && <p className='text-center text-sm m-1 p-1 cursor-pointer'>Forgot password?</p>}
                <div className='flex'>
                    {isSignInForm && (<input
                        className='accent-white m-1 p-1'
                        type='checkbox'
                        value="remember"
                    />
                    )}
                    {isSignInForm && <span className='text-sm m-1'> Remember me </span>}
                </div>
                <p className='py-4 text-sm cursor-pointer'
                    onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign up now." : "Already a user? Sign in."}
                </p>
            </form>
        </div>
    )
};

export default Login;