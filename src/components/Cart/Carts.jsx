import React from 'react';
import CartCards from '../CartCards/CartCards';
import shoppingCard from '../../assets/shopping-removebg-preview.png'

const Carts = ({ addingCart, setAddingCart }) => {
    // console.log(addingCart);

    return (
        <div className='bg-blue-200 py-6 px-10 space-y-5'>
            <div>
                <h1 className='text-3xl font-extrabold'>Your Cart</h1>
            </div>

            {
                addingCart.length == 0 ? (
                    <div className='bg-white py-5 rounded-xl border-2 border-gray-400 shadow space-y-4'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={shoppingCard} alt="" />
                        </div>
                        <p className='text-center text-xl font-semibold text-red-400'>Your Cart is Empty</p>
                    </div>

                    ) : <CartCards addingCart={addingCart} setAddingCart={setAddingCart}></CartCards>
            }
        </div>
    );
};

export default Carts;

