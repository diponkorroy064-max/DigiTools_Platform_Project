import React from 'react';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ addingCart }) => {
    // console.log(addingCart);
    return (
        <div className='flex justify-between items-center max-w-300 bg-blue-200 m-auto py-2 px-10 sticky top-0 z-50'>
            <div>
                <h1 className='text-2xl font-extrabold text-[#4f39f6]'>DigiTools</h1>
            </div>

            <ol className='hidden gap-5 md:flex'>
                <li><a className='text-[#101727] font-semibold hover:text-red-500' href="">Products</a></li>
                <li><a className='text-[#101727] font-semibold hover:text-red-500' href="">Features</a></li>
                <li><a className='text-[#101727] font-semibold hover:text-red-500' href="">Pricing</a></li>
                <li><a className='text-[#101727] font-semibold hover:text-red-500' href="">Testimonials</a></li>
                <li><a className='text-[#101727] font-semibold hover:text-red-500' href="">FAQ</a></li>
            </ol>

            <div className='flex justify-center items-center gap-4'>
                <div>
                    <div className='relative'>
                        <button className=''><FiShoppingCart /></button>
                        <span className='absolute -top-2 -right-2 text-[10px] bg-red-500 text-white px-1 rounded-full'>{addingCart.length}</span>
                    </div>
                </div>
                <div>
                    <button className='btn btn-dash btn-secondary font-semibold'>Login</button>
                </div>

                <div>
                    <button className='btn btn-soft btn-primary rounded-full'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;