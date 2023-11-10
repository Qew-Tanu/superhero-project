import React, { useEffect, useState } from 'react'

import { NavbarWeb } from '../../Component/Navbar/navbar'
import { CardList } from '../../Component/Cardlist/CardList'
import { callComicList } from '../../Service/datacall'

const ComicsListpage = () => {
    const [comics, setComics] = useState({})
    const limit = 100
    const offset = 0
    // console.log(events.data);

    useEffect(() => {
        callComicList({ comics, setComics, limit, offset })
    }, [])

    return (
        <div className=' max-w-[1400px] mx-auto'>
            <NavbarWeb />
            <div className=' text-white flex justify-start '>
                <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>Comic</h1>
            </div>
            <div>
                {comics.data && <CardList item={comics.data} />}
            </div>


        </div >

    )
}

export default ComicsListpage