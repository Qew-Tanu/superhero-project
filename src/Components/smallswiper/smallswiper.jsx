import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import '../../styles.css';
// import './swiper.css'
import './smallswiper.css'


import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export const Smallswiper = (props) => {
    return (
        <div className='h-[200px] lg:h-[300px]'>
            <div className='h-[100%] p-[10px] w-full'>
                <Swiper
                    width='120'
                    breakpoints={{
                        1024: {
                            width: '200',
                        },
                    }}
                    spaceBetween='10'
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[FreeMode, Pagination]}
                    className="mySwiper h-full"
                >
                    {props.item.map((item, index) => {
                        const text = `${props.type}-${item.id}`
                        return (
                            <SwiperSlide key={index} className=' h-[calc(100%-30px)] bg-[#7a7a7acc] rounded-[15px] lg:rounded-[30px]'>
                                <Link reloadDocument to={`/${text}`} className='flex flex-col justify-between h-full p-1 sm:p-3 text-[0.6rem] sm:text-[0.75rem] lg:text-[1rem] text-white '>
                                    <div className='flex justify-center overflow-hidden h-[80%] rounded-[15px] lg:rounded-[30px]'>
                                        <img className=' w-[auto] max-w-none rounded-[15px] lg:rounded-[30px] ' src={item.thumbnail.path + "." + item.thumbnail.extension} alt="" />
                                    </div>
                                    <div className=' overflow-hidden'>{item.title || item.name}</div>
                                </Link>

                            </SwiperSlide>

                        )
                    })}
                </Swiper>
            </div>
        </div >
    )
}


