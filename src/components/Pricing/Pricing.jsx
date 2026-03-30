import React from 'react';
import { GoCheck } from "react-icons/go";

const Pricing = () => {
    return (
        <div className='max-w-300 m-auto px-10 py-12 space-y-5'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Simple, Transparent Pricing</h1>
                <p className='text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
           </div>

            <div className='flex justify-center gap-8 '>

                <div className='bg-gray-200 px-10 py-2 rounded-md shadow space-y-3'>
                    <h3 className='text-2xl font-bold'>Starter</h3>
                    <p>Perfect for getting started</p>
                    <h1 className='text-3xl font-bold'>$0/month</h1>

                    <div className='space-y-1 text-[14px]'>
                        <p className='flex justify-start items-center'><GoCheck /> <span>Access to 10 free tools</span></p>
                        <p className='flex justify-start items-center'><GoCheck /> <span> Basic templates</span></p>
                        <p className='flex justify-start items-center'><GoCheck /> <span> Community support</span></p>
                        <p className='flex justify-start items-center'><GoCheck /> <span> 1 project per month</span></p>
                    </div>

                    <button className='btn btn-primary w-full rounded-2xl'>Get Started Free</button>
                </div>

                <div className='bg-[#4f39f6] text-white px-10 py-2 rounded-md shadow space-y-3'>
                    <h3 className='text-2xl font-bold'>Pro</h3>
                    <p>Best for professionals</p>
                    <h1 className='text-3xl font-bold'>$29/month</h1>

                    <div className='space-y-1 text-[14px]'>
                        <p className='flex justify-start items-center'> <GoCheck /> <span>Access to all premium tools</span></p>
                        <p className='flex justify-start items-center'> <GoCheck /> <span>Unlimited templates</span></p>
                        <p className='flex justify-start items-center'> <GoCheck /> <span>Priority support</span></p>
                        <p className='flex justify-start items-center'> <GoCheck /> <span>Priority support</span></p>
                        <p className='flex justify-start items-center'> <GoCheck /> <span>Cloud sync</span></p>
                        <p className='flex justify-start items-center'> <GoCheck /> <span>Advanced analytics</span></p>
                    </div>
                    <button className='btn btn-default w-full rounded-2xl'>Get Started Free</button>
                </div>

                <div className='bg-gray-200 px-10 py-2 rounded-md shadow space-y-3'>
                    <h3 className='text-2xl font-bold'>Enterprise</h3>
                    <p>For teams and businesses</p>
                    <h1 className='text-3xl font-bold'>$99/month</h1>

                    <div className='space-y-1 text-[14px]'>
                        <p className='flex justify-start items-center'> <GoCheck /> Everything in Pro</p>
                        <p className='flex justify-start items-center'> <GoCheck /> Team collaboration</p>
                        <p className='flex justify-start items-center'> <GoCheck /> Custom integrations</p>
                        <p className='flex justify-start items-center'> <GoCheck /> Dedicated support</p>
                        <p className='flex justify-start items-center'> <GoCheck /> SLA guarantee</p>
                        <p className='flex justify-start items-center'> <GoCheck /> Custom branding</p>
                    </div>
                    <button className='btn btn-primary w-full rounded-2xl'>Get Started Free</button>
                </div>
           </div>
        </div>
    );
};

export default Pricing;