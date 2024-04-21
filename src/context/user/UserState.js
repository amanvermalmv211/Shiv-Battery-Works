import React, { useState } from 'react';
import UserContext from './userContext'

const UserState = (props) => {

    const [cartOrder, setCartOrder] = useState({});

    const saveCartOrder = (newCart) => {
        localStorage.setItem("sbwcartitems", JSON.stringify(newCart));
    }

    //Set user order to cart
    const setOrdersToCart = async (details) => {

        let newCart = cartOrder;
        if (!(details._id in cartOrder)) {
            newCart[details._id] = details;
        }

        setCartOrder(newCart);
        saveCartOrder(newCart);
        props.setCart(Object.keys(cartOrder).length);
    }

    //Clear Cart
    const clearCart = async () => {
        setCartOrder({});
        saveCartOrder({});
        props.setCart(0);
    }

    //Remove Cart Item
    const removeCartItem = async (id) => {

        let newCartItems = JSON.parse(JSON.stringify(cartOrder));
        if (id in cartOrder) {
            delete newCartItems[id];
        }

        setCartOrder(newCartItems);
        saveCartOrder(newCartItems);
        props.setCart(0);
    }

    return (
        <UserContext.Provider value={{ cartOrder, removeCartItem, setCartOrder, setOrdersToCart, clearCart }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;