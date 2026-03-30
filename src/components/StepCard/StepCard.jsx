import React from 'react';
import icon1 from '../../assets/user.png';


const StepCard = () => {
    return (
        <div className='max-w-300 m-auto py-20 space-y-5 bg-gray-400'>
            <div className='text-center '>
                <h1 className='text-3xl font-bold'>Get Started in 3 Steps</h1>
                <p className='text-[16px] font-semibold'>Start using premium digital tools in minutes, not hours.</p>
           </div>

            <div className='flex justify-center gap-8 text-center px-10'>

                <div className='bg-white px-5 py-5 rounded-md shadow'>
                    <div className='flex justify-center'><img src={icon1} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Create Account</h1>
                    <p className='text-[14px]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div className='bg-white px-5 py-5 rounded-md shadow'>
                    <div className='flex justify-center'><img src={icon1} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Choose Products</h1>
                    <p className='text-[14px]'>Browse our catalog and select the tools that fit your needs.</p>
                </div>

                <div className='bg-white px-5 py-5 rounded-md shadow'>
                    <div className='flex justify-center'><img src={icon1} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Start Creating</h1>
                    <p className='text-[14px]'>Download and start using your premium tools immediately.</p>
                </div>

            </div>
        </div>
    );
};

export default StepCard;

