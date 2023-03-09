import React from 'react';
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from '../Components/Carousel/Carousel';


function Home() {
    return (
        <div className='font-serif'>
            <Carousel />
            <div className='mx-10 md:mx-32 my-10 md:my-28'>
                <div className='flex justify-evenly'>
                    <img src={require("../assets/Icon/dots.png")} alt="dot-icon" className='w-24 hidden md:block' />
                    <div>
                        <h3 className='font-bold text-3xl text-center text-[#828282]'>Why Choose Us</h3>
                        <h1 className='font-bold text-4xl text-center'>Jumpstart your business</h1>
                    </div>
                    <img src={require("../assets/Icon/dots.png")} alt="dot-icon" className='w-24 hidden md:block' />
                </div>

                <div className='pt-10 md:pt-40 flex flex-col md:flex-row space-y-5 md:space-y-0 relative'>
                    <div className="space-y-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="w-20 h-20 fill-white bg-[#00BAF0] p-4 rounded-lg mx-auto">
                            <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
                            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                        </svg>
                        <div className="text-center space-y-3">
                            <h3 className='text-3xl font-bold'>Innovative</h3>
                            <p className="text-[#828282]">Developing original responses to complicated challenges</p>
                        </div>
                    </div>
                    <div className='hidden md:block absolute left-[17.5rem] top-[53%]'>
                        <img src={require("../assets/Icon/dots-line.png")} alt="" className='w-[70%]' />
                    </div>
                    <div className="space-y-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="w-20 h-20 fill-white bg-[#00BAF0] p-4 rounded-lg mx-auto">
                            <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                            <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                        </svg>
                        <div className="text-center space-y-3">
                            <h3 className='text-3xl font-bold'>Solution</h3>
                            <p className="text-[#828282]">Developing innovative, tailored web solutions.</p>
                        </div>
                    </div>
                    <div className='hidden md:block absolute left-[48%] top-[53%]'>
                        <img src={require("../assets/Icon/dots-line.png")} alt="" className='w-[70%]' />
                    </div>
                    <div className="space-y-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="w-20 h-20 fill-white bg-[#00BAF0] p-4 rounded-lg mx-auto">
                            <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                            <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                            <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                        </svg>
                        <div className="text-center space-y-3">
                            <h3 className='text-3xl font-bold'>Effective</h3>
                            <p className="text-[#828282]">Producing quality products in a timely manner.</p>
                        </div>
                    </div>
                    <div className='hidden md:block absolute right-[8.5rem] top-[53%]'>
                        <img src={require("../assets/Icon/dots-line.png")} alt="" className='w-[70%]' />
                    </div>
                    <div className="space-y-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="w-20 h-20 fill-white bg-[#00BAF0] p-4 rounded-lg mx-auto">
                            <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                        </svg>
                        <div className="text-center space-y-3">
                            <h3 className='text-3xl font-bold'>Efficient</h3>
                            <p className="text-[#828282]">Deliver projects on or before Deadlines.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#F2FCFE] md:px-20 md:py-20 py-10'>
                <h1 className='text-4xl font-bold text-center mb-2'>We’r <span className='text-[#187EC2]'>Here</span> to find your <span className='text-[#187EC2]'>Service</span></h1>
                <p className='text-[#828282] text-lg text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='py-10 md:px-32 px-10 grid md:grid-cols-2 grid-cols-1 gap-5'>
                            <div className='flex justify-center'>
                                <img src={require("../assets/others/development.png")} alt='' className='w-[22rem] object-cover hidden md:block' />
                            </div>
                            <div className='flex items-center'>
                                <div className='flex flex-col'>
                                    <h1 className='text-[1.6rem] font-semibold mb-2'>Website design and development</h1>
                                    <p className='text-[1.1rem]'>We provide comprehensive website design and development services to our clients. Our experienced team of designers and developers work closely together to create a website that meets your business needs and goals. We create custom designs that are both aesthetically pleasing and functional, while also optimizing for search engines and other web technologies.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='py-10 md:px-32 px-10 grid md:grid-cols-2 grid-cols-1 gap-5'>
                            <div className='flex justify-center'>
                                <img src={require("../assets/others/development.png")} alt='' className='w-[22rem] object-cover hidden md:block' />
                            </div>
                            <div className='flex items-center'>
                                <div className='flex flex-col'>
                                    <h1 className='text-[1.6rem] font-semibold mb-2'>Website design and development</h1>
                                    <p className='text-[1.1rem]'>We provide comprehensive website design and development services to our clients. Our experienced team of designers and developers work closely together to create a website that meets your business needs and goals. We create custom designs that are both aesthetically pleasing and functional, while also optimizing for search engines and other web technologies.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='py-10 md:px-32 px-10 grid md:grid-cols-2 grid-cols-1 gap-5'>
                            <div className='flex justify-center'>
                                <img src={require("../assets/others/development.png")} alt='' className='w-[22rem] object-cover hidden md:block' />
                            </div>
                            <div className='flex items-center'>
                                <div className='flex flex-col'>
                                    <h1 className='text-[1.6rem] font-semibold mb-2'>Website design and development</h1>
                                    <p className='text-[1.1rem]'>We provide comprehensive website design and development services to our clients. Our experienced team of designers and developers work closely together to create a website that meets your business needs and goals. We create custom designs that are both aesthetically pleasing and functional, while also optimizing for search engines and other web technologies.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:px-28 px-10 py-20'>
                <div className='space-y-6'>
                    <div>
                        <img src={require("../assets/Icon/bar-chart-2.png")} alt='' className='w-20' />
                    </div>
                    <div className='space-y-6'>
                        <h1 className='text-4xl font-bold'>Your <span className='text-[#187EC2]'>vision</span>. Our <br />
                            <span className='text-[#187EC2]'>innovation</span>: Event <span className='text-[#187EC2]'>solution</span>.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Amet platea sed volutpat mauris suspendisse. In mattis tellus nunc egestas vulputate mi sollicitudin elit. Risus bibendum purus duis ullamcorper consectetur volutpat ac leo. Pretium tincidunt elit sit odio nullam quis. Egestas et arcu ut quam varius.</p>
                        <button className='px-4 py-2 rounded-lg' style={{ border: "1px solid black" }}>Learn more</button>
                    </div>
                </div>
                <div className='md:p-16 relative'>
                    <img src={require("../assets/others/vision.png")} alt='' />
                    <div className='px-10 py-6 absolute bottom-2 left-0 bg-white rounded-xl border space-y-2 hidden md:block shadow-lg shadow-gray-400'>
                        <p className='text-[1.1rem]' style={{ fontWeight: "500" }}>Ideas are not at issue. It involves putting ideas into action.</p>
                        <p className='text-center text-red-500'>-Manas Das</p>
                    </div>
                    <img src={require("../assets/Icon/bar-chart-2.png")} alt='' className='w-20 rotate-180 absolute right-2 mt-10' />
                </div>
            </div>

            <div className='bg-[#F2FCFE] py-20 px-6 md:px-40'>
                <div className='text-center pb-16'>
                    <h1 className='text-4xl font-bold'><span className='text-[#187EC2]'>Our</span> Testimonial</h1>
                    <p className='font-semibold pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <Swiper
                    breakpoints={{
                        100: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        768: {
                            width: 768,
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1200: {
                            width: 1200,
                            slidesPerView: 3,
                            spaceBetween: 40
                        }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper service"
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
            </div>

            <div className='text-center space-y-2 py-20 px-4'>
                <p className='font-bold text-4xl'><span className='text-[#187EC2]'>Our</span> Partners</p>
                <p className='font-semibold'>We  values’ on strong relationships along with our partners.</p>

                <div className='flex flex-wrap justify-evenly pt-20'>
                    <div>
                        <img src={require("../assets/Icon/cropped-Broom-Boom-Logo-Design-Final-on-White 1.png")} alt="" className='h-24 w-24 object-contain' />
                    </div>
                    <div>
                        <img src={require("../assets/Icon/logo 1.png")} alt="" className='h-24 w-40 object-contain' />
                    </div>
                    <div>
                        <img src={require("../assets/Icon/logo 2.png")} alt="" className='h-24 w-40 object-contain' />
                    </div>
                    <div>
                        <img src={require("../assets/Icon/logo-4 (1) 1.png")} alt="" className='h-24 w-40 object-contain' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home