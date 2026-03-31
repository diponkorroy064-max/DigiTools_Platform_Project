import React, { use, useState } from 'react';
import Products from '../Products/Products';
import Carts from '../Cart/Carts';

const Tool = ({ promiseTools, addingCart, setAddingCart }) => {
    const toolsData = use(promiseTools);
    // console.log(toolsData);
    // console.log(addingCart);

    const [toolActive, setToolActive] = useState("products");

    return (
        <div className='max-w-300 m-auto mb-10 space-y-4'>
            <div className='bg-amber-100 py-10 space-y-4'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
                    <p className='text-[14px] text-gray-600'>Choose from our curated collection of premium digital products designed</p>
                    <p className='text-[14px] text-gray-600'>to boost your productivity and creativity.</p>
                </div>

                <div className="flex justify-center bg-gray-50 w-43 m-auto rounded-full p-0 shadow">
                    <input onClick={() => setToolActive("products")} type="button" name="products" className={`btn rounded-full rounded-r-none ${toolActive == "products" ? "btn-primary" : "btn-default"}`} value="Products" />

                    <input onClick={() => setToolActive("carts")} type="button" name="carts" className={`btn rounded-full rounded-l-none ${toolActive == "carts" ? "btn-primary" : "btn-default"}`} value={`Cart (${addingCart.length})`} />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    toolActive == "products" && toolsData.map(toolObj => <Products key={toolObj.id} toolObj={toolObj} addingCart={addingCart} setAddingCart={setAddingCart}></Products>)
                }
            </div>

            <div>
                {
                    toolActive == "carts" && <Carts addingCart={addingCart} setAddingCart={setAddingCart}></Carts>
                }
            </div>
        </div>
    );
};

export default Tool;

