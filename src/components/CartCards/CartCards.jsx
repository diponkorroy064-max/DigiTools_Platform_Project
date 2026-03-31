import React from 'react';
import { toast } from 'react-toastify';

const CartCards = ({ addingCart, setAddingCart }) => {
    console.log(addingCart);
    const totalPrice = addingCart.reduce((sum, item) => sum += item.price, 0);

    const handleDeleteCart = (obj) => {
        console.log("remove btn clicked", obj);
        const filterCard = addingCart.filter(item => item.id !== obj.id);
        setAddingCart(filterCard);
        toast.warning("Cart is Removed !");
    };

    const handleCheckout = () => {
        // console.log("clicked handle checkout button");
        setAddingCart([]);
            toast.warning("Proceed to checkout !");
    };


    return (
        <>
            <div className='space-y-5'>
                {
                    addingCart.map(obj =>
                        <div key={obj.id} className='bg-gray-200 px-10 py-3 rounded-xl flex justify-between items-center shadow'>
                            <div className='flex justify-start items-center gap-5'>
                                <div>
                                    <img className='w-10' src={obj.icon} alt="" />
                                </div>

                                <div>
                                    <h1 className='text-2xl font-bold'>{obj.name}</h1>
                                    <h1 className='font-bold'>${obj.price}</h1>
                                </div>
                            </div>

                            <div className='text-red-500'>
                                <button onClick={() => handleDeleteCart(obj)} className='btn btn-ghost hover:text-blue-400'>Remove</button>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className='space-y-5'>
                <div className='flex justify-between px-14 py-3 bg-amber-500 shadow rounded-full text-2xl font-extrabold text-white'>
                    <p>Total</p>
                    <p>$<span>{totalPrice}</span></p>
                </div>

                <div onClick={handleCheckout} className='text-center btn btn-soft btn-primary w-full rounded-full text-xl shadow font-bold'>
                    <p>Proceed To Checkout</p>
                </div>
            </div>
        </>
    );
};

export default CartCards;

