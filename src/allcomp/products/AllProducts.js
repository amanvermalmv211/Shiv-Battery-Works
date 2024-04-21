import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import userContext from '../../context/user/userContext';
import { toast } from 'react-toastify';

const AllProducts = (props) => {

    const context = useContext(userContext);
    const { cartOrder, setOrdersToCart, removeCartItem } = context;

    const navigate = useNavigate(null);
    const [isAdded, setAdded] = useState(null);
    
    useEffect(() => {
        setAdded(props.details._id in cartOrder);
        // eslint-disable-next-line 
    }, [isAdded]);


    const haclick = () => {
        navigate("/details", { state: props.details });
    }

    const handletoggleCart = () => {
        setAdded(!isAdded);
        if (!isAdded) {
            setOrdersToCart(props.details);
            toast(`😇 Secured in your shopping haven.`, {
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
        else {
            removeCartItem(props.details._id);
        }

    }

    return (
        <>
            <div className='flex flex-col'>
                <div className="group relative flex justify-center h-40 lg:h-48 xl:h-72 overflow-hidden rounded-t-lg bg-gray-100 shadow-lg lg:cursor-pointer">
                    <div onClick={haclick}>
                        <img src={props.details.imglink} loading="lazy" alt="This is by Minh Pham" className="h-full w-full object-cover object-center transition duration-200 lg:group-hover:scale-110 mix-blend-darken" />
                    </div>

                    <div className={`absolute top-0 right-0 ${!isAdded ? "text-white" : "text-yellow-400"}`} onClick={handletoggleCart}>
                        <div className='bg-[#444444] rounded-md m-1 md:m-2 px-1 lg:py-0.5 lg:px-1.5'>
                            <i className={`fa ${!isAdded ? "fa-cart-plus" : "fa-cart-arrow-down"} scale-75 lg:scale-90`} aria-hidden="true"></i>
                        </div>
                    </div>

                </div>

                <div className='bg-gray-300 text-gray-700 py-0.5 px-1 rounded-b-lg text-md md:font-semibold md:px-2 md:py-1'>
                    <div className='flex items-start justify-between'>
                        <div className='flex flex-col items-start'>
                            <div>{props.details.name}</div>
                            <div>{props.details.capicity}</div>
                        </div>

                        <div className='flex flex-col items-end'>
                            <div>{props.details.price}</div>
                            <div className='text-red-500 line-through text-sm'>{props.details.dprice}</div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AllProducts;