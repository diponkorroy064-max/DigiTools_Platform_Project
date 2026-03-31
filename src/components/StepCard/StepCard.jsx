import React from 'react';
import icon1 from '../../assets/user.png';
import icon2 from '../../assets/package.png';
import icon3 from '../../assets/rocket.png';


const StepCard = () => {
    return (
        <div className='max-w-300 m-auto py-10 space-y-5 bg-gray-400'>
            <div className='text-center '>
                <h1 className='text-3xl font-bold'>Get Started in 3 Steps</h1>
                <p className='text-[16px] font-semibold'>Start using premium digital tools in minutes, not hours.</p>
           </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-10'>

                <div className='relative bg-white px-5 py-5 rounded-md shadow'>
                    <div className='flex justify-center'><img src={icon1} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Create Account</h1>
                    <p className='text-[14px]'>Sign up for free in seconds. No credit card required to get started.</p>
                    
                    <span className='absolute top-2 right-2 bg-indigo-500 text-white text-[12px] rounded-full px-1.5 py-1 font-bold'>01</span>
                </div>

                <div className='relative bg-white px-5 py-5 rounded-md shadow'>
                    <div className='flex justify-center'><img src={icon2} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Choose Products</h1>
                    <p className='text-[14px]'>Browse our catalog and select the tools that fit your needs.</p>

                    <span className='absolute top-2 right-2 bg-indigo-500 text-white text-[12px] rounded-full px-1.5 py-1 font-bold'>02</span>
                </div>

                <div className='relative bg-white px-5 py-5 rounded-md shadow'>
                    <div className='flex justify-center'><img src={icon3} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Start Creating</h1>
                    <p className='text-[14px]'>Download and start using your premium tools immediately.</p>

                    <span className='absolute top-2 right-2 bg-indigo-500 text-white text-[12px] rounded-full px-1.5 py-1 font-bold'>03</span>
                </div>

            </div>
        </div>
    );
};

export default StepCard;

