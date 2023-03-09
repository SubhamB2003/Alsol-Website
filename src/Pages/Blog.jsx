import React from 'react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from '../Components/Header/Header';
import PostCard from '../Components/PostCards/PostCard';


function Blog() {
    return (
        <div className='font-serif'>
            <Header title={"Our Blog"} caption={"We must let go of the life we have planned, so as to accept the one that is waiting for us."} />

            <div className='mx-4 md:mx-60 py-10'>
                <p className='text-2xl font-bold text-start py-10'>Discussion point</p>
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
                    modules={[Pagination]}
                    spaceBetween={10}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='py-10 md:px-28 px-10 grid md:grid-cols-2 grid-cols-1 gap-5 border-2 rounded-lg'>
                            <div className='flex justify-center'>
                                <img src={require("../assets/others/Rectangle 93.png")} alt='' className='h-[40vh] object-cover hidden md:block' />
                            </div>
                            <div className='flex items-center'>
                                <div className='flex flex-col gap-2'>
                                    <img src={require("../assets/Icon/Vector.png")} alt='' className='w-6 object-cover hidden md:block' />
                                    <p className='text-[1.1rem] text-center'>Show that you actually care about the people you come into contact with every day. Ask them what kind of support they require if someone seems odd.</p>
                                    <hr />
                                    <div className='pt-1'>
                                        <p className='text-xl font-bold'>Manas Das</p>
                                        <p>Director of Alsol Technology Solution Pvt. Ltd.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='py-10 md:px-32 px-10 grid md:grid-cols-2 grid-cols-1 gap-5 border-2 rounded-lg'>
                            <div className='flex justify-center'>
                                <img src={require("../assets/others/Rectangle 93.png")} alt='' className='h-[40vh] object-cover hidden md:block' />
                            </div>
                            <div className='flex items-center'>
                                <div className='flex flex-col gap-2'>
                                    <img src={require("../assets/Icon/Vector.png")} alt='' className='w-6 object-cover hidden md:block' />
                                    <p className='text-[1.1rem] text-center'>Show that you actually care about the people you come into contact with every day. Ask them what kind of support they require if someone seems odd.</p>
                                    <hr />
                                    <div className='pt-1'>
                                        <p className='text-xl font-bold'>Manas Das</p>
                                        <p>Director of Alsol Technology Solution Pvt. Ltd.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='py-10 md:px-32 px-10 grid md:grid-cols-2 grid-cols-1 gap-5 border-2 rounded-lg'>
                            <div className='flex justify-center'>
                                <img src={require("../assets/others/Rectangle 93.png")} alt='' className='h-[40vh] object-cover hidden md:block' />
                            </div>
                            <div className='flex items-center'>
                                <div className='flex flex-col gap-2'>
                                    <img src={require("../assets/Icon/Vector.png")} alt='' className='w-6 object-cover hidden md:block' />
                                    <p className='text-[1.1rem] text-center'>Show that you actually care about the people you come into contact with every day. Ask them what kind of support they require if someone seems odd.</p>
                                    <hr />
                                    <div className='pt-1'>
                                        <p className='text-xl font-bold'>Manas Das</p>
                                        <p>Director of Alsol Technology Solution Pvt. Ltd.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='my-24 md:my-40 relative'>
                <div className='mx-4 px-6 md:px-10 py-4 space-y-2 bg-white border absolute md:w-[24%] md:left-[14%] bottom-[19rem] rounded-md shadow-md shadow-gray-600'>
                    <p className='text-lg font-bold'>Being aware of change before it occurs</p>
                    <p className='text-[#828282] text-sm pb-2'>A futurist is someone who predicts the future. An intentional futurist is someone who creates it. Here’s why leaders must become the latter.</p>
                    <button className='px-4 py-1 bg-[#187EC2] text-sm rounded-lg text-white'>Read more</button>
                </div>
                <img src={require("../assets/others/Rectangle 96.png")} alt="" className='h-[60vh] w-full object-fill' />
            </div>

            <div className='my-20 md:my-40 px-4 md:px-32'>
                <div className='flex justify-between md:px-12'>
                    <p className='text-xl font-bold text-[#187EC2]'>Latest posts</p>
                    <p className='text-xl font-bold text-[#187EC2]'>View More Posts</p>
                </div>
                <div className='flex flex-wrap md:gap-28 gap-10 justify-center pt-10'>
                    <PostCard title={"Distributing IT's influence to your workforce"} caption={"Within their organisations, everyday people are developing things on their own. Discover the benefits of having your staff adopt this strategy."} />
                    <PostCard title={"Distributing IT's influence to your workforce"} caption={"Within their organisations, everyday people are developing things on their own. Discover the benefits of having your staff adopt this strategy."} />
                    <PostCard title={"Distributing IT's influence to your workforce"} caption={"Within their organisations, everyday people are developing things on their own. Discover the benefits of having your staff adopt this strategy."} />
                    <PostCard title={"Distributing IT's influence to your workforce"} caption={"Within their organisations, everyday people are developing things on their own. Discover the benefits of having your staff adopt this strategy."} />
                    <PostCard title={"Distributing IT's influence to your workforce"} caption={"Within their organisations, everyday people are developing things on their own. Discover the benefits of having your staff adopt this strategy."} />
                    <PostCard title={"Distributing IT's influence to your workforce"} caption={"Within their organisations, everyday people are developing things on their own. Discover the benefits of having your staff adopt this strategy."} />
                </div>
            </div>
        </div>
    )
}

export default Blog