import React from 'react'
import Header from '../Components/Header/Header'

function CareerForm() {
    return (
        <div className='font-serif'>
            <Header title={"Our Career"} caption={"We must let go of the life we have planned, so as to accept the one that is waiting for us."} />
            <p className='px-6 py-10 md:mx-80'>Lorem ipsum dolor sit amet consectetur. Sit interdum ac gravida tellus. Pellentesque tristique integer elementum cursus sit ornare. Et risus massa amet morbi. Pellentesque augue euismod morbi ac viverra leo.</p>

            <form className='px-10 md:mx-80 mx-4 py-10 bg-[#C9C9C9] rounded-xl mb-10 md:mb-40'>
                <div className="flex flex-wrap mb-6 md:px-20">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-2">
                        <label>
                            Position Title <span className="text-red-600">*</span>
                        </label>
                        <input className="w-full border border-gray-500 rounded py-2 px-4 text-lg mb-3" type="text" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-2">
                        <label>
                            Available start date <span className="text-red-600">*</span>
                        </label>
                        <input className="w-full border border-gray-500 rounded py-2 px-4 text-lg" type="text" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-2">
                        <label>
                            First Name <span className="text-red-600">*</span>
                        </label>
                        <input className="w-full border border-gray-500 rounded py-2 px-4 text-lg mb-3" type="text" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-2">
                        <label>
                            Last Name <span className="text-red-600">*</span>
                        </label>
                        <input className="w-full border border-gray-500 rounded py-2 px-4 text-lg" type="text" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-2">
                        <label>
                            Email <span className="text-red-600">*</span>
                        </label>
                        <input className="w-full border border-gray-500 rounded py-2 px-4 text-lg mb-3" type="text" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-2">
                        <label>
                            Phone Number <span className="text-red-600">*</span>
                        </label>
                        <input className="w-full border border-gray-500 rounded py-2 px-4 text-lg" type="text" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-4">
                        <label>
                            Number of related years of experience <span className="text-red-600">*</span>
                        </label>
                        <input className="w-full border border-gray-500 rounded py-2 px-4 text-lg" type="text" />
                    </div>
                    <div className="w-full px-3 mb-4 md:mb-2">
                        <label>
                            Additional Information
                        </label>
                        <textarea className="w-full border border-gray-500 rounded py-2 px-4 text-lg" type="text" />
                    </div>
                    <div className="w-full px-3 mb-4 md:mb-2">
                        <label>
                            Resume <span className="text-red-600">*</span>
                        </label>
                        <p>Lorem ipsum dolor sit amet consectetur. Proin neque amet quis in vulputate massa massa. Enim amet enim dictumst elit rhoncus tortor augue neque.</p>
                        <input className="w-full border border-gray-500 rounded py-2 px-4 text-lg" type="file" />
                    </div>
                    <div className="w-full px-3 mt-8">
                        <button className="px-8 py-3 bg-[#187EC2] text-lg font-bold text-white rounded-lg">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CareerForm