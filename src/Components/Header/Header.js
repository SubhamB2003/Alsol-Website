import React from 'react';
import "./style.css";


function Header({ title, caption }) {
    return (
        <div className='bg-gradient text-white font-serif'>
            <img src={require("../../assets/carousel/strategy2.webp")} alt='' className='w-full h-[100vh] object-cover' />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" aria-hidden="true">
                <h4 className='text-5xl text-center font-bold'>{title}</h4>
                <p className='text-center font-medium my-4 text-lg md:px-20 px-10 pb-10'>{caption}</p>
            </div>
        </div>
    )
}

export default Header