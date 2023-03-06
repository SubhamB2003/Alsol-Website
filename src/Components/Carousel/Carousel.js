import React from 'react';
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import './style.css';

function Carousel() {
    return (
        <Swiper
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='bg-gradient text-white'>
                    <img src={require("../../assets/carousel/development.webp")} alt='' className='w-full h-[100vh] object-cover' />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" aria-hidden="true">
                        <h4 className='text-5xl text-center font-bold'>Development</h4>
                        <p className='text-center font-bold my-8 text-lg md:px-40 px-10 pb-10'>We AlsolTech develop web application with effective UI/UX which are mobile first and user
                            friendly</p>
                        <div className='flex justify-center mt-10'>
                            <button className="px-6 py-2 rounded-lg text-black bg-white flex justify-center">Know More</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-gradient text-white'>
                    <img src={require("../../assets/carousel/seo.webp")} alt='' className='w-full h-[100vh] object-cover' />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" aria-hidden="true">
                        <h4 className='text-5xl  text-center font-bold'>Development</h4>
                        <p className='text-center font-bold my-8 text-lg md:px-40 px-10 pb-10'>We AlsolTech develop web application with effective UI/UX which are mobile first and user
                            friendly</p>
                        <div className='flex justify-center mt-10'>
                            <button className="px-6 py-2 rounded-lg text-black bg-white flex justify-center">Know More</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-gradient text-white'>
                    <img src={require("../../assets/carousel/ux-store (2).jpg")} alt='' className='w-full h-[100vh] object-cover' />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" aria-hidden="true">
                        <h4 className='text-5xl text-center font-bold'>Development</h4>
                        <p className='text-center font-bold my-8 text-lg md:px-40 px-10 pb-10'>We AlsolTech develop web application with effective UI/UX which are mobile first and user
                            friendly</p>
                        <div className='flex justify-center mt-10'>
                            <button className="px-6 py-2 rounded-lg text-black bg-white flex justify-center">Know More</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-gradient text-white'>
                    <img src={require("../../assets/carousel/strategy2.webp")} alt='' className='w-full h-[100vh] object-cover' />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" aria-hidden="true">
                        <h4 className='text-5xl text-center font-bold'>Development</h4>
                        <p className='text-center font-bold my-8 text-lg md:px-40 px-10 pb-10'>We AlsolTech develop web application with effective UI/UX which are mobile first and user
                            friendly</p>
                        <div className='flex justify-center mt-10'>
                            <button className="px-6 py-2 rounded-lg text-black bg-white flex justify-center">Know More</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel