import React from 'react';
import bannarImg from '../../assets/banner.png';
import bannarIcon from '../../assets/group-5.png';
import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Bannar = () => {
    return (
        <div className='flex justify-between items-center flex-wrap gap-8 max-w-300 m-auto px-10 py-5 my-10 bg-purple-200'>
            <div className='space-y-3'>
                <p className='bg-blue-200 rounded-2xl flex justify-center items-center gap-2 w-74 py-1 px-2 text-indigo-500 font-bold border border-white'> <img src={bannarIcon} alt="" /> <span>New: AI-Powered Tools Available</span></p>

                <h1 className='text-4xl font-bold'>Supercharge Your</h1>
                <h1 className='text-4xl font-bold'>Digital Workflow</h1>

                <p className='text-gray-600'>Access premium AI tools, design assets, templates, and productivity </p>
                <p className='text-gray-600'>software—all in one place. Start creating fast today.</p>
                <p className='text-gray-600'>Explore Products</p>

                <div className='flex gap-4'>
                    <button className='btn rounded-full btn-soft btn-primary'>Explore Productsh <FaArrowRight /></button>
                    <button className='btn rounded-full btn-soft btn-secondary'><FaPlay /> Watch Demo</button>
                </div>
            </div>

            <div>
                <img className='w-80 border-2 border-white rounded-xl' src={bannarImg} alt="" />
            </div>
        </div>
    );
};

export default Bannar;