import React, { useEffect } from 'react'
import MultiSelectDropdown from '../utils/MultiSelectDropdown';
import { useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
                // ...
            } else {
                // User is signed out
                // ...
                dispatch(removeUser());
                navigate("/");
            }
        });
    }, []);

    return (
        <div className='absolute w-screen px-16 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img
                className='w-44'
                alt='logo'
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
            />
            {user && (<div className='flex p-2'>
                <img
                    className='w-8 h-8'
                    alt='user-icon'
                    src={user?.photoURL}
                />
                <form className='mx-2 px-2'>
                    <MultiSelectDropdown />
                </form>
            </div>)}
        </div>
    )
}

export default Header;