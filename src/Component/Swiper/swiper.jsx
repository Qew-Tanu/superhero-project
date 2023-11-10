import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import '../../styles.css';
import './swiper.css'


import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';



export const SwiperItem = (props) => {
    console.log(props);
    return (
        <div className='h-[300px] lg:h-[400px]'>
            <div className='h-[100%] p-[10px]'>
                <Swiper
                    width='200'
                    breakpoints={{
                        1024: {
                            width: '300',
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
                    {props.item && props.item.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className=' h-[calc(100%-30px)] bg-[#7a7a7acc] rounded-[30px]'>
                                <Link to={`/${props.type}/${item.id}`} className='flex flex-col justify-between h-full p-1 sm:p-3 text-[0.6rem] sm:text-[0.75rem] lg:text-[1rem] text-white '>
                                    <div className='flex justify-center overflow-hidden h-[80%] rounded-[30px]'>
                                        <img className=' w-[auto] max-w-none ' src={item.thumbnail.path + "." + item.thumbnail.extension} alt="" />
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


//max-h-[120px] sm:max-h-[200px] w-auto

//h-[100%] sm:h-[90%]