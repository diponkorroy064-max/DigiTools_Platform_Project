import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-[#4f39f6] text-white text-center max-w-300 m-auto py-12 px-10 space-y-4'>
            <h1 className='text-3xl font-bold'>Ready to Transform Your Workflow?</h1>
            <p className='font-bold text-gray-200'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>

            <div className='flex justify-center gap-3.5'>
                <button className='btn btn-secondary rounded-full'>Explore Prodocts</button>
                <button className='btn btn-neutral rounded-full'>View Prricing</button>
            </div>

            <p className='font-semibold text-[14px]'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Workflow;