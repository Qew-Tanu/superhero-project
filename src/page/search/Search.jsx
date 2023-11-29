import React, { useContext, useEffect, useState } from 'react'
import { CardList } from '../../Components/Cardlist/CardList';
import InfiniteScroll from "react-infinite-scroll-component";
import { callSearchData } from '../../Service/datacall';



const Search = (props) => {
    const queryParameters = new URLSearchParams(window.location.search)
    const type = queryParameters.get("searchby")
    const name = queryParameters.get("keyword")

    const [dataSearch, setDataSearch] = useState({})
    const limit = 20
    // var offset = 0
    const [offset, setOffset] = useState(0)
    const [dataAdd, setDataAdd] = useState({})
    const [loadmore, setLoadmore] = useState(true)

    const fetchMoreData = () => {
        setOffset((prev) => prev + limit)
        callSearchData({ dataAdd, setDataAdd, limit, offset: offset + 20, type, name })
    };


    useEffect(() => {
        // check dataAdd
        callSearchData({ dataAdd, setDataAdd, limit, offset, type, name })
    }, [])

    useEffect(() => {
        if (dataAdd.data) {
            if (dataSearch.data) {
                if ((dataSearch.data[0].id !== dataAdd.data[0].id)) {
                    setDataSearch((prev) => ({ ...prev, ['data']: [...prev.data, ...dataAdd.data] }))
                }

            } else {
                setDataSearch(dataAdd)
            }
        }
    }, [dataAdd])


    useEffect(() => {
        if (dataSearch.data) {
            if (dataSearch.data.length === dataSearch.total) {
                setLoadmore(false)
            }
        }

    }, [dataSearch])


    return (
        <div className='flex flex-col max-w-[1400px] mx-auto h-[100%]' >
            {dataSearch.data &&
                <InfiniteScroll
                    dataLength={dataSearch.data.length}
                    next={fetchMoreData}
                    hasMore={loadmore}
                    loader={<h4 className='text-white'>Loading...</h4>}
                    scrollThreshold="1000px"
                >

                    <div className=' text-white flex justify-start '>
                        <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>search {type} that include word : {name}</h1>
                    </div>
                    <div>
                        {dataSearch.data && <CardList item={dataSearch?.data} type={type} />}
                    </div>
                </InfiniteScroll>}
            {!(dataSearch.data) &&
                <div>Oop!!, We don't have this name</div>
            }
        </div >
    )
}

export default Search



// {events.data && <CardList item={events.data} type='events' />}