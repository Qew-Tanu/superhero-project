import { getComicList } from './comic/comicListService';
import { getDetail } from './Detailservice';
import { getEventList } from './events/eventListService'
import { getHeroList } from './hero/heroListService';
import { SearchListService } from './search/SearchListService';




export const callEventList = async (props) => {
    const test = ((props.limit)) ? await getEventList.getEvent(props.limit, props.offset = 0) : await getEventList.getEvent()

    props.setEvents({
        data: [],
        loading: true,
        error: null
    })
    if (test.status === 200) {
        props.setEvents({
            data: test.data.data.results,
            loading: true,
            error: null
        })
        // return props.event
    } else {
        props.setEvents({
            data: [],
            loading: true,
            error: test
        })
        // return props.event
    }

}


export const callComicList = async (props) => {
    const test = props.limit ? await getComicList.getComic(props.limit, props.offset = 0) : await getComicList.getComic()
    props.setComics({
        data: [],
        loading: true,
        error: null
    })
    if (test.status === 200) {
        props.setComics({
            data: test.data.data.results,
            loading: true,
            error: null
        })
    } else {
        props.setComics({
            data: [],
            loading: true,
            error: test
        })
    }

}

export const callHeroList = async (props) => {

    const test = (props.eventsid) ? await getHeroList.getHero(props.limit = 20, props.offset = 0, props.eventsid) :
        (props.limit) ? await getHeroList.getHero(props.limit, props.offset = 0, props.eventsid = null) : await getHeroList.getHero()
    props.setHero({
        data: [],
        loading: true,
        error: null
    })
    if (test.status === 200) {
        props.setHero({
            data: test.data.data.results,
            loading: true,
            error: null
        })
    } else {
        props.setHero({
            data: [],
            loading: true,
            error: test
        })
    }

}

export const callDetail = async (props) => {
    const test = await getDetail.getDetail(props.type, props.id)
    var detail = ({
        data: null,
        loading: true,
        error: null
    })
    if (test.status === 200) {
        detail = ({
            data: test.data.data.results[0],
            loading: true,
            error: null
        }
        )
    } else {
        detail = ({
            data: null,
            loading: true,
            error: test
        }
        )
    }
    //call character if type = event of comic
    if (test.data && props.type !== 'characters') {
        const characters = test.data.data.results[0].characters.items.length > 0 ? test.data.data.results[0].characters.items : []
        const charactersList = characters.map((item) => {
            const characterid = item.resourceURI.split("/")
            return ({
                'id': characterid[characterid.length - 1],
                'type': 'characters'
            })
        })
        var characterListDetail = []
        for (const item of charactersList) {
            const type = item.type
            const id = item.id
            const characterdetail = await getDetail.getDetail(type, id)
            if (characterdetail.status === 200) {
                characterListDetail = [...characterListDetail, characterdetail]
            }
        }
        var test2 = characterListDetail.map((item) => {
            return item.data.data.results[0]
        })
        // props.setDatatest({ ...props.datatest, 'characters': test2 })
    }
    if (test.data && props.type !== 'comics') {
        const comic = test.data.data.results[0].comics.items.length > 0 ? test.data.data.results[0].comics.items : []
        const comicList = comic.map((item) => {
            const comicid = item.resourceURI.split("/")
            return ({
                'id': comicid[comicid.length - 1],
                'type': 'comics'
            })
        })
        var comicListDetail = []
        for (const item of comicList) {
            const type = item.type
            const id = item.id
            const comicdetail = await getDetail.getDetail(type, id)
            if (comicdetail.status === 200) {
                comicListDetail = [...comicListDetail, comicdetail]
            }
        }
        comicListDetail = comicListDetail.map((item) => {
            return item.data.data.results[0]
        })
        // props.setDatatest({ ...props.datatest, 'comics': comicListDetail })
        // props.setComics(comicListDetail)
    }
    if (test.data && props.type !== 'events') {
        const event = test.data.data.results[0].events.items.length > 0 ? test.data.data.results[0].events.items : []
        const eventList = event.map((item) => {
            const eventid = item.resourceURI.split("/")
            return ({
                'id': eventid[eventid.length - 1],
                'type': 'events'
            })
        })
        var eventListDetail = []
        for (const item of eventList) {
            const type = item.type
            const id = item.id
            const eventdetail = await getDetail.getDetail(type, id)
            if (eventdetail.status === 200) {
                eventListDetail = [...eventListDetail, eventdetail]
            }
        }
        eventListDetail = eventListDetail.map((item) => {
            return item.data.data.results[0]
        })
        // props.setDatatest({ ...props.datatest, 'events': eventListDetail })
        // props.setEvents(eventListDetail)
    }
    props.setDatatest({
        'detail': detail,
        'comics': comicListDetail,
        'hero': test2,
        'events': eventListDetail,

    })
    props.setDatatest({
        'detail': detail,
        'comics': comicListDetail,
        'hero': test2,
        'events': eventListDetail,

    })

}


export const callEventListadd = async (props) => {
    const test = ((props.limit)) ? await getEventList.getEvent(props.limit, props.offset) : await getEventList.getEvent()

    props.setDataAdd({
        data: [],
        loading: true,
        error: null
    })
    if (test.status === 200) {
        props.setDataAdd({
            data: test.data.data.results,
            loading: true,
            error: null
        })
        // return props.event
    } else {
        props.setDataAdd({
            data: [],
            loading: true,
            error: test
        })
        // return props.event
    }

}

export const callComicListAdd = async (props) => {
    const test = props.limit ? await getComicList.getComic(props.limit, props.offset) : await getComicList.getComic()
    props.setDataAdd({
        data: [],
        loading: true,
        error: null
    })
    if (test.status === 200) {
        props.setDataAdd({
            data: test.data.data.results,
            loading: true,
            error: null
        })
    } else {
        props.setDataAdd({
            data: [],
            loading: true,
            error: test
        })
    }

}

export const callHeroListAdd = async (props) => {

    const test = (props.eventsid) ? await getHeroList.getHero(props.limit, props.offset, props.eventsid) :
        (props.limit) ? await getHeroList.getHero(props.limit, props.offset, props.eventsid = null) : await getHeroList.getHero()
    props.setDataAdd({
        data: [],
        loading: true,
        error: null
    })
    if (test.status === 200) {
        props.setDataAdd({
            data: test.data.data.results,
            loading: true,
            error: null
        })
    } else {
        props.setDataAdd({
            data: [],
            loading: true,
            error: test
        })
    }

}


export const callSearchData = async (props) => {
    let test
    if (props.type === "events") {
        test = await SearchListService.getEvent(props.limit, props.offset, props.name)
    } else if ((props.type === "comics")) {
        test = await SearchListService.getComic(props.limit, props.offset, props.name)
    } else {
        test = await SearchListService.getHero(props.limit, props.offset, props.name)
    }
    // const test = (props.type === "events") ? await SearchListService.getEvent(props.limit, props.offset, props.name) : (props.type === "comics") ? await SearchListService.getComic(props.limit, props.offset, props.name) : await SearchListService.getHero(props.limit, props.offset, props.name)

    props.setDataAdd({
        data: [],
        total: 0,
        loading: true,
        error: null
    })
    if (test.status === 200) {
        props.setDataAdd({
            data: test.data.data.results,
            total: test.data.data.total,
            loading: true,
            error: null
        })
    } else {
        props.setDataAdd({
            data: [],
            total: 0,
            loading: true,
            error: test
        })
    }

}