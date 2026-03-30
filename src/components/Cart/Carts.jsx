import React from 'react';

const Carts = ({ addingCart, setAddingCart }) => {
    // console.log(addingCart);

    const totalPrice = addingCart.reduce((sum, item) => sum += item.price, 0);

    const handleCheckout = () => {
        // console.log("clicked handle checkout button");
        setAddingCart([]);
    }

    const handleDeleteCart = (obj) => {
        // console.log("remove btn clicked", obj);
        const filterCard = addingCart.filter(item => item.id !== obj.id);
        setAddingCart(filterCard);
    }

    return (
        <div className='bg-blue-300 px-10 space-y-5'>
            <h1 className='text-3xl font-extrabold'>Your Cart</h1>

            {
                addingCart.length == 0 ? (<p className='text-center text-2xl font-semibold text-red-400'>Your Cart is Empty</p>) :
                    (
                        addingCart.map(obj =>
                            <div key={obj.id} className='bg-gray-200 px-10 py-3 rounded-xl flex justify-between items-center shadow'>
                                <div className='flex justify-start items-center gap-5'>
                                    <div><img className='w-10' src={obj.icon} alt="" /></div>
                                    <div>
                                        <h1 className='text-2xl font-bold'>{obj.name}</h1>
                                        <h1 className='font-bold'>${obj.price}</h1>
                                    </div>
                                </div>

                                <div className='text-red-500'>
                                    <button onClick={()=>handleDeleteCart(obj)} className='btn btn-ghost hover:text-blue-400'>Remove</button>
                                </div>
                            </div>)
                    )
            }

            <div className='flex justify-between px-10 py-3 bg-amber-500 shadow rounded-full text-2xl font-extrabold text-white'>
                <p>Total</p>
                <p>$<span>{totalPrice}</span></p>
            </div>

            <div onClick={handleCheckout} className='text-center btn btn-soft btn-primary w-full rounded-full text-2xl shadow font-bold'>
                <p>Proceed To Checkout</p>
            </div>
        </div>
    );
};

export default Carts;

