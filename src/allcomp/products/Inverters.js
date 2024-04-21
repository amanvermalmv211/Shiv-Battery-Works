import React, { useEffect } from 'react'
import AllProducts from './AllProducts';

const Inverters = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let allLinks = [
        { _id: "17", name: "Luminous", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://5.imimg.com/data5/SELLER/Default/2022/11/KG/IN/XE/2428161/1-500x500.jpg" },
        { _id: "18", name: "V-Guard", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://assets.nikshanonline.com/wp-content/uploads/2023/06/2-3.png" },
        { _id: "19", name: "Luminous", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://www.pngall.com/wp-content/uploads/7/Luminous-Inverter-PNG-Image.png" },
        { _id: "20", name: "Suder", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://powerwalker.com/wp-content/uploads/2022/05/10120224_thumbnail.jpg" },
        { _id: "21", name: "Solax", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://www.pngall.com/wp-content/uploads/7/Solar-Panel-Inverter-PNG-Clipart.png" },
        { _id: "22", name: "Saitek", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://www.pngall.com/wp-content/uploads/7/Inverter-PNG.png" },
        { _id: "23", name: "Amaze", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://5.imimg.com/data5/SELLER/Default/2021/6/MO/DE/RR/8487147/amaze-1275va-inverter.jpg" },
        { _id: "24", name: "Microtex", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://freepngimg.com/thumb/technology/51519-7-inverter-image-free-hd-image.png" }
    ];

    return (
        <>
            <div className="py-6 sm:py-8 lg:py-12 text-white">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-2 text-center text-2xl font-bold text-yellow-500 lg:text-3xl">Inverter Collections</h2>

                    <div className='flex items-center justify-center text-center mb-8'>
                        <div className='xl:w-2/3'>
                            Discover Our Range of Inverters for Reliable Power Solutions! Whether for home, office, or outdoor use, find the perfect match for your needs. Explore our range here and never be without power again!
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

export default Inverters
