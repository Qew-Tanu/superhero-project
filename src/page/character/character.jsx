import React, { useEffect, useState } from 'react'

import { NavbarWeb } from '../../Components/NavBar/navbar'
import { CardList } from '../../Components/Cardlist/CardList'
import { callHeroList, callHeroListAdd } from '../../Service/datacall'

const CharacterListpage = () => {
    const [hero, setHero] = useState({})
    const limit = 20
    const [offset, setOffset] = useState(0)

    const [scrollTop, setScrollTop] = useState(0);
    const [adddata, setAdddata] = useState(false)
    const [dataAdd, setDataadd] = useState({})

    useEffect(() => {
        if (adddata === true && offset !== 0) {
            // check localstorage data
            if (JSON.parse(localStorage.getItem(`heroList`)).data.length > (offset + limit)) {
                var adding = (JSON.parse(localStorage.getItem(`heroList`)))
                adding.data = adding.data.filter((item, index) => index < (offset + limit) && index >= offset)
                setDataadd(adding)
            } else {
                callHeroListAdd({ dataAdd, setDataadd, limit, offset })
            }
        }
    }, [adddata])

    useEffect(() => {
        if (dataAdd.data) {
            setHero((prev) => ({ ...prev, ['data']: [...prev.data, ...dataAdd.data] }))
            setAdddata(false)
            setDataadd({})
        }
    }, [dataAdd])

    useEffect(() => {
        if (((window.scrollY + window.innerHeight) > (window.document.documentElement.scrollHeight - 100)) && hero.data) {
            if (adddata === false) {
                setAdddata(true)
                setOffset((prev) => prev + 20)
            }
        }


    })


    // useEffect(() => {
    //     callHeroList({ hero, setHero, limit, offset })
    // }, [])

    useEffect(() => {
        if (localStorage.getItem(`heroList`) !== null && Object.keys(JSON.parse(localStorage.getItem(`heroList`))).length !== 0) {
            var datainlocal = (JSON.parse(localStorage.getItem(`heroList`)))
            datainlocal.data = datainlocal.data.filter((item, index) => index < limit)
            const dataInID = datainlocal
            setHero(dataInID)
        } else {
            callHeroList({ hero, setHero, limit, offset })
        }

        const handleScroll = event => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };



        // if (localStorage.getItem(`heroList`) !== null && Object.keys(JSON.parse(localStorage.getItem(`heroList`))).length !== 0) {
        //     const dataInID = (JSON.parse(localStorage.getItem(`heroList`)))
        //     setHero(dataInID)
        // } else {
        //     callHeroList({ hero, setHero, limit, offset })
        // }


        // callHeroList({ hero, setHero, limit, offset })
    }, [])

    useEffect(() => {
        if ((localStorage.getItem(`heroList`) === null || Object.keys(JSON.parse(localStorage.getItem(`heroList`))).length === 0) && hero) {
            localStorage.setItem(`heroList`, JSON.stringify(hero));
        }
        if ((localStorage.getItem(`heroList`) !== null || Object.keys(JSON.parse(localStorage.getItem(`heroList`))).length > 0) && hero.data) {
            if (hero.data.length > JSON.parse(localStorage.getItem(`heroList`)).data.length && hero.data.length < 100) {
                localStorage.setItem(`heroList`, JSON.stringify(hero));
            }
        }



        // if ((localStorage.getItem(`heroList`) === null || Object.keys(JSON.parse(localStorage.getItem(`heroList`))).length === 0) && hero) {
        //     localStorage.setItem(`heroList`, JSON.stringify(hero));
        // }
    }, [hero])

    return (
        <div className=' max-w-[1400px] mx-auto'>
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
