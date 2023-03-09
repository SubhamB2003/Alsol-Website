import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header/Header'

function About() {
  return (
    <div className='font-serif'>
      <Header title={"Our Team"} caption={"We must let go of the life we have planned, so as to accept the one that is waiting for us."} />

      <div className='py-20'>
        <p className='font-bold text-4xl text-center pb-10'>About <span className='text-[#187EC2]'>Us</span></p>

        <div className='flex flex-col md:flex-row gap-8 md:gap-4 px-8'>
          <div className='md:w-1/3 md:px-8'>
            <p>We are an IT and business consulting firm that provides innovative, customized solutions
              to help our clients achieve their goals. Our team of experienced professionals offers comprehensive
              services ranging from strategic planning to technical
              implementation, helping our clients maximize their potential for success.</p>
          </div>

          <div className='md:w-1/3 md:px-8'>
            <div className='flex gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-6 md:h-6 fill-[#187EC2]">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <p>Providing IT and business consulting services to a wide range of clients</p>
            </div>
            <div className='flex gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-6 md:h-6 fill-[#187EC2]">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <p>Experienced team of professionals with expertise in various industries</p>
            </div>
            <div className='flex gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-6 md:h-6 fill-[#187EC2]">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <p>Specializing in helping clients create and implement business strategies</p>
            </div>
            <div className='flex gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 md:w-11 md:h-11 fill-[#187EC2]">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <p>Offering comprehensive services including business process reengineering, system integration, project management, and more</p>
            </div>
          </div>

          <div className='md:w-1/3 md:px-8'>
            <div className='flex gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-8 md:h-8 fill-[#187EC2]">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <p>Utilizing the latest technologies to ensure the successful implementation of solutions</p>
            </div>
            <div className='flex gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-6 md:h-6 fill-[#187EC2]">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <p>Working closely with clients to ensure their satisfaction and success</p>
            </div>
            <div className='flex gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-6 md:h-6 fill-[#187EC2]">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <p>Committed to upholding the highest standards of quality and integrity</p>
            </div>
          </div>
        </div>
      </div>

      <div className='relative py-16'>
        {/* <div className='w-60 h-96 bg-[#a4eaff] rounded-br-full rounded-tr-full absolute' /> */}
        <div className='flex flex-col-reverse md:flex-row gap-8 md:gap-4 z-50 md:px-24 px-2'>
          <div className='md:w-1/3 border px-8 py-6 rounded-lg shadow-lg shadow-gray-500 md:p-16'>
            <p className='font-semibold'>Lorem ipsum dolor  consectetur.</p>
            <p className='text-sm text-end pt-6 pb-3'>- Lorem ipsum dolor</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Id luctus enim id in sit vitae bibendum. Eleifend condimentum quam blandit neque tortor potenti eget vestibulum amet. Gravida tristique vulputate pretium nunc cursus odio vestibulum lacus.</p>
          </div>

          <div className='md:w-1/3 flex justify-center'>
            <div>
              <p className='text-4xl'>2023</p>
              <p className='text-[#8F8F8F]'>25 february 2023</p>
            </div>
          </div>

          <div className='md:w-1/3'>
            <p className='text-xl text-center mb-4'>Company road map with our <br />history</p>
            <div className='flex justify-center'>
              <div className='space-y-5'>
                <img src={require("../assets/others/Rectangle 78.png")} alt="" className="w-60" />
                <img src={require("../assets/others/Rectangle 79.png")} alt="" className="w-60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative py-16'>
        <div className='flex flex-col md:flex-row gap-8 md:gap-4 z-50 md:px-24 px-2'>
          <div className='md:w-1/3 flex justify-center'>
            <div>
              <p className='text-4xl'>2022</p>
              <p className='text-[#8F8F8F]'>25 february 2022</p>
            </div>
          </div>

          <div className='md:w-1/3 border px-8 py-6 rounded-lg shadow-lg shadow-gray-500 md:p-16 z-10'>
            <p className='font-semibold'>Lorem ipsum dolor  consectetur.</p>
            <p className='text-sm text-end pt-6 pb-3'>- Lorem ipsum dolor</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Id luctus enim id in sit vitae bibendum. Eleifend condimentum quam blandit neque tortor potenti eget vestibulum amet. Gravida tristique vulputate pretium nunc cursus odio vestibulum lacus.</p>
          </div>

          <div className='md:w-1/3 hidden md:block'>
            <div className='w-60 h-80 bg-[#a4eaff] rounded-bl-full rounded-tl-full absolute right-0' />
          </div>
        </div>
      </div>

      <div className='relative py-16'>
        {/* <div className='w-60 h-96 bg-[#a4eaff] rounded-br-full rounded-tr-full absolute' /> */}
        <div className='flex flex-col md:flex-row gap-8 md:gap-4 z-50 md:px-24 px-2'>
          <div className='md:w-1/3 border px-8 py-6 rounded-lg shadow-lg shadow-gray-500 md:p-16'>
            <p className='font-semibold'>Lorem ipsum dolor  consectetur.</p>
            <p className='text-sm text-end pt-6 pb-3'>- Lorem ipsum dolor</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Id luctus enim id in sit vitae bibendum. Eleifend condimentum quam blandit neque tortor potenti eget vestibulum amet. Gravida tristique vulputate pretium nunc cursus odio vestibulum lacus.</p>
          </div>

          <div className='md:w-1/3 flex justify-center'>
            <div>
              <p className='text-4xl'>2021</p>
              <p className='text-[#8F8F8F]'>25 february 2021</p>
            </div>
          </div>

          <div className='md:w-1/3 md:px-16 my-auto px-8'>
            <div className='space-y-2 mb-4'>
              <p className='text-xl font-bold'>A good team</p>
              <p>Lorem ipsum dolor sit amet consectetur. Lorem habitant leo turpis vitae dolor nulla facilisi. </p>
            </div>
            <div className='space-y-2'>
              <p className='text-xl font-bold'>Contact us</p>
              <p>Lorem ipsum dolor sit amet consectetur. Lorem habitant leo turpis vitae dolor nulla facilisi. </p>
            </div>
            <Link to="/contact">
              <p className='text-[#187EC2]'>Contact page</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About