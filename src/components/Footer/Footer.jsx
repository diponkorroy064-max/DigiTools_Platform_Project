import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";


const Footer = () => {
    return (
        <footer className="max-w-300 m-auto px-10 bg-[#1e1e1e] text-white pt-15">
            <div className='grid grid-cols-2 md:grid-cols-6 gap-15'>
                <nav className='col-span-2'>
                    <h1 className='text-3xl font-bold pb-2'>DigiTools</h1>
                    <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </nav>

                <nav className='flex flex-col col-span-1'>
                    <h6 className="text-2xl font-bold pb-2">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>

                <nav className='flex flex-col col-span-1'>
                    <h6 className="text-2xl font-bold pb-2">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>

                <nav className='flex flex-col col-span-1'>
                    <h6 className="text-2xl font-bold pb-2">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>

                <nav className='col-span-1'>
                    <h6 className='text-2xl font-bold pb-5'>Social Links</h6>
                    <div className='flex gap-5 -ml-3'>
                        <span className='bg-gray-300 text-black p-2.5 rounded-full'><a href=""><FaInstagramSquare /></a></span>
                        <span className='bg-gray-300 text-black p-2.5 rounded-full'><a href=""><FaFacebookSquare /></a></span>
                        <span className='bg-gray-300 text-black p-2.5 rounded-full'><a href=""><AiOutlineX /></a></span>
                    </div>
                </nav>
            </div>

            <div className='flex justify-between items-center flex-wrap gap-2.5 py-3 border-t-2 border-gray-500 mt-15 text-[14px]'>
                <div>
                    <h1>© 2026 Digitools. All rights reserved.</h1>
                </div>
                <div className='flex gap-6'>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Cookies</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;