import React, { useContext, useEffect, useState } from 'react'
import Search from './Search.js'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import userContext from '../../context/user/userContext.js';

const Navbar = () => {

    const context = useContext(userContext);
    const { cartOrder, setCartOrder } = context;

    useEffect(() => {
        try {
            if (localStorage.getItem("sbwcartitems")) {
                setCartOrder(JSON.parse(localStorage.getItem("sbwcartitems")));
            }
        }
        catch (err) {
            localStorage.removeItem("sbwcartitems");
            console.log(err)
        }
        // eslint-disable-next-line
    }, []);

    const [isOpen, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        // Add or remove a CSS class to the body when the modal opens or closes
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        return () => {
            document.body.classList.remove('modal-open');
        };

    }, [isOpen]);

    let allLinks = [
        { name: "Home", link: "/", logo: "fa-home" },
        { name: "Your Account", link: "/accounts", logo: "fa-user-circle" },
        { name: "Battery", link: "/battery", logo: "fa-battery-three-quarters" },
        { name: "Inverter", link: "/inverters", logo: "fa-credit-card-alt" },
        { name: "Solar Panel", link: "/solarpannel", logo: "fa-th rotate-90" },
        { name: "Water RO", link: "/waterro", logo: "fa-tint" },
        { name: "Geyser", link: "/geyser", logo: "fa-shower" },
        { name: "Repairing", link: "/", logo: "fa-plus-square" },
        { name: "Your Shoping Cart", link: "/shoppingcart", logo: "fa-shopping-cart" }
    ];

    return (
        <>
            <div className='bg-black text-white p-3 lg:py-4 flex flex-col justify-center space-y-1 sticky top-0 left-0 z-40'>
                <div className='flex items-center justify-between space-x-6'>

                    <div className='flex items-center w-full'>
                        <div className='flex items-center justify-center space-x-2'>
                            <div className='w-8 h-8'>
                                <img src="https://i.pinimg.com/originals/9a/f8/a5/9af8a55b384c6648ad8020760902fb12.png" alt="" className='w-full h-full rounded-full' />
                            </div>
                            <Link to="/" className='text-xl md:text-3xl font-semibold'>Shiv Battery Works</Link>

                        </div>

                        <div className='hidden lg:block mx-auto'>
                            <Search />
                        </div>

                    </div>


                    <div className='flex items-center justify-center space-x-4 md:space-x-12'>
                        <Link to="/accounts" className='lg:cursor-pointer'>
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                        </Link>

                        <Link to="/shoppingcart" className='lg:cursor-pointer relative'>
                            <i className="fa fa-cart-plus" aria-hidden="true"></i>
                            <div className='absolute -top-1.5 -right-2 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center p-1 text-xs'>{Object.keys(cartOrder).length}</div>
                        </Link>

                        <div className='flex items-center justify-center'>
                            <button type="button" className="lg:hidden cursor-default" onClick={onOpen}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>

                            </button>
                        </div>

                    </div>

                </div>

                <div className='lg:hidden mx-auto'>
                    <Search />
                </div>

            </div>

            <div className={`text-white fixed top-0 right-0 w-full h-full bg-[#191919] transform ${isOpen ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto z-50`}
            >
                <div className='sticky top-0 right-0 bg-black z-20 p-4'>
                    <div className="">
                        <h2 className="text-2xl font-semibold w-full pl-5">Menu <i className="fa fa-caret-down ml-2" aria-hidden="true"></i></h2>

                    </div>
                    <button className="absolute top-5 right-4 text-white hover:text-gray-400" onClick={onClose}>
                        <i className="fa fa-window-close-o fa-2xl" aria-hidden="true"></i>
                    </button>
                </div>

                <div>
                    <div onClick={onClose} className='flex flex-col justify-center font-medium'>

                        {
                            allLinks.map((myLink, index) => (
                                <Link key={index} to={myLink.link} className={`flex items-center space-x-4 p-4 ${index % 2 === 0 && "bg-[#444444]"}`}><i className={`fa ${myLink.logo}`} aria-hidden="true"></i> <span className='text-xl'>{myLink.name}</span></Link>
                            ))
                        }

                        <HashLink to="/#aboutus" className="flex items-center p-4 space-x-4"><i className="fa fa-address-card" aria-hidden="true"></i> <span className='text-xl'>About Us</span></HashLink>

                        <div className='bg-[#444444] h-auto p-4'>
                            <div className='flex items-center space-x-4'>
                                <i className="fa fa-smile-o" aria-hidden="true"></i>
                                <span className='text-xl'>Get In Touch</span>
                            </div>
                            <div className='grid grid-cols-3 md:grid-cols-2 gap-8 md:gap-16 items-center justify-center text-center py-6'>
                                <div>
                                    <i className="fa fa-whatsapp fa-lg bg-green-500 py-4 px-2 rounded-md" aria-hidden="true"></i>
                                </div>

                                <div>
                                    <i className="fa fa-facebook fa-lg bg-blue-500 py-4 px-3 rounded-md" aria-hidden="true"></i>
                                </div>

                                <div>
                                    <i className="fa fa-instagram fa-lg bg-pink-400 py-4 px-2 rounded-md" aria-hidden="true"></i>
                                </div>

                                <div>
                                    <i className="fa fa-twitter fa-lg bg-blue-500 py-4 px-2 rounded-md" aria-hidden="true"></i>
                                </div>

                                <div>
                                    <i className="fa fa-envelope fa-lg bg-yellow-400 py-4 px-2 rounded-md" aria-hidden="true"></i>
                                </div>

                                <div>
                                    <i className="fa fa-phone fa-lg bg-gray-400 py-4 px-2 rounded-md" aria-hidden="true"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Navbar;