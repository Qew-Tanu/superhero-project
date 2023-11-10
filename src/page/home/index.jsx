import React, { useEffect, useState } from 'react'
import { getComicList } from '../../Service/comic/comicListService'
import { NavbarWeb } from '../../Component/Navbar/navbar'
import { SwiperItem } from '../../Component/Swiper/swiper'
import { getEventList } from '../../Service/events/eventListService'
import { getHeroList } from '../../Service/hero/heroListService'
import { callComicList, callEventList, callHeroList } from '../../Service/datacall'


const Homepage = () => {
    const [events, setEvents] = useState({})
    const [comics, setComics] = useState({})
    const [hero, setHero] = useState({})

    useEffect(() => {
        callEventList({ events, setEvents })
        callComicList({ comics, setComics })
        callHeroList({ hero, setHero })

    }, [])

    useEffect(() => {
        // console.log(events);
    }, [events])


    return (
        <div className=' max-w-[1400px] mx-auto'>
            <NavbarWeb />
            <div className=' text-white flex justify-start '>
                <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>Events</h1>
            </div>
            {events.data && <SwiperItem item={events.data} type='events' />}
            <div className=' text-white flex justify-start '>
                <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>Character</h1>
            </div>
            {hero.data && <SwiperItem item={hero.data} type='characters' />}
            <div className=' text-white flex justify-start '>
                <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>Comic</h1>
            </div>
            {comics.data && <SwiperItem item={comics.data} type='comics' />}


        </div >

    )
}

export default Homepage


