import React, { useEffect, useState } from 'react'
import { CardList } from '../../Components/Cardlist/CardList'
import { callEventList, callEventListadd } from '../../Service/datacall'


const EventsListpage = () => {




  // ##############################################################################################################################################################################
  const [events, setEvents] = useState({})
  const [offset, setOffset] = useState(0)
  const [total, setTotal] = useState()
  const limit = 20

  const [scrollTop, setScrollTop] = useState(0);
  const [adddata, setAdddata] = useState(false)
  const [dataAdd, setDataAdd] = useState({})

  useEffect(() => {
    if (adddata === true && offset !== 0) {
      // check localstorage data
      if (JSON.parse(localStorage.getItem(`eventList`)).data.length > (offset + limit)) {
        var adding = (JSON.parse(localStorage.getItem(`eventList`)))
        adding.data = adding.data.filter((item, index) => {
          return (index < (offset + limit) && index >= offset)
        })
        setDataAdd(adding)
      } else {
        callEventListadd({ dataAdd, setDataAdd, limit, offset })
      }
    }
  }, [adddata])

  useEffect(() => {
    if (((window.scrollY + window.innerHeight) >= (window.document.documentElement.scrollHeight - 100)) && events.data) {
      if (adddata === false && (events.data.length < total)) {
        setAdddata(true)
        setOffset((prev) => prev + 20)
      }
    }
  }, [scrollTop, events.data, total])



  useEffect(() => {
    if (dataAdd.data) {
      setEvents((prev) => ({ ...prev, ['data']: [...prev.data, ...dataAdd.data] }))
      setAdddata(false)
      setDataAdd({})
    }
  }, [dataAdd])

  useEffect(() => {
    if (localStorage.getItem(`eventList`) !== null && Object.keys(JSON.parse(localStorage.getItem(`eventList`))).length !== 0) {
      var datainlocal = (JSON.parse(localStorage.getItem(`eventList`)))
      datainlocal.data = datainlocal.data.filter((item, index) => index < limit)
      const dataInID = datainlocal
      setEvents(dataInID)
    } else {
      callEventList({ events, setEvents, limit, offset })
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
    if ((localStorage.getItem(`eventList`) === null || Object.keys(JSON.parse(localStorage.getItem(`eventList`))).length === 0) && events) {
      localStorage.setItem(`eventList`, JSON.stringify(events));
    }
    if ((localStorage.getItem(`eventList`) !== null || Object.keys(JSON.parse(localStorage.getItem(`eventList`))).length > 0) && events.data) {
      if (events.data.length > JSON.parse(localStorage.getItem(`eventList`)).data.length && events.data.length < 100) {
        localStorage.setItem(`eventList`, JSON.stringify(events));
      }
    }

    setTotal(events.total)
  }, [events])

  // ####################################################################################################################################################################################






  return (
    <div id='checkscroll' className='flex flex-col max-w-[1400px] mx-auto' >
      <div className=' text-white flex justify-start '>
        <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>Events</h1>
      </div>
      <div className='flex justify-center'>
        {events.data && <CardList item={events.data} type='events' />}
      </div>
    </div >

  )
}

export default EventsListpage
