import React from 'react'
import { Link } from 'react-router-dom'


export const NavbarWeb = () => {
    return (
        <div className='flex flex-col items-center pt-[5px]'>
            <img className=' w-[30%] items-center mx-[auto]' src="./image/Marvel_Logo.png" alt="" />
            <nav className=' flex justify-evenly text-white h-[40px] sm:h-[60px] text-[0.6em] p-1 sm:text-[1em] lg:h-[6vw] xl:h-[100px] items-center bg-gray-500 w-[80%] rounded-[50px] border my-[10px] xl:text-[1.5em] '>
                <Link to='/' className='h-[100%] flex justify-center align-middle items-center hover:bg-black rounded-full py-1 sm:px-5 w-[100%] group'>
                    <img className='h-[80%] group-hover:h-[100%] peer-hover:h-[100%]' src="./image/Button.png" alt="" />
                    <div>
                        Home
                    </div>
                </Link>
                <Link to='/events' className='h-[100%] flex justify-center items-center hover:bg-black rounded-full py-1 sm:px-5 w-[100%]'>Events</Link>
                <Link to='/characters' className='h-[100%] flex justify-center items-center hover:bg-black rounded-full py-1 sm:px-5 w-[100%]'>Character</Link>
                <Link to='/comics' className='h-[100%] flex justify-center items-center hover:bg-black rounded-full py-1 sm:px-5 w-[100%] justify-self-center'>Comic</Link>
            </nav>
        </div>
    )
}
