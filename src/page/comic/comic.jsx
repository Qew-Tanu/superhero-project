import React, { useEffect, useState } from 'react'
import { CardList } from '../../Components/Cardlist/CardList'
import { callComicList, callComicListAdd } from '../../Service/datacall'

const ComicsListpage = () => {
    const [comics, setComics] = useState({})
    const [offset, setOffset] = useState(0)
    const [total, setTotal] = useState(null)
    const limit = 20

    const [scrollTop, setScrollTop] = useState(0);
    const [adddata, setAdddata] = useState(false)
    const [dataAdd, setDataAdd] = useState({})

    useEffect(() => {
        if (adddata === true && offset !== 0) {
            if (JSON.parse(localStorage.getItem(`comicsList`)).data.length > (offset + limit)) {
                var adding = (JSON.parse(localStorage.getItem(`comicsList`)))
                adding.data = adding.data.filter((item, index) => index < (offset + limit) && index >= offset)
                setDataAdd(adding)
            } else {
                callComicListAdd({ dataAdd, setDataAdd, limit, offset })
            }
        }
    }, [adddata])

    useEffect(() => {
        if (((window.scrollY + window.innerHeight) > (window.document.documentElement.scrollHeight - 100)) && comics.data) {
            if (adddata === false && (comics.data.length < total)) {
                setAdddata(true)
                setOffset((prev) => prev + 20)
            }
        }
    }, [scrollTop, comics.data, total])

    useEffect(() => {
        if (dataAdd.data) {
            setComics((prev) => ({ ...prev, ['data']: [...prev.data, ...dataAdd.data] }))
            setAdddata(false)
            setDataAdd({})
        }
    }, [dataAdd])

    useEffect(() => {
        if (localStorage.getItem(`comicsList`) !== null && Object.keys(JSON.parse(localStorage.getItem(`comicsList`))).length !== 0) {
            var datainlocal = (JSON.parse(localStorage.getItem(`comicsList`)))
            datainlocal.data = datainlocal.data.filter((item, index) => index < limit)
            const dataInID = datainlocal
            setComics(dataInID)
        } else {
            callComicList({ comics, setComics, limit, offset })
        }

        const handleScroll = event => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])

    useEffect(() => {
        if ((localStorage.getItem(`comicsList`) === null || Object.keys(JSON.parse(localStorage.getItem(`comicsList`))).length === 0) && comics) {
            localStorage.setItem(`comicsList`, JSON.stringify(comics));
        }
        if ((localStorage.getItem(`comicsList`) !== null || Object.keys(JSON.parse(localStorage.getItem(`comicsList`))).length > 0) && comics.data) {
            if (comics.data.length > JSON.parse(localStorage.getItem(`comicsList`)).data.length && comics.data.length < 100) {
                localStorage.setItem(`comicsList`, JSON.stringify(comics));
            }
        }
        setTotal(comics.total)

    }, [comics])





    return (
        <div className=' max-w-[1400px] mx-auto'>
            <div className=' text-white flex justify-start '>
                <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>Comic</h1>
            </div>
            <div>
                {comics.data && <CardList item={comics.data.filter((obj, index) => comics.data.findIndex((item) => item.id === obj.id) === index)} type='comics' />}
            </div>


        </div >

    )
}

export default ComicsListpage