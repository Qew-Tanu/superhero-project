import React, { useEffect, useState } from 'react'

import { NavbarWeb } from '../../Component/Navbar/navbar'
import { CardList } from '../../Component/Cardlist/CardList'
import { callHeroList } from '../../Service/datacall'

const CharacterListpage = () => {
    const [hero, setHero] = useState({})
    const limit = 20
    const offset = 0
    // console.log(events.data);

    useEffect(() => {
        callHeroList({ hero, setHero, limit, offset })
    }, [])

    useEffect(() => {
        if (localStorage.getItem(`heroList`) !== null && Object.keys(JSON.parse(localStorage.getItem(`heroList`))).length !== 0) {
            const dataInID = (JSON.parse(localStorage.getItem(`heroList`)))
            setHero(dataInID)
        } else {
            callHeroList({ hero, setHero, limit, offset })
        }
        // callHeroList({ hero, setHero, limit, offset })
    }, [])

    useEffect(() => {
        if ((localStorage.getItem(`heroList`) === null || Object.keys(JSON.parse(localStorage.getItem(`heroList`))).length === 0) && hero) {
            localStorage.setItem(`heroList`, JSON.stringify(hero));
        }
    }, [hero])

    return (
        <div className=' max-w-[1400px] mx-auto'>
            <NavbarWeb />
            <div className=' text-white flex justify-start '>
                <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>Character</h1>
            </div>
            <div>
                {hero.data && <CardList item={hero.data} type='characters' />}
            </div>


        </div >

    )
}

export default CharacterListpage
