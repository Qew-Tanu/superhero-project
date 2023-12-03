import React, { useEffect, useState } from 'react'
import { SwiperItem } from '../../Components/Swiper/swiper'
import { callComicList, callEventList, callHeroList } from '../../Service/datacall'
import ReactLoading from "react-loading";
import { NavbarWeb } from '../../Components/NavBar/navbar'


const Homepage = () => {
    const [events, setEvents] = useState({})
    const [comics, setComics] = useState({})
    const [hero, setHero] = useState({})

    useEffect(() => {
        // var itemTest = JSON.parse(localStorage.getItem("events"));
        // console.log(localStorage.getItem("comics") !== null);

        if (localStorage.getItem("events") !== null && Object.keys(JSON.parse(localStorage.getItem("events"))).length !== 0) {
            setEvents(JSON.parse(localStorage.getItem("events")))
            // console.log('no call data');
        } else {
            callEventList({ events, setEvents })
            // console.log('call data');
        }
        // callEventList({ events, setEvents })
        if (localStorage.getItem("comics") !== null && Object.keys(JSON.parse(localStorage.getItem("comics"))).length !== 0) {
            setComics(JSON.parse(localStorage.getItem("comics")))
            // console.log('no call data');
        } else {
            callComicList({ comics, setComics })
            // console.log('call data');
        }
        if (localStorage.getItem("hero") !== null && Object.keys(JSON.parse(localStorage.getItem("hero"))).length !== 0) {
            setHero(JSON.parse(localStorage.getItem("hero")))
            // console.log('no call data');
        } else {
            callHeroList({ hero, setHero, eventsid: 314 })
            // console.log('call data');
        }
        // callEventList({ events, setEvents })
        // callComicList({ comics, setComics })
        // callHeroList({ hero, setHero, eventsid: 314 })

    }, [])

    useEffect(() => {
        console.log('events', events);
        // console.log('hero', hero);
        // console.log('comics', comics);
        // localStorage.setItem("events", JSON.stringify(events));
        if (localStorage.getItem("events") === null || Object.keys(JSON.parse(localStorage.getItem("events"))).length === 0) {
            localStorage.setItem("events", JSON.stringify(events));
        }
        if (localStorage.getItem("comics") === null || Object.keys(JSON.parse(localStorage.getItem("comics"))).length === 0) {
            localStorage.setItem("comics", JSON.stringify(comics));
        }
        if (localStorage.getItem("hero") === null || Object.keys(JSON.parse(localStorage.getItem("hero"))).length === 0) {
            localStorage.setItem("hero", JSON.stringify(hero));
        }
    }, [events, comics, hero])


    return (
        <div className=' max-w-[1400px] mx-auto'>
            <div className=' text-white flex justify-start '>
                <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>Events</h1>
            </div>
            {!(events.data) && (<div className="h-[300px] sm:h-[600px] flex justify-center items-center">
                <ReactLoading type="spinningBubbles" color="#fff" height={'30%'} width={'30%'} />
            </div>
            )}
            {events.data && <SwiperItem item={events.data} type='events' />}
            <div className=' text-white flex justify-start '>
                <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>Character</h1>
            </div>
            {!(hero.data) && (<div className="h-[300px] sm:h-[600px] flex justify-center items-center">
                <ReactLoading type="spinningBubbles" color="#fff" height={'30%'} width={'30%'} />
            </div>
            )}
            {hero.data && <SwiperItem item={hero.data} type='characters' />}
            <div className=' text-white flex justify-start '>
                <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>Comic</h1>
            </div>
            {!(comics.data) && (<div className="h-[300px] sm:h-[600px] flex justify-center items-center">
                <ReactLoading type="spinningBubbles" color="#fff" height={'30%'} width={'30%'} />
            </div>
            )}
            {comics.data && <SwiperItem item={comics.data} type='comics' />}


        </div >

    )
}

export default Homepage


