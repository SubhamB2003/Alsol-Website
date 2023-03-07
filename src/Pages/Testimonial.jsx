import React from 'react'
import Header from '../Components/Header/Header'

function Testimonial() {
    return (
        <div className='font-serif'>
            <Header title={"Our Testimonial"} caption={"We must let go of the life we have planned, so as to accept the one that is waiting for us."} />

            <div className='grid grid-cols-1 md:grid-cols-2 px-10 md:px-40 gap-6 my-10'>
                <div className='md:py-20 p-4 my-auto space-y-8'>
                    <h1 className='text-3xl'>“ We manage too many people constantly be searching for staff “</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. A eu augue neque nisi. Molestie sem volutpat accumsan ac id egestas mauris amet.</p>
                    <p className='text-red-600 font-medium'>-Scott Belsky</p>
                </div>
                <div className='md:p-20 p-6'>
                    <img src={require("../assets/others/Group 144.png")} alt="" className='' />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 px-10 md:px-40 gap-6 my-10'>
                <div className='md:p-20 p-6'>
                    <img src={require("../assets/others/Group 144.png")} alt="" className='' />
                </div>
                <div className='md:py-20 p-4 my-auto space-y-8'>
                    <h1 className='text-3xl'>“ We manage too many people constantly be searching for staff “</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. A eu augue neque nisi. Molestie sem volutpat accumsan ac id egestas mauris amet.</p>
                    <p className='text-red-600 font-medium'>-Scott Belsky</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 px-10 md:px-40 gap-6 my-10'>
                <div className='md:py-20 p-4 my-auto space-y-8'>
                    <h1 className='text-3xl'>“ We manage too many people constantly be searching for staff “</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. A eu augue neque nisi. Molestie sem volutpat accumsan ac id egestas mauris amet.</p>
                    <p className='text-red-600 font-medium'>-Scott Belsky</p>
                </div>
                <div className='md:p-20 p-6'>
                    <img src={require("../assets/others/Group 144.png")} alt="" className='' />
                </div>
            </div>
        </div>
    )
}

export default Testimonial