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
                            <SwiperSlide key={index} className=' h-[calc(100%-30px)]  relative group'>
                                <div className='w-full h-full bg-[#7a7a7acc] rounded-[30px] group-hover:animate-flip'>
                                    <div reloadDocument to={`/detail?type=${props.type}&id=${item.id}`} className='flex flex-col justify-between h-full p-1 sm:p-3 text-[0.6rem] sm:text-[0.75rem] lg:text-[1rem] text-white '>
                                        <div className='flex justify-center overflow-hidden h-[80%] rounded-[15px] lg:rounded-[30px]'>
                                            <img className=' w-[auto] max-w-none rounded-[15px] lg:rounded-[30px] ' src={item.thumbnail.path + "." + item.thumbnail.extension} alt="" />
                                        </div>
                                        <div className=' overflow-hidden text-center'>{item.title || item.name}</div>
                                    </div>
                                    <div className=' hidden absolute bg-gray-800 bg-opacity-90 w-full h-full top-0 left-0 rounded-[30px] group-hover:animate-show group-hover:flex flex-col justify-between text-white p-3'>
                                        <div className='text-center overflow-hidden'>{item.description || "No description"}</div>
                                        <Link to={`/detail?type=${props.type}&id=${item.id}`} className='text-center h-[50px] underline'>Click to See more....</Link>
                                    </div>
                                </div>

                            </SwiperSlide>

                        )
                    })}
                </Swiper>
            </div>
        </div >
    )
}


