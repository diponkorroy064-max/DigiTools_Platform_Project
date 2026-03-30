import React from 'react';

const Rating = () => {
    return (
        <div className='bg-[#4f39f6] text-white grid grid-cols-4 max-w-300 m-auto px-10 py-4 rounded-xl mb-10'>
            <div className='border-r-2 col-span-1 items-center text-center'>
                <p className='text-2xl font-bold'>50K+</p>
                <p>Active Users</p>
            </div>

            <div className='col-span-2 text-center'>
                <p className='text-2xl font-bold'>200+</p>
                <p>Premium Tools</p>
            </div>

            <div className='border-l-2 col-span-1 text-center'>
                <p className='text-2xl font-bold'>4.9</p>
                <p>Rating</p>
            </div>
        </div>
    );
};

export default Rating;