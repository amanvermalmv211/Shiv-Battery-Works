import React, { useEffect } from 'react'
import AllProducts from './AllProducts';

const SolarPannel = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let allLinks = [
        { _id: "25", name: "Luminous", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://www.pngall.com/wp-content/uploads/2/Solar-Power-PNG-Free-Image.png" },
        { _id: "26", name: "Salox", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://pngimg.com/d/solar_panel_PNG70.png" },
        { _id: "27", name: "Luminous", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzBHPM130nZM_wQ33l22n5xN5xZVzfIAiLOuUuI1_s5jnPcxekf7t_4BW8DjAwLa6rPn8&usqp=CAU" },
        { _id: "28", name: "Amaze", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://5.imimg.com/data5/SELLER/Default/2022/7/JA/KA/PZ/12756216/60-w-solar-panel-500x500.jpg" },
        { _id: "29", name: "Microtek", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://www.pngall.com/wp-content/uploads/2/Solar-Panel-Transparent.png" },
        { _id: "30", name: "Luminous", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://5.imimg.com/data5/SELLER/Default/2021/3/EJ/OV/OR/34633653/335w-waaree-solar-panel-500x500.jpg" }
    ];

    return (
        <>
            <div className="py-6 sm:py-8 lg:py-12 text-white">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-2 text-center text-2xl font-bold text-yellow-500 lg:text-3xl">Solar Pannel</h2>

                    <div className='flex items-center justify-center text-center mb-8'>
                        <div className='xl:w-2/3'>
                            We have the perfect solar panels for you. Our selection encompasses various sizes, power outputs, and technologies, ensuring that you can find the ideal match for your specific requirements.
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

export default SolarPannel;