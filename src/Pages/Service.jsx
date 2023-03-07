import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header/Header'

function Service() {
    return (
        <div className='font-serif'>
            <Header title={"Our Service"} caption={"We must let go of the life we have planned, so as to accept the one that is waiting for us."} />

            <div className='grid grid-cols-1 md:grid-cols-2 px-10 md:px-40 gap-6 md:gap-10 my-10'>
                <div className='md:px-20 p-4 my-auto space-y-4'>
                    <p className='text-[#187EC2] text-xl font-bold md:mb-16 mb-10'>OUR Services</p>
                    <h1 className='text-2xl font-bold'>Website design and <br />development</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas nibh ut arcu volutpat habitasse. Venenatis nascetur malesuada integer dictum diam da.</p>
                    <div>
                        <Link to="/service/webdev">
                            <button className='px-6 py-2 rounded-xl border border-black text-sm'>Learn more</button>
                        </Link>
                    </div>
                </div>
                <div className='md:p-20 p-6'>
                    <img src={require("../assets/others/development.png")} alt="" className='' />
                </div>
            </div>

            <div className='my-20 py-12 md:px-40 px-10 space-y-10'>
                <div className='relative hidden md:block'>
                    <img src={require("../assets/Icon/dots.png")} alt="" className='rotate-90 absolute top-0 left-0 w-24' />
                </div>
                <div className='text-center space-y-4'>
                    <h1 className='text-2xl font-bold'>Content Writing</h1>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas nibh ut arcu volutpat habitasse. <br />Venenatis nascetur malesuada integer dictum diam da.</p>
                    <button className='px-6 py-2 rounded-xl border border-black text-sm'>Learn more</button>
                </div>
                <div className=''>
                    <img src={require("../assets/others/pana.png")} alt="" className='md:w-[48%] mx-auto' />
                    <div className='relative hidden md:block'>
                        <img src={require("../assets/Icon/dots.png")} alt="" className='rotate-90 absolute bottom-0 right-0 w-24' />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 px-10 md:px-40 gap-6 md:gap-10 my-10'>
                <div className='md:p-20 p-6'>
                    <img src={require("../assets/others/development.png")} alt="" className='' />
                </div>
                <div className='md:px-20 p-4 my-auto space-y-4'>
                    <h1 className='text-2xl font-bold'>Digital Marketing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas nibh ut arcu volutpat habitasse. Venenatis nascetur malesuada integer dictum diam da.</p>
                    <button className='px-6 py-2 rounded-xl border border-black text-sm'>Learn more</button>
                </div>
            </div>

            <div className='my-20 py-12 md:px-40 px-10 space-y-10'>
                <div className='relative hidden md:block'>
                    <img src={require("../assets/Icon/dots.png")} alt="" className='rotate-90 absolute top-0 left-0 w-24' />
                </div>
                <div className='text-center space-y-4'>
                    <h1 className='text-2xl font-bold'>Cloud Computing</h1>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas nibh ut arcu volutpat habitasse. <br />Venenatis nascetur malesuada integer dictum diam da.</p>
                    <button className='px-6 py-2 rounded-xl border border-black text-sm'>Learn more</button>
                </div>
                <div className=''>
                    <img src={require("../assets/others/pana.png")} alt="" className='md:w-[48%] mx-auto' />
                    <div className='relative hidden md:block'>
                        <img src={require("../assets/Icon/dots.png")} alt="" className='rotate-90 absolute bottom-0 right-0 w-24' />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 px-10 md:px-40 gap-6 md:gap-10 my-10'>
                <div className='md:px-20 p-4 my-auto space-y-4'>
                    <h1 className='text-2xl font-bold'>Data Analysis</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas nibh ut arcu volutpat habitasse. Venenatis nascetur malesuada integer dictum diam da.</p>
                    <button className='px-6 py-2 rounded-xl border border-black text-sm'>Learn more</button>
                </div>
                <div className='md:p-20 p-6'>
                    <img src={require("../assets/others/development.png")} alt="" className='' />
                </div>
            </div>

            <div className='my-20 py-12 md:px-40 px-10 space-y-10'>
                <div className='relative hidden md:block'>
                    <img src={require("../assets/Icon/dots.png")} alt="" className='rotate-90 absolute top-0 left-0 w-24' />
                </div>
                <div className='text-center space-y-4'>
                    <h1 className='text-2xl font-bold'>Software automation</h1>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas nibh ut arcu volutpat habitasse. <br />Venenatis nascetur malesuada integer dictum diam da.</p>
                    <button className='px-6 py-2 rounded-xl border border-black text-sm'>Learn more</button>
                </div>
                <div className=''>
                    <img src={require("../assets/others/pana.png")} alt="" className='md:w-[48%] mx-auto' />
                    <div className='relative hidden md:block'>
                        <img src={require("../assets/Icon/dots.png")} alt="" className='rotate-90 absolute bottom-0 right-0 w-24' />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 px-10 md:px-40 gap-6 md:gap-10 my-10'>
                <div className='md:p-20 p-6'>
                    <img src={require("../assets/others/development.png")} alt="" className='' />
                </div>
                <div className='md:px-20 p-4 my-auto space-y-4'>
                    <h1 className='text-2xl font-bold'>Android Application</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas nibh ut arcu volutpat habitasse. Venenatis nascetur malesuada integer dictum diam da.</p>
                    <button className='px-6 py-2 rounded-xl border border-black text-sm'>Learn more</button>
                </div>
            </div>

            <div className='flex justify-center items-center py-4'>
                <h1 className='text-[#187EC2] text-3xl'>Contact Us</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" className="w-10 h-10 fill-[#187EC2] ml-2">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    )
}

export default Service