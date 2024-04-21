import React, { useEffect } from 'react';
import AllProducts from './AllProducts';

const Geysers = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let allLinks = [
        { _id: "9", name: "Ken Star", price: "23500", dprice: "20430", capicity: "", imglink: "https://pngimg.com/d/water_heater_PNG63.png" },
        { _id: "10", name: "Activa", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://m.media-amazon.com/images/I/61bjVTKMxES.jpg" },
        { _id: "11", name: "Haier", price: "23500", dprice: "", capicity: "200ah", imglink: "https://pngimg.com/d/water_heater_PNG17.png" },
        { _id: "13", name: "Ken Star", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://pngimg.com/d/water_heater_PNG33.png" },
        { _id: "16", name: "Shydnoc", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://www.pngall.com/wp-content/uploads/10/Geyser-PNG-Free-Image.png" }
    ];

    return (
        <>
            <div className="py-6 sm:py-8 lg:py-12 text-white">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-2 text-center text-2xl font-bold text-yellow-500 lg:text-3xl">Geyser Collections</h2>

                    <div className='flex items-center justify-center text-center mb-8'>
                        <div className='xl:w-2/3'>
                            When it comes to your comfort and convenience explore our collection of geysers designed to elevate your bathing experience and meet your hot water needs seamlessly.
                        </div>
                    </div>

                    <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">

                        {
                            allLinks.map((myLink) => (
                                <AllProducts key={myLink._id} details={myLink} />
                            ))
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default Geysers
