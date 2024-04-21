import React, { useEffect } from 'react'
import AllProducts from './AllProducts';

const Battery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let allLinks = [
        { _id: "100", name: "Livenergy", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://5.imimg.com/data5/SELLER/Default/2020/9/PK/YW/MC/101598761/250-ah-livenergy-solartech-tall-tublar-battery-500x500.jpg" },
        { _id: "1", name: "Tubo", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://5.imimg.com/data5/SELLER/Default/2023/4/298915485/ZD/XZ/EZ/36906022/tubo-tt2000-12v-c20-200ah-tall-tubular-battery-for-solar-applications.png" },
        { _id: "2", name: "UTL", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://5.imimg.com/data5/SELLER/Default/2023/2/DP/YL/NY/1963500/12-v-amaron-battery.jpg" },
        { _id: "3", name: "Tesla", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://teslapowerusa.com/assets/images/inverter-battery-demo.png" },
        { _id: "4", name: "WinFast", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://5.imimg.com/data5/SELLER/Default/2023/3/294773799/BV/KI/ZO/50020916/water-heater-geyser-500x500.jpg" },
        { _id: "5", name: "Luminous", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://images.jdmagicbox.com/quickquotes/images_main/tesla-power-usa-inverter-batteries-10-06-2022-036-271536050-8gdm2nyq.jpg" },
        { _id: "6", name: "Luminous", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://i.pinimg.com/originals/8e/0a/9a/8e0a9a24e6d48a030ddc303d3fb56e3b.png" },
        { _id: "7", name: "Luminous", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://www.pngall.com/wp-content/uploads/4/Exide-Car-Battery-PNG-Picture.png" },
        { _id: "8", name: "Mtekpower", price: "23500", dprice: "20430", capicity: "200ah", imglink: "https://www.inverterhome.in/wp-content/uploads/2021/08/Amaron-125AH-Tubular-Battery-AR125ST36.jpg" }
    ];

    return (
        <>
            <div className="py-6 sm:py-8 lg:py-12 text-white">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-2 text-center text-2xl font-bold text-yellow-500 lg:text-3xl">Battery</h2>

                    <div className='flex items-center justify-center text-center mb-8'>
                        <div className='xl:w-2/3'>
                            Power up your devices with confidence using our high-quality batteries. We're committed to providing a seamless shopping experience and ensuring that you find the perfect battery for every electronic companion in your life.
                        </div>
                    </div>

                    <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 lg:gap-8">

                        {
                            allLinks.map((myLink) => (
                                <AllProducts key={myLink._id} details={myLink}/>
                            ))
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default Battery;