import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../../context/user/userContext';
import { toast } from 'react-toastify';

const ShopCart = () => {

    const context = useContext(userContext);
    const { cartOrder, clearCart, removeCartItem } = context;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const haclick = () => {
        toast(`🙄 Do not build yet, Work in progress!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <>
            <div className='h-auto text-white mb-10'>
                <div className='text-3xl font-semibold text-yellow-500 px-4 md:pl-28 py-4'>
                    Shopping Cart
                </div>

                {Object.keys(cartOrder).length <= 0 &&
                    <div className='flex items-center justify-center my-5 flex-col space-y-4'>
                        <div className='flex items-center justify-center flex-col relative'>
                            <i className="fa fa-cart-plus fa-5x scale-125" aria-hidden="true"></i>
                            <div className='border-b w-60 my-3'></div>
                            <div className='border-b w-8 my-3 absolute top-5 -left-4'></div>
                            <div className='border-b w-12 my-3 absolute top-0 left-0'></div>
                            <div className='border-b w-8 my-3 absolute top-0 right-4'></div>
                            <div className='border-b w-16 my-3 absolute top-5 -right-4'></div>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <div className='font-semibold text-xl'>
                                Your Cart is Empty
                            </div>
                            <Link to="/" className='text-xl underline text-blue-500'>
                                Continue shopping
                            </Link>
                        </div>
                    </div>
                }

                {
                    !Object.keys(cartOrder).length <= 0 &&
                    <div className='text-white mt-8'>
                        <div className='flex flex-col items-center justify-center space-y-4'>
                            <button onClick={haclick} className='border w-60 p-2 rounded-md bg-yellow-400 text-gray-800 hover:bg-yellow-500'>Proceed to Buy({Object.keys(cartOrder).length} items)</button>
                            <button onClick={() => {
                                clearCart(); toast.warn(`Now your cart is empty.`, {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                });
                            }} className='border w-60 p-2 rounded-md bg-yellow-400 text-gray-800 hover:bg-yellow-500'>Clear Cart</button>
                        </div>
                    </div>
                }


                <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 lg:gap-8 px-4 md:px-4 mt-8">

                    {
                        Object.keys(cartOrder).map((details) => {
                            return <div key={cartOrder[details]._id} className='flex flex-col'>
                                <div className="group relative flex justify-center h-40 lg:h-48 xl:h-72 overflow-hidden rounded-t-lg bg-gray-100 shadow-lg lg:cursor-pointer">
                                    <div>
                                        <img src={cartOrder[details].imglink} loading="lazy" alt="This is by Minh Pham" className="h-full w-full object-cover object-center transition duration-200 lg:group-hover:scale-110" />
                                    </div>

                                    <div className={`absolute top-0 right-0 text-yellow-400`} onClick={() => { removeCartItem(cartOrder[details]._id) }}>
                                        <div className='bg-[#444444] rounded-md m-1 md:m-2 px-1 lg:py-0.5 lg:px-1.5'>
                                            <i className={`fa fa-cart-arrow-down scale-75 lg:scale-90`} aria-hidden="true"></i>
                                        </div>
                                    </div>

                                </div>

                                <div className='bg-gray-300 text-gray-700 py-0.5 px-1 rounded-b-lg text-md md:font-semibold md:px-2 md:py-1'>
                                    <div className='flex items-start justify-between'>
                                        <div className='flex flex-col items-start'>
                                            <div>{cartOrder[details].name}</div>
                                            <div>{cartOrder[details].capicity}</div>
                                        </div>

                                        <div className='flex flex-col items-end'>
                                            <div>{cartOrder[details].price}</div>
                                            <div className='text-red-500 line-through text-sm'>{cartOrder[details].dprice}</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        })
                    }

                </div>

            </div>

        </>
    )
}

export default ShopCart;