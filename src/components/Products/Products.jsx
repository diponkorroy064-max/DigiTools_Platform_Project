import React, { useState } from 'react';
import { GoCheck } from "react-icons/go";
import { toast } from 'react-toastify';

const Products = ({ toolObj, addingCart, setAddingCart}) => {
    // console.log(toolObj);

    const [btnClicked, setBtnClicked] = useState(false);
    const handleToolBtn = () => {
        if (btnClicked==true) {
            setBtnClicked(false);
            toast.error("Card Already Added !");
        }
        else {
            setBtnClicked(true);
            toast.success("Card is Added !");
        }
        console.log("get the clicked objects....", toolObj);
        const isFound = addingCart.find(item => item.id == toolObj.id);
        if (isFound) {
            return;
        }
        const newCart = [...addingCart, toolObj];
        setAddingCart(newCart);
        // console.log(newCart);
    }

    return (
        <div className="bg-base-100 w-96 shadow p-5 rounded-xl space-y-2 relative">
            <figure className='bg-gray-200 w-14 p-2 border border-gray-400 rounded-full'>
                <img className='w-12' src={toolObj.icon} alt="Tools" />
            </figure>

            <div className="space-y-2">
                <h2 className="text-2xl font-bold">{toolObj.name}</h2>

                <p className='text-[14px]'>{toolObj.description}</p>

                <p><span className='text-2xl font-semibold'>${toolObj.price}</span> {toolObj.period}</p>

                <ul>
                    {
                        toolObj.features.map(item => <li className='flex justify-start items-center text-[14px] font-semibold' key={toolObj.features.indexOf(item)}><span><GoCheck /></span><span>{item}</span></li>)   
                    }
                </ul>

                <div>
                    <button onClick={()=>handleToolBtn(toolObj)} className="btn btn-primary w-full">{btnClicked ? (<><GoCheck /> Added to Card</>) : "Buy Now"}</button>
                </div>
            </div>
            <span className={`absolute top-3 right-6 shadow badge badge-soft ${toolObj.tag == "popular" ? "badge-primary" : toolObj.tag == "new" ?"badge-accent": "badge-secondary"}`}>{toolObj.tag}</span>
        </div>
    );
};

export default Products;

