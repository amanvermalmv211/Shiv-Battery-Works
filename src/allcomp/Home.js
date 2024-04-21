import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from './homecomponent/Slider'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Slider />

            <div className="text-white pb-6 sm:pb-8 lg:pb-12 my-0 md:py-5">
                <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div>
                        <div className="hidden lg:flex h-12 w-2/3 divide-x overflow-hidden rounded-lg border border-yellow-500 divide-yellow-500">
                            <Link to="/battery" className="flex w-1/3 items-center justify-center hover:text-lg hover:bg-black">Battery</Link>
                            <Link to="/inverters" className="flex w-1/3 items-center justify-center hover:text-lg hover:bg-black">Inverter</Link>
                            <Link to="/solarpannel" className="flex w-1/3 items-center justify-center hover:text-lg hover:bg-black">Solar Pannel</Link>
                            <Link to="/waterro" className="flex w-1/3 items-center justify-center hover:text-lg hover:bg-black">Water RO</Link>
                            <Link to="/geyser" className="flex w-1/3 items-center justify-center hover:text-lg hover:bg-black">Geyser</Link>
                            <Link to="/" className="flex w-1/3 items-center justify-center hover:text-lg hover:bg-black">Repairing</Link>
                        </div>
                    </div>
                    <div className="mb-2 flex flex-wrap justify-between md:mb-16 lg:mb-6">
                        <div className="flex w-full flex-col justify-start lg:w-1/3 lg:mt-6">
                            <h1 className="mb-4 text-4xl font-bold text-yellow-500 sm:text-5xl md:text-5xl">Find your E-Items online</h1>

                            <p className="max-w-md leading-relaxed xl:text-lg">We're excited to showcase our diverse font collection curated specifically for electronic items on our website. Explore and Discover our collection tailored for electronics.</p>
                        </div>

                        <div className="mb-12 flex justify-end w-full md:mb-2 lg:w-2/3 md:mt-4">
                            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-300 to-violet-300 shadow-lg shadow-black md:left-14 md:top-24 lg:ml-0 w-60 md:w-[24rem] md:h-44 h-24">
                                <img src="https://www.genusinnovation.com/wp-content/uploads/2019/01/solar-for-home.png" loading="lazy" alt="Battery" className="h-full w-full object-fill object-center" />
                            </div>

                            <div className="overflow-hidden rounded-lg bg-gradient-to-r from-violet-300 to-cyan-300 shadow-lg shadow-black w-72 h-28 md:w-[33rem] md:h-56">
                                <img src="https://www.kent.co.in/images/ro/water-purifiers.png" loading="lazy" alt="RO" className="h-full w-full object-fill object-center" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-between gap-2 md:flex-row">

                        <div className="lg:hidden flex justify-center h-8 overflow-hidden text-sm rounded-lg border border-yellow-500">
                            <Link to="/waterro" className="flex items-center justify-center px-2 overflow-hidden hover:bg-black">Water RO</Link>
                        </div>

                        <div className="lg:hidden flex justify-center h-8 overflow-hidden text-sm divide-x divide-yellow-500 rounded-lg border border-yellow-500">
                            <Link to="/battery" className="flex items-center justify-center hover:bg-black px-2">Battery</Link>
                            <Link to="/inverters" className="flex items-center justify-center hover:bg-black px-2">Inverter</Link>
                        </div>

                        <div className="lg:hidden flex justify-center h-8 overflow-hidden divide-x rounded-lg border border-yellow-500 divide-yellow-500">
                            <Link to="/geyser" className="flex items-center justify-center hover:bg-black px-2">Geyser</Link>
                            <Link to="/solarpannel" className="flex items-center justify-center hover:bg-black px-2">Solar Pannel</Link>
                            <Link to="/" className="flex items-center justify-center hover:bg-black px-2">Repairing</Link>
                        </div>


                        <div className="lg:hidden flex items-center justify-center gap-4 mt-4 md:mt-0">
                            <span className="font-semibold uppercase tracking-widest text-yellow-500">Social</span>
                            <span className="h-px w-12 bg-gray-200"></span>

                            <div className="flex gap-4">
                                <Link to="/" target="_blank" className="text-green-500 hover:scale-125">
                                    <i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i>
                                </Link>

                                <Link to="/" target="_blank" className="text-pink-400 hover:scale-125">
                                    <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                                </Link>

                                <Link to="/" target="_blank" className="text-blue-500 hover:scale-125">
                                    <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            <section className='scroll-mt-20 lg:scroll-mt-10' id='aboutus'>
                <div className="text-white py-6 sm:py-8 lg:py-12">
                    <div className='border mx-5 mb-5'></div>
                    <div className="mx-auto max-w-screen-xl px-4 md:px-8">

                        <div className="mb-10 md:mb-16">
                            <h2 className="mb-2 text-center text-2xl font-bold text-yellow-500 lg:text-3xl">About Us</h2>

                            <p className="mx-auto max-w-screen-2xl text-justify lg:text-center md:text-lg">Welcome to our website(Shiv Battery Works) Here, you have exclusive access to a myriad of offerings tailored to meet your electronic needs, including our extensive range of products, specialized services, and reliable repairing solutions.</p>
                        </div>


                        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:gap-8">

                            <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                                <div className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-200 md:h-full md:w-32 lg:w-48">
                                    <img src="https://www.vguard.in/uploads/product/nextgen-pro-1200-bg.jpg" loading="lazy" alt="This is by Minh Pham" className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110" />
                                </div>

                                <div className="flex flex-col gap-2 p-4 lg:p-6">
                                    <h2 className="text-xl font-bold text-gray-800">
                                        <div className="transition duration-100 text-yellow-500">Explore Our Products:</div>
                                    </h2>

                                    <p className='text-justify'>Browse through our comprehensive catalog featuring a diverse array of electronics items, including batteries, inverters, solar panels, and much more. Find the latest innovations and high-quality products right at your fingertips.</p>

                                </div>
                            </div>

                            <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                                <div className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                                    <img src="https://img.freepik.com/free-vector/digital-marketing-service-isometric-concept-with-online-shop-3d-vector-illustration_1284-29968.jpg" loading="lazy" alt="This is by Minh Pham" className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110" />
                                </div>

                                <div className="flex flex-col gap-2 p-4 lg:p-6">
                                    <h2 className="text-xl font-bold text-gray-800">
                                        <div className="transition duration-100 text-yellow-500">Discover Our Services:</div>
                                    </h2>

                                    <p className='text-justify'>Apart from providing top-notch products, we offer specialized services aimed at optimizing your experience. From installation guidance for solar panels to maintenance tips for batteries and inverters, our service section is designed to support you at every step.</p>

                                </div>
                            </div>

                            <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                                <div className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                                    <img src="https://i.pinimg.com/736x/22/6b/16/226b161dbb6939c76572533e588ba994.jpg" loading="lazy" alt="This is by Minh Pham" className="absolute inset-0 h-full w-full md:object-cover object-fill transition duration-200 group-hover:scale-110" />
                                </div>

                                <div className="flex flex-col gap-2 p-4 lg:p-6">
                                    <h2 className="text-xl font-bold text-gray-800">
                                        <div className="transition duration-100 text-yellow-500">Reliable Repairing Services:</div>
                                    </h2>

                                    <p className='text-justify'>Our repairing services are here to assist you. Simply submit a repair request through your account, and we'll ensure a prompt and effective solution to get your devices up and running smoothly again.</p>

                                </div>
                            </div>

                            <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                                <div className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-200 md:h-full md:w-32 lg:w-48">
                                    <img src="https://png.pngtree.com/png-clipart/20220424/original/pngtree-special-offer-sale-tag-png-elements-png-image_7552259.png" loading="lazy" alt="This is by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </div>

                                <div className="flex flex-col gap-2 p-4 lg:p-6">
                                    <h2 className="text-xl font-bold text-gray-800">
                                        <div className="transition duration-100 text-yellow-500">Exclusive Offers:</div>
                                    </h2>

                                    <p className='text-justify'>Keep an eye on the section for special discounts, seasonal deals, and limited-time offers on a variety of electronic products. These exclusive offers are our way of showing appreciation for your trust and loyalty.</p>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Home
