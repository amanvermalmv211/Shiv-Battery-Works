import React, { useEffect } from 'react';
import AllProducts from './AllProducts';

const WaterRO = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let allLinks = [
        { _id: "31", name: "Kent", price: "23500", dprice: "20430", capicity: "15L", imglink: "https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2020/01/kent-ro-water-purifier-picture_5e1c8590f24cd.png" },
        { _id: "32", name: "Kent", price: "23500", dprice: "20430", capicity: "12L", imglink: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697624976/Croma%20Assets/Small%20Appliances/Water%20Purifier/Images/226375_ayvk99.png" },
        { _id: "33", name: "Havells", price: "23500", dprice: "20430", capicity: "16L", imglink: "https://clearflo.in/images/RO%20water%20purifier%20Chennai.jpg" },
        { _id: "34", name: "Havells", price: "23500", dprice: "20430", capicity: "15L", imglink: "https://5.imimg.com/data5/SELLER/Default/2023/5/309317353/MF/EC/XV/62524086/41a-illixzl-sy879--500x500.jpg" },
        { _id: "36", name: "Bajaj", price: "23500", dprice: "20430", capicity: "12L", imglink: "https://provenonline.in/wp-content/uploads/2022/10/51RZYVo9sdL._SL1000_.jpg" },
        { _id: "37", name: "Kent", price: "23500", dprice: "20430", capicity: "14L", imglink: "https://livpure.com/cdn/shop/files/livpure-ro-zinger-copper-hot-water-purifier-36798673485977.webp?v=1686544173" },
        { _id: "38", name: "Havells", price: "23500", dprice: "20430", capicity: "14L", imglink: "https://5.imimg.com/data5/SELLER/Default/2023/4/299421303/QI/DO/EY/4054545/livpure-envy-alkaline-ro-uv-uf-smart-tds-adjuster-water-purifier-for-home-alkaline-ph-8-ro-2000-tds-membrane-8l-storage-white.jpg" },
        { _id: "39", name: "Kent", price: "23500", dprice: "20430", capicity: "18L", imglink: "https://www.seekpng.com/png/detail/367-3676685_kent-ro-water-purifier-png-photo-kent-ro.png" },
        { _id: "40", name: "Nature", price: "23500", dprice: "20430", capicity: "10L", imglink: "https://rukminim2.flixcart.com/image/850/1000/xif0q/water-purifier/9/g/w/pearl-water-purifier-ro-copper-filter-12ltrs-water-tanks-aqua-original-imaghu9aggczffke.jpeg?q=90&crop=false" }
    ];

    return (
        <>
            <div className="py-6 sm:py-8 lg:py-12 text-white">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-2 text-center text-2xl font-bold text-yellow-500 lg:text-3xl">Water Purifier</h2>

                    <div className='flex items-center justify-center text-center mb-8'>
                        <div className='xl:w-2/3'>
                            We're thrilled to present our collection of top-notch Water Reverse Osmosis (RO) Systems, designed to provide you with pure, clean, and refreshing drinking water.
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

export default WaterRO
