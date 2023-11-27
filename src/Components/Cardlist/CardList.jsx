import React from 'react'
import { Link } from 'react-router-dom';


export const CardList = (props) => {
    return (
        <div className='flex w-fit'>
            <div className='flex flex-wrap gap-5 h-[100%] justify-center m-auto w-fit'>
                {props.item.map((item, index) => {
                    const text = `${props.type}-${item.id}`
                    return (
                        <Link to={`/detail?type=${props.type}&id=${item.id}`} className='flex flex-col justify-self-start justify-between p-1 sm:p-3 text-[0.6rem] sm:text-[0.75rem] lg:text-[1rem] bg-[#7a7a7acc] w-[150px] h-[200px] sm:h-[300px] sm:w-[200px] rounded-[30px] text-white ' key={item.id}>
                            <div className='flex justify-center max-h-[80%] overflow-hidden rounded-[30px]'>
                                <img className=' rounded-[30px] object-cover max-w-none max-h-none' src={item.thumbnail.path + "." + item.thumbnail.extension} alt="" />
                            </div>
                            <div className=' overflow-hidden'>{item.title || item.name}</div>
                        </Link>
                    )
                })
                }
            </div>
        </div>

    )
}
