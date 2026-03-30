import React, { use, useState } from 'react';
import Products from '../Products/Products';
import Carts from '../Cart/Carts';

const Tool = ({ promiseTools }) => {
    const toolsData = use(promiseTools);
    // console.log(toolsData);

    const [toolActive, setToolActive] = useState("products")
    const handleTool = () => {
        // console.log("handle tools active");
        if (toolActive == "products") {
            setToolActive("carts")
        }
        else {
            setToolActive("products");
        }
    };

    return (
        <div className='max-w-300 m-auto mb-10 bg-amber-100 py-12 space-y-4'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
                <p className='text-[14px] text-gray-600'>Choose from our curated collection of premium digital products designed</p>
                <p className='text-[14px] text-gray-600'>to boost your productivity and creativity.</p>
            </div>

            <div className="tabs flex justify-center bg-gray-50 w-43 m-auto rounded-full p-0 shadow">
                <input onClick={handleTool} type="radio" name="my_tabs_1" className="btn rounded-full" aria-label="Products" defaultChecked />

                <input onClick={handleTool} type="radio" name="my_tabs_1" className="btn rounded-full" aria-label={`Cart (${0})`} />
            </div>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-5'>
                {
                    toolActive =="products" ? toolsData.map(toolObj=> <Products key={toolObj.id} toolObj={toolObj}></Products>) : null
                }
            </div>

            <div className=''>
                {
                    toolActive == "carts" ? <Carts></Carts> : null
                }
            </div>
        </div>
    );
};

export default Tool;

