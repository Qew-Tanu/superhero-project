import { Link, Navigate, useNavigate, useSubmit, } from 'react-router-dom'
import React, { useContext } from 'react'
import { useSearchform } from '../SeafchForm/SearchForm.Hook'
import { ParameterContext } from '../usecontext/parametersearch'





export const NavbarWeb = () => {
    const { fieldKeyword, fieldType } = useSearchform()
    const [searchvalue, setSearchvalue, finishSearch, setFinishSearch] = useContext(ParameterContext)
    const navigate = useNavigate();


    function handleSubmit() {
        navigate(`/search`)
    }

    return (
        <div className='flex flex-col items-center py-[5px]'>
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


            <form className='flex justify-center w-[80%]' method="get" action="/search" >
                <div className='flex justify-center w-[100%] gap-2 align-middle '>
                    <label htmlFor="searchby" className="flex  justify-center w-[30%] font-medium text-white text-center text-[0.4em] sm:text-[0.8em] xl:text-[1.3em] rounded-[50px] border h-[100%]" >
                        <div className='my-auto'>Search by</div>
                    </label>
                    <select id="searchby" name='searchby' className="w-[50%] sm:w-[30%] bg-[#162150] border border-gray-300 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 flex-initial text-[0.4em] sm:text-[0.8em] xl:text-[1.3em]">
                        <option key='events' value='events' >events</option>
                        <option key='characters' value='characters' >characters</option>
                        <option key='comics' value='comics' >comics</option>
                    </select>
                    <input required type="text" name='keyword' className='text-center bg-[#162150] border border-gray-300 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[0.4em] sm:text-[0.8em] xl:text-[1.3em]' placeholder='input name' />
                    <input type="submit" className='text-center bg-[#162150] border border-gray-300 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[15%] p-2.5 text-[0.4em] sm:text-[0.8em] xl:text-[1.3em]' value="search" />
                </div>
            </form>
        </div>
    )
}
