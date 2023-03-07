import React from 'react'

function Footer() {
    return (
        <div>
            {/* Footer */}
            <div></div>

            {/* Copyright */}
            <div className='flex justify-between bg-[#F2FCFE] md:px-40 p-3'>
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