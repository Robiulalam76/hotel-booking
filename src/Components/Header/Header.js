import React, { useContext, useState } from 'react';
import { AuthContext } from '../../UserForm/UserContext';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    const { user } = useContext(AuthContext)
    return (
        <nav className='bg-indigo-200 py-4 px-4 md:px-8 relative'>
            <div onClick={() => setOpen(!open)} className='text-blue-600 w-10 absolute right-4 md:right-14 md:hidden'>
                {
                    open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                }
            </div>
            <div className='flex md:items-center md:justify-end flex-col md:flex-row items-start text-black font-bold'>
                <NavLink to='/home' className='flex-grow flex items-center font-bold text-2xl text-blue-600'> <img src="logo.png" className='w-10' alt="" />Hotel Booking</NavLink>
                <div className={`flex md:items-center md:justify-end flex-col md:flex-row items-start text-black font-bold ml-10 mt-3 md:m-0 md:block duration-500 ease-in ${open ? 'block' : 'hidden'}`}>
                    <NavLink to='/home'
                        className={({ isActive }) => isActive ?
                            'underline underline-offset-4  decoration-2 text-blue-600 md:mr-6' : 'md:mr-6 hover:text-blue-700'}>Home</NavLink>
                    <NavLink to='/service'
                        className={({ isActive }) => isActive ?
                            'mt-3 underline underline-offset-4 decoration-2 text-blue-600 md:mr-6' : 'md:mr-6 mt-3 hover:text-blue-700'}>Service</NavLink>
                    <NavLink to='/rooms'
                        className={({ isActive }) => isActive ?
                            'mt-3 underline underline-offset-4 decoration-2 text-blue-600 md:mr-6' : 'md:mr-6 mt-3 hover:text-blue-700'}>Rooms</NavLink>
                    <NavLink to='/blog'
                        className={({ isActive }) => isActive ?
                            'mt-3 underline underline-offset-4 decoration-2 text-blue-600 md:mr-6' : 'md:mr-6 mt-3 hover:text-blue-700'}>Blog</NavLink>
                    <NavLink to='/about'
                        className={({ isActive }) => isActive ?
                            'mt-3 underline underline-offset-4 decoration-2 text-blue-600 md:mr-6' : 'md:mr-6 mt-3 hover:text-blue-700'}>About</NavLink>
                    <NavLink to='/profile'
                        className={({ isActive }) => isActive ?
                            'mt-3 underline underline-offset-4 decoration-2 text-blue-600 md:mr-6' : 'md:mr-6 mt-3 hover:text-blue-700'}>
                        {
                            user?.uid && <img className='h-[30px] inline w-[30px] rounded-full' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                        }
                    </NavLink>
                </div>
            </div>
        </nav>


        // <div>
        //     <h1>
        //         
        //     </h1>
        // </div>
    );
};

export default Header;