import React, { useEffect, useState } from 'react'

import { NavbarWeb } from '../../Components/NavBar/navbar'
import { CardList } from '../../Components/Cardlist/CardList'
import { callComicList, callComicListAdd } from '../../Service/datacall'

const ComicsListpage = () => {
    const [comics, setComics] = useState({})
    const [offset, setOffset] = useState(0)
    const limit = 20
    // console.log(events.data);

    const [scrollTop, setScrollTop] = useState(0);
    const [adddata, setAdddata] = useState(false)
    const [dataAdd, setDataadd] = useState({})

    useEffect(() => {
        if (adddata === true && offset !== 0) {
            // check localstorage data
            console.log('data to add condition', JSON.parse(localStorage.getItem(`comicsList`)).data.length > (offset + limit))
            if (JSON.parse(localStorage.getItem(`comicsList`)).data.length > (offset + limit)) {
                var adding = (JSON.parse(localStorage.getItem(`comicsList`)))
                adding.data = adding.data.filter((item, index) => index < (offset + limit) && index >= offset)
                // console.log(adding);
                setDataadd(adding)
                // console.log(dataAdd);
            } else {
                callComicListAdd({ dataAdd, setDataadd, limit, offset })
            }
        }
    }, [adddata])

    useEffect(() => {

        if (((window.scrollY + window.innerHeight) > (window.document.documentElement.scrollHeight - 100)) && comics.data) {
            if (adddata === false) {
                setAdddata(true)
                setOffset((prev) => prev + 20)
            }

        }


    }, [window.scrollY])



    useEffect(() => {
        if (dataAdd.data) {
            setComics((prev) => ({ ...prev, ['data']: [...prev.data, ...dataAdd.data] }))
            setAdddata(false)
            setDataadd({})
        }
    }, [dataAdd])

    useEffect(() => {
        if (localStorage.getItem(`comicsList`) !== null && Object.keys(JSON.parse(localStorage.getItem(`comicsList`))).length !== 0) {
            var datainlocal = (JSON.parse(localStorage.getItem(`comicsList`)))
            datainlocal.data = datainlocal.data.filter((item, index) => index < limit)
            console.log('data in local', datainlocal);
            const dataInID = datainlocal
            setComics(dataInID)
        } else {
            callComicList({ comics, setComics, limit, offset })
        }

        const handleScroll = event => {
            // console.log(window);
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // callComicList({ comics, setComics, limit, offset })
    }, [])

    useEffect(() => {
        if ((localStorage.getItem(`comicsList`) === null || Object.keys(JSON.parse(localStorage.getItem(`comicsList`))).length === 0) && comics) {
            localStorage.setItem(`comicsList`, JSON.stringify(comics));
        }
        // console.log((localStorage.getItem(`comicsList`) !== null || Object.keys(JSON.parse(localStorage.getItem(`comicsList`))).length > 0) && comics.data);
        if ((localStorage.getItem(`comicsList`) !== null || Object.keys(JSON.parse(localStorage.getItem(`comicsList`))).length > 0) && comics.data) {
            if (comics.data.length > JSON.parse(localStorage.getItem(`comicsList`)).data.length && comics.data.length < 100) {
                localStorage.setItem(`comicsList`, JSON.stringify(comics));
            }
        }


    }, [comics])

    return (
        <div className=' max-w-[1400px] mx-auto'>
            <div className=' text-white flex justify-start '>
                <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>Comic</h1>
            </div>
            <div>
                {comics.data && <CardList item={comics.data} type='comics' />}
            </div>


        </div >

    )
}

export default ComicsListpage