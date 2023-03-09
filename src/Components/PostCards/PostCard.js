import React from 'react'

function PostCard({ title, caption }) {
    return (
        <div className='border px-8 py-8 md:w-1/4 rounded-md'>
            <p className='font-bold text-lg mb-2'>{title}</p>
            <hr className='border-t border-2 border-[#00BAF0]' />
            <p className='my-6'>{caption}</p>
            <div className='flex justify-center'>
                <button className='px-6 py-2 bg-[#187EC2] text-sm rounded-lg text-white'>Read more</button>
            </div>
        </div>
    )
}

export default PostCard