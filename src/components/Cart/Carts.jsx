import React from 'react';

const Carts = ({ addingCart }) => {
    // console.log(addingCart);
    return (
        <div className='bg-blue-300 px-10 space-y-5'>
            <h1 className='text-3xl font-extrabold'>Your Cart</h1>

            {
                addingCart.map(obj =>
                    <div key={obj.id} className='bg-gray-400 px-10 py-3 rounded-xl flex justify-between items-center'>
                        <div className='flex justify-start items-center gap-5'>
                            <div><img className='w-10' src={obj.icon} alt="" /></div>
                            <div>
                                <h1 className='text-2xl font-bold'>{obj.name}</h1>
                                <h1 className='font-bold'>${obj.price}</h1>
                            </div>
                        </div>
                        
                        <div className='text-red-500'>
                            <button className='btn btn-ghost'>Remove</button>
                        </div>
                    </div>)
            }

            <div className='flex justify-between px-10 py-3 bg-amber-500 rounded-full text-2xl font-extrabold text-white'>
                <p>Total</p>
                <p>$<span>80</span></p>
            </div>

            <div className='text-center px-10 py-3 bg-blue-500 rounded-full text-2xl font-extrabold text-white'>
                <p className=''>Proceed To Checkout</p>
            </div>
        </div>
    );
};

export default Carts;