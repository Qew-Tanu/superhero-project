import React from 'react'
import { Link } from 'react-router-dom';


export const CardList = (props) => {
    return (
        <div className='flex w-fit'>
            <div className='flex flex-wrap gap-5 h-[100%] justify-center m-auto w-fit'>
                {props.item.map((item, index) => {
                    const text = `${props.type}-${item.id}`
                    return (
                        <div to={`/detail?type=${props.type}&id=${item.id}`} className='text-[0.6rem] sm:text-[0.75rem] lg:text-[1rem] w-[150px] h-[200px] sm:h-[300px] sm:w-[200px] text-white relative group ' key={item.id}>
                            <div className='w-full h-full bg-[#7a7a7acc] rounded-[30px] group-hover:animate-flip flex flex-col justify-self-start justify-between p-1 sm:p-3'>
                                <div className='flex justify-center max-h-[80%] overflow-hidden rounded-[30px]'>
                                    <img className=' rounded-[30px] object-cover max-w-none max-h-none ' src={item.thumbnail.path + "." + item.thumbnail.extension} alt="" />
                                </div>
                                <div className=' overflow-hidden text-center'>{item.title || item.name}</div>
                                <div className='hidden absolute bg-gray-800 bg-opacity-90 w-full h-full top-0 left-0 rounded-[30px] group-hover:animate-show group-hover:flex flex-col justify-between text-white p-3'>
                                    <div className='text-center overflow-hidden'>{item.description || "No description"}</div>
                                    <Link to={`/detail?type=${props.type}&id=${item.id}`} className='text-center h-[50px] underline'>Click to See more....</Link>
                                </div>
                            </div>

                        </div>
                    )
                })
                }
            </div>
        </div>

    )
}
