/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from "../Components/Header/Header";

function Contact() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [job, setJob] = useState("");
    const [company, setCompany] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const Data = { firstName, lastName, email, job, company, country, message };

    }

    return (
        <div className='font-serif'>
            <Header title={"Contact Us"} caption={"We must let go of the life we have planned, so as to accept the one that is waiting for us."} />
            <div className='my-20 px-4 md:px-40'>
                <p className='text-center font-bold text-3xl'>Our friendly team would love to hear from you!</p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
                    <div className='p-10 hidden md:block space-y-2'>
                        <p className='text-[#187EC2] font-bold text-xl'>CONTACT US</p>
                        <p className='font-bold text-lg'>How can we help you ?</p>
                        <p className='pb-4'>Fill the details in the form </p>
                        <img src={require("../assets/others/Group 144.png")} alt="" className='' />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='px-10 md:px-20 py-6 space-y-3'>
                            <input className='w-full border border-blue-600 px-6 py-2 rounded-lg'
                                placeholder='First Name' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input className='w-full border border-blue-600 px-6 py-2 rounded-lg'
                                placeholder='Last Name' required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            <input className='w-full border border-blue-600 px-6 py-2 rounded-lg'
                                placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input className='w-full border border-blue-600 px-6 py-2 rounded-lg'
                                placeholder='Job Title' required value={job} onChange={(e) => setJob(e.target.value)} />
                            <input className='w-full border border-blue-600 px-6 py-2 rounded-lg'
                                placeholder='Company' required value={company} onChange={(e) => setCompany(e.target.value)} />
                            <input className='w-full border border-blue-600 px-6 py-2 rounded-lg'
                                placeholder='Country' required value={country} onChange={(e) => setCountry(e.target.value)} />
                            <textarea className='w-full border border-blue-600 px-6 py-2 rounded-lg'
                                placeholder='Message' required value={message} onChange={(e) => setMessage(e.target.value)} />

                            <div className='flex gap-4 items-start'>
                                <input type="checkbox" className='mt-[0.3rem]' />
                                <p className='text-sm'>I confirm, I have read and agree to <span className='text-[#187EC2]'>Alsol Technology Solution Pvt. Ltd.’s Privacy Policy</span> and consent to sharing my information. </p>
                            </div>
                            <div className='flex gap-4 items-start'>
                                <input type="checkbox" className='mt-[0.3rem]' />
                                <p className='text-sm'>I would like to receive alerts and updates from Alsol Technology Solution Pvt. Ltd.</p>
                            </div>

                            <div className='flex justify-center'>
                                <button type='submit' className='px-12 py-2 bg-[#187EC2] rounded-full text-white font-bold text-lg'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact