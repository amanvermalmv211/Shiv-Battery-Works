import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import RO from './imagestouse/RO.png';
import Battery from './imagestouse/Battery.png';
import Inverter from './imagestouse/Inverter.png';
import Solarpannel from './imagestouse/Solarpannel.png';
import Gyser from './imagestouse/Gyser.png';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider = () => {

    return (
        <>
            <div className=''>
                <Swiper
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper w-full h-44 md:h-80 lg:h-72 mb-2"
                >

                    <SwiperSlide className='flex justify-center items-center bg-gradient-to-tl from-orange-400 to-pink-400'>
                        <Link to="/battery">
                            <img src={Battery} alt="" className='w-full h-full object-fill lg:object-contain z-10' />
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='flex justify-center items-center bg-gradient-to-tl from-pink-400 to-orange-400'>
                        <Link to="/inverters">
                            <img src={Inverter} alt="" className='w-full h-full object-contain' />
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='flex justify-center items-center bg-gradient-to-tl from-pink-400 to-orange-400'>
                        <Link to="/waterro">
                            <img src={RO} alt="" className='w-full h-full object-contain' />
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='flex justify-center items-center bg-gradient-to-tl from-orange-400 to-pink-400'>
                        <Link to="/geyser">
                            <img src={Gyser} alt="" className='w-full h-full object-contain' />
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='flex justify-center items-center bg-gradient-to-tl from-pink-400 to-orange-400'>
                        <Link to="/solarpannel">
                            <img src={Solarpannel} alt="" className='w-full h-full object-contain' />
                        </Link>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}

export default Slider
