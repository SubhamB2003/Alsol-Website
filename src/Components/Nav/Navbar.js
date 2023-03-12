import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [mobileView, setMobileView] = useState(false);
    const handleToggle = () => {
        setMobileView((prev) => !prev)
    }

    return (
        <div className="bg-[#4A4A4A] text-white fixed z-50 w-full py-4 font-serif">
            <div className='relative'>
                <div className="flex justify-between align-middle md:mx-52 mx-10">
                    <div>
                        <Link to="/">
                            <img src={require("../../assets/logo/LOGO-light.png")} alt="logo" className='w-16' />
                        </Link>
                    </div>

                    <button onClick={handleToggle} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center md:hidden" aria-controls="navbar-default" aria-expanded="false">
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col align-middle p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-white">
                            <li className='text-lg'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='text-lg'>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className='text-lg'>
                                <Link to="/service">Services</Link>
                            </li>
                            <li className='text-lg'>
                                <Link to="/career">Careers</Link>
                            </li>
                            <li className='text-lg'>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className='text-lg'>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {mobileView &&
                    <div className="absolute z-50 bg-[#4A4A4A] text-white w-full md:hidden">
                        <ul className="w-full flex flex-col p-4 my-2 space-y-4 text-center">
                            <li className='text-lg'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='text-lg'>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className='text-lg'>
                                <Link to="/service">Services</Link>
                            </li>
                            <li className='text-lg'>
                                <Link to="/career">Careers</Link>
                            </li>
                            <li className='text-lg'>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className='text-lg'>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>}
            </div>
        </div>
    )
}

export default Navbar