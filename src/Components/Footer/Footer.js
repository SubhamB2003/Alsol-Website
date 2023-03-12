import React from 'react';
import "./style.css";

function Footer() {
    return (
        <div className='relative'>
            {/* Footer */}
            <div className='text-white font-serif' id="footer">
                <img src={require("../../assets/others/Rectangle 73.png")} alt='' className='w-full h-[60vh] object-cover' />
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" aria-hidden="true">
                    <div className='flex flex-wrap xl:w-[90vw] w-[100vw]'>
                        <div className='w-1/4'></div>
                        <div className='w-1/4 md:px-10 md:py-4'>
                            <h5 className='text-lg mb-6 font-bold'>Company</h5>
                            <p className='mb-2'>About AlsolTech</p>
                            <p className='mb-2'>Services</p>
                            <p className='mb-2'>Careers</p>
                            <p className='mb-2'>Contact Us</p>
                        </div>
                        <div className='w-1/4 md:px-10 md:py-4'>
                            <h5 className='text-lg mb-6 font-bold'>Resources</h5>
                            <p className='mb-2'>Developers</p>
                            <p className='mb-2'>Investor</p>
                            <p className='mb-2'>Partners</p>
                            <p className='mb-2'>Startups</p>
                            <p className='mb-2'>Events</p>
                        </div>
                        <div className='w-1/4 md:px-10 md:py-4'>
                            <h5 className='text-lg mb-6 font-bold'>Resources</h5>
                            <p>Developers</p>
                            <p>Investor</p>
                            <p>Partners</p>
                            <p>Startups</p>
                            <p>Events</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className='flex justify-between bg-[#C9C9C9] md:px-40 p-3'>
                <p className='text-base font-medium font-serif'>© 2020 AlsolTech</p>
                <div className='flex md:gap-20 gap-6'>
                    <p className='text-base font-medium font-serif'>Disclaimer</p>
                    <p className='text-base font-medium font-serif'>Privacy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer