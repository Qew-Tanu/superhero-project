import React, { useEffect, useState } from 'react'

import { NavbarWeb } from '../../Component/Navbar/navbar'
import { CardList } from '../../Component/Cardlist/CardList'
import { callEventList } from '../../Service/datacall'

const EventsListpage = () => {

  const [events, setEvents] = useState({})
  const limit = 100
  const offset = 0
  // console.log(events.data);


  useEffect(() => {
    callEventList({ events, setEvents, limit, offset })
  }, [])

  return (
    <div className=' max-w-[1400px] mx-auto'>
      <NavbarWeb />
      <div className=' text-white flex justify-start '>
        <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>Events</h1>
      </div>
      <div>
        {events.data && <CardList item={events.data} />}
      </div>
    </div >

  )
}

export default EventsListpage
