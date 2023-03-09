import React from 'react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from '../Components/Header/Header';


function WebdevService() {
    return (
        <div className='font-serif'>
            <Header title={"Our Service"} caption={"We must let go of the life we have planned, so as to accept the one that is waiting for us."} />

            <div className='grid grid-cols-1 md:grid-cols-2 px-10 md:px-40 gap-6 md:gap-10 my-10'>
                <div className='md:px-10 p-4 my-auto space-y-4'>
                    <h1 className='text-2xl font-bold'>Website design and development</h1>
                    <p>We provide comprehensive website design and development services to our clients. Our experienced team of designers and developers work closely together to create a website that meets your business needs and goals. We create custom designs that are both aesthetically pleasing and functional, while also optimizing for search engines and other web technologies. We also provide ongoing support and maintenance to ensure your website remains up-to-date and secure. Our services range from creating a website from scratch to revamping an existing website. We strive to create a website that maximizes the user experience, boosts your online presence, and helps you reach your audience.</p>
                </div>
                <div className='md:p-20 p-6'>
                    <img src={require("../assets/others/development.png")} alt="" className='' />
                </div>
            </div>

            <div className='px-10 md:px-40 py-14 space-y-8'>
                <p className='text-2xl text-[#187EC2] font-bold'>Our Expertise</p>
                <p>Our experts are experienced in website design and development with a passion for crafting beautiful and engaging online experiences. Our skills include creating custom HTML/CSS designs, developing WordPress themes, building and maintaining eCommerce stores, and creating innovative web applications. We specialize in creating responsive, cross-browser-compatible websites that are optimized for search engine visibility and we also have experience in SEO, analytics, and digital marketing.</p>
            </div>

            <div className='bg-[#e0ffd2] py-20 px-6 md:px-40 rounded-tl-full rounded-tr-full h-[90vh]'>
                <div className='text-center pb-16 mt-16'>
                    <h1 className='text-xl font-semibold'>Website Design and Development</h1>
                    <div className='flex justify-center items-end space-x-4'>
                        <div className='h-2 w-2 rounded-full bg-[#00BAF0] mb-2' /><div className='h-2 w-2 rounded-full bg-[#00BAF0] mb-2' />
                        <div><p className='text-xl font-semibold pt-2'>Services</p></div>
                        <div className='h-2 w-2 rounded-full bg-[#00BAF0] mb-2' /><div className='h-2 w-2 rounded-full bg-[#00BAF0] mb-2' />
                    </div>
                </div>

                <Swiper
                    breakpoints={{
                        768: {
                            width: 768,
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1200: {
                            width: 1200,
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='border-2 rounded-xl bg-white'>
                        <div className='p-4'>
                            <p className='px-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <div className='flex gap-5 mt-1'>
                                <img src={require("../assets/Icon/Ellipse 1.png")} alt="" className='w-14' />
                                <div className='my-auto'>
                                    <p className='text-[#F46C0F] text-sm'>Lorem ipsum dolor </p>
                                    <p className='text-[#838383] text-sm'>Lorem ipsum </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='border-2 rounded-xl bg-white'>
                        <div className='p-4'>
                            <p className='px-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <div className='flex gap-5 mt-1'>
                                <img src={require("../assets/Icon/Ellipse 1.png")} alt="" className='w-14' />
                                <div className='my-auto'>
                                    <p className='text-[#F46C0F] text-sm'>Lorem ipsum dolor </p>
                                    <p className='text-[#838383] text-sm'>Lorem ipsum </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='border-2 rounded-xl bg-white'>
                        <div className='p-4'>
                            <p className='px-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <div className='flex gap-5 mt-1'>
                                <img src={require("../assets/Icon/Ellipse 1.png")} alt="" className='w-14' />
                                <div className='my-auto'>
                                    <p className='text-[#F46C0F] text-sm'>Lorem ipsum dolor </p>
                                    <p className='text-[#838383] text-sm'>Lorem ipsum </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='border-2 rounded-xl bg-white'>
                        <div className='p-4'>
                            <p className='px-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <div className='flex gap-5 mt-1'>
                                <img src={require("../assets/Icon/Ellipse 1.png")} alt="" className='w-14' />
                                <div className='my-auto'>
                                    <p className='text-[#F46C0F] text-sm'>Lorem ipsum dolor </p>
                                    <p className='text-[#838383] text-sm'>Lorem ipsum </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='border-2 rounded-xl bg-white'>
                        <div className='p-4'>
                            <p className='px-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <div className='flex gap-5 mt-1'>
                                <img src={require("../assets/Icon/Ellipse 1.png")} alt="" className='w-14' />
                                <div className='my-auto'>
                                    <p className='text-[#F46C0F] text-sm'>Lorem ipsum dolor </p>
                                    <p className='text-[#838383] text-sm'>Lorem ipsum </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='border-2 rounded-xl bg-white'>
                        <div className='p-4'>
                            <p className='px-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <div className='flex gap-5 mt-1'>
                                <img src={require("../assets/Icon/Ellipse 1.png")} alt="" className='w-14' />
                                <div className='my-auto'>
                                    <p className='text-[#F46C0F] text-sm'>Lorem ipsum dolor </p>
                                    <p className='text-[#838383] text-sm'>Lorem ipsum </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className='flex justify-center items-center py-4 md:mt-14'>
                    <h1 className='text-[#187EC2] text-3xl'>Contact Us</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="currentColor" className="w-10 h-10 fill-[#187EC2] ml-2">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default WebdevService;