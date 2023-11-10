import React, { useEffect, useState } from 'react'

import { NavbarWeb } from '../../Component/Navbar/navbar'
import { CardList } from '../../Component/Cardlist/CardList'
import { callHeroList } from '../../Service/datacall'

const CharacterListpage = () => {
    const [hero, setHero] = useState({})
    const limit = 100
    const offset = 0
    // console.log(events.data);

    useEffect(() => {
        callHeroList({ hero, setHero, limit, offset })
    }, [])

    return (
        <div className=' max-w-[1400px] mx-auto'>
            <NavbarWeb />
            <div className=' text-white flex justify-start '>
                <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>Character</h1>
            </div>
            <div>
                {hero.data && <CardList item={hero.data} />}
            </div>


        </div >

    )
}

export default CharacterListpage
