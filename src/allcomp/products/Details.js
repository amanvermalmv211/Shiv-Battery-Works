import React, { useContext, useEffect, useState } from 'react'
import userContext from '../../context/user/userContext';
import { useLocation } from 'react-router-dom';

const Details = () => {

    const context = useContext(userContext);
    const { cartOrder, setOrdersToCart, removeCartItem } = context;

    
    const {state} =  useLocation();
    
    const [isAdded, setAdded] = useState(state._id in cartOrder);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handletoggleCart = () => {
        setAdded(!isAdded);
        if (!isAdded) {
            setOrdersToCart(state);
        }
        else {
            removeCartItem(state._id);
        }

    }

    return (
        <div className="text-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">

                    <div className="space-y-4 flex items-center justify-center">
                        <div className="relative overflow-hidden rounded-lg bg-gray-100">
                            <img src={state.imglink} loading="lazy" alt="Product" className="h-full w-full object-cover object-center" />

                            <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
                        </div>

                    </div>

                    <div className="md:py-8">

                        <div className="mb-2 md:mb-3">
                            <span className="mb-0.5 inline-block text-gray-500">Fancy Brand</span>
                            <h2 className="text-2xl font-bold text-yellow-500 lg:text-3xl">{state.name}</h2>
                        </div>

                        <div className="mb-6 flex items-center md:mb-10">
                            Addon
                        </div>

                        <div className="mb-4 md:mb-6">
                            <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Description</span>

                            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla laudantium harum aliquam deleniti dolorem, magnam perferendis consequuntur, tempore, laboriosam non delectus nesciunt beatae tempora perspiciatis velit rerum deserunt. Amet, quod!</div>
                        </div>

                        {/* <div className="mb-8 md:mb-10">
                            <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Size</span>

                            <div className="flex flex-wrap gap-3">
                                Addon
                            </div>
                        </div> */}

                        <div className="mb-4">
                            <div className="flex items-end gap-2">
                                <span className="text-xl font-bold text-yellow-500 md:text-2xl">{state.price}</span>
                                <span className="mb-0.5 text-red-500 line-through">{state.dprice}</span>
                            </div>

                            <span className="text-sm">incl. VAT plus shipping</span>
                        </div>

                        <div className="mb-6 flex items-center gap-2">
                            <i className="fa fa-truck" aria-hidden="true"></i>

                            <span className="text-sm">2-4 day shipping</span>
                        </div>

                        <div className="flex justify-around">
                            <div className="flex items-center justify-center space-x-2 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white transition duration-100 hover:bg-indigo-600 sm:flex-none md:text-base cursor-pointer">
                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                <span>Buy Now</span>
                            </div>

                            <div onClick={handletoggleCart} className="flex items-center justify-center space-x-2 rounded-lg bg-gray-500 px-4 py-3 text-center text-sm font-semibold transition duration-100 hover:bg-[#444444] md:text-base cursor-pointer">
                                <span>{isAdded ? "Item in Cart" : "Add to Cart"}</span>
                                <i className={`fa fa-lg ${isAdded ? "fa-cart-arrow-down text-yellow-400" : "fa-cart-plus text-white"}`} aria-hidden="true"></i>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Details;