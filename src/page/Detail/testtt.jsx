// {(hero && hero.length > 0) && (
// <div className='h-[300px] lg:h-[400px]'>
//     <div className='h-[100%] p-[10px]'>
//         <Swiper
//             width='200'
//             breakpoints={{
//                 1024: {
//                     width: '300',
//                 },
//             }}
//             spaceBetween='10'
//             freeMode={true}
//             pagination={{
//                 clickable: true,
//             }}

//             modules={[FreeMode, Pagination]}
//             className="mySwiper h-full"
//         >
//             {hero.map((item, index) => {
//                 // console.log(item);
//                 // const text = `${props.type}-${item.id}`
//                 return (
//                     <SwiperSlide key={index} className=' h-[calc(100%-30px)] bg-[#7a7a7acc] rounded-[30px]'>
//                         <div className='flex flex-col justify-between h-full p-1 sm:p-3 text-[0.6rem] sm:text-[0.75rem] lg:text-[1rem] text-white '>
//                             <div className='flex justify-center overflow-hidden h-[80%] rounded-[30px]'>
//                                 {/* <img className=' w-[auto] max-w-none ' src={item.thumbnail.path + "." + item.thumbnail.extension} alt="" /> */}
//                             </div>
//                             <div className=' overflow-hidden'>{item.title || item.name}</div>
//                         </div>

//                     </SwiperSlide>

//                 )
//             })}
//         </Swiper>
//     </div>

// </div >
//                             // <div>
//                             //     {/* <Smallswiper item={hero} type='characters' /> */}
//                             // </div>
//                         )}








// import { getComicList } from './comic/comicListService';
// import { getDetail } from './events/eventDetailservice';
// import { getEventList } from './events/eventListService'
// import { getHeroList } from './hero/heroListService';



// export const callEventList = async (props) => {
//     // console.log(props);
//     const test = ((props.limit)) ? await getEventList.getEvent(props.limit, props.offset = 0) : await getEventList.getEvent()

//     props.setEvents({
//         data: [],
//         loading: true,
//         error: null
//     })
//     if (test.status === 200) {
//         // console.log(test);
//         props.setEvents({
//             data: test.data.data.results,
//             loading: true,
//             error: null
//         })
//         // return props.event
//     } else {
//         props.setEvents({
//             data: [],
//             loading: true,
//             error: test
//         })
//         // return props.event
//     }

// }


// export const callComicList = async (props) => {
//     const test = props.limit ? await getComicList.getComic(props.limit, props.offset = 0) : await getComicList.getComic()
//     props.setComics({
//         data: [],
//         loading: true,
//         error: null
//     })
//     if (test.status === 200) {
//         // console.log(test);
//         props.setComics({
//             data: test.data.data.results,
//             loading: true,
//             error: null
//         })
//     } else {
//         props.setComics({
//             data: [],
//             loading: true,
//             error: test
//         })
//     }

// }

// export const callHeroList = async (props) => {
//     // console.log("props", props);
//     // console.log("props222", props.eventsid);

//     // console.log((props.limit || props.eventsid));
//     const test = (props.eventsid) ? await getHeroList.getHero(props.limit = 20, props.offset = 0, props.eventsid) :
//         (props.limit) ? await getHeroList.getHero(props.limit, props.offset = 0, props.eventsid = null) : await getHeroList.getHero()
//     // console.log("test", test);
//     props.setHero({
//         data: [],
//         loading: true,
//         error: null
//     })
//     if (test.status === 200) {
//         // console.log(test);
//         props.setHero({
//             data: test.data.data.results,
//             loading: true,
//             error: null
//         })
//     } else {
//         props.setHero({
//             data: [],
//             loading: true,
//             error: test
//         })
//     }

// }

// export const callDetail = async (props) => {
//     console.log(props);
//     const test = await getDetail.getDetail(props.type, props.id)
//     // console.log(test);
//     props.setDetail({
//         data: null,
//         loading: true,
//         error: null
//     })
//     if (test.status === 200) {
//         props.setDetail({
//             data: test.data.data.results[0],
//             loading: true,
//             error: null
//         })
//     } else {
//         props.setDetail({
//             data: null,
//             loading: true,
//             error: test
//         })
//     }
//     //call character if type = event of comic
//     if (test.data && props.type !== 'characters') {
//         const characters = test.data.data.results[0].characters.items.length > 0 ? test.data.data.results[0].characters.items : []
//         const charactersList = characters.map((item) => {
//             const characterid = item.resourceURI.split("/")
//             return ({
//                 'id': characterid[characterid.length - 1],
//                 'type': 'characters'
//             })
//         })
//         var characterListDetail = []
//         for (const item of charactersList) {
//             const type = item.type
//             const id = item.id
//             const characterdetail = await getDetail.getDetail(type, id)
//             if (characterdetail.status === 200) {
//                 characterListDetail = [...characterListDetail, characterdetail]
//             }
//         }
//         const test2 = characterListDetail = characterListDetail.map((item) => {
//             return item.data.data.results[0]
//         })
//         // console.log('test2', test2);
//         props.setHero(test2)
//     }
//     if (test.data && props.type !== 'comics') {
//         const comic = test.data.data.results[0].comics.items.length > 0 ? test.data.data.results[0].comics.items : []
//         const comicList = comic.map((item) => {
//             const comicid = item.resourceURI.split("/")
//             return ({
//                 'id': comicid[comicid.length - 1],
//                 'type': 'comics'
//             })
//         })
//         var comicListDetail = []
//         for (const item of comicList) {
//             const type = item.type
//             const id = item.id
//             const comicdetail = await getDetail.getDetail(type, id)
//             if (comicdetail.status === 200) {
//                 comicListDetail = [...comicListDetail, comicdetail]
//             }
//         }
//         props.setComics(comicListDetail)
//     }
//     if (test.data && props.type !== 'events') {
//         const event = test.data.data.results[0].events.items.length > 0 ? test.data.data.results[0].events.items : []
//         const eventList = event.map((item) => {
//             const eventid = item.resourceURI.split("/")
//             return ({
//                 'id': eventid[eventid.length - 1],
//                 'type': 'events'
//             })
//         })
//         var eventListDetail = []
//         for (const item of eventList) {
//             const type = item.type
//             const id = item.id
//             const eventdetail = await getDetail.getDetail(type, id)
//             if (eventdetail.status === 200) {
//                 eventListDetail = [...eventListDetail, eventdetail]
//             }
//         }
//         props.setEvents(eventListDetail)
//     }

// }

