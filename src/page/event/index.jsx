import React, { useEffect, useState } from 'react'

import { NavbarWeb } from '../../Component/Navbar/navbar'
import { CardList } from '../../Component/Cardlist/CardList'
import { callEventList } from '../../Service/datacall'

const EventsListpage = () => {

  const [events, setEvents] = useState({})
  const limit = 20
  const offset = 0

  useEffect(() => {
    if (localStorage.getItem(`eventList`) !== null && Object.keys(JSON.parse(localStorage.getItem(`eventList`))).length !== 0) {
      const dataInID = (JSON.parse(localStorage.getItem(`eventList`)))
      setEvents(dataInID)
    } else {
      callEventList({ events, setEvents, limit, offset })
    }

    // callEventList({ events, setEvents, limit, offset })
  }, [])

  useEffect(() => {
    if ((localStorage.getItem(`eventList`) === null || Object.keys(JSON.parse(localStorage.getItem(`eventList`))).length === 0) && events) {
      localStorage.setItem(`eventList`, JSON.stringify(events));
    }
  }, [events])

  return (
    <div className='flex flex-col max-w-[1400px] mx-auto'>
      <NavbarWeb />
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
