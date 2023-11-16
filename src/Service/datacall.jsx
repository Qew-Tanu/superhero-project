import { getComicList } from './comic/comicListService';
import { getDetail } from './events/eventDetailservice';
import { getEventList } from './events/eventListService'
import { getHeroList } from './hero/heroListService';



export const callEventList = async (props) => {
    // console.log(props);
    const test = ((props.limit)) ? await getEventList.getEvent(props.limit, props.offset = 0) : await getEventList.getEvent()

    props.setEvents({
        data: [],
        loading: true,
        error: null
    })
    if (test.status === 200) {
        // console.log(test);
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
        // console.log(test);
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
    // console.log("props", props);
    // console.log("props222", props.eventsid);

    // console.log((props.limit || props.eventsid));
    const test = (props.eventsid) ? await getHeroList.getHero(props.limit = 20, props.offset = 0, props.eventsid) :
        (props.limit) ? await getHeroList.getHero(props.limit, props.offset = 0, props.eventsid = null) : await getHeroList.getHero()
    // console.log("test", test);
    props.setHero({
        data: [],
        loading: true,
        error: null
    })
    if (test.status === 200) {
        // console.log(test);
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
    console.log(props);
    const test = await getDetail.getDetail(props.type, props.id)
    // console.log(test);
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
    // console.log(datatest);
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
        // console.log('test2', test2);
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
    // console.log(props);
    const test = ((props.limit)) ? await getEventList.getEvent(props.limit, props.offset) : await getEventList.getEvent()

    props.setDataadd({
        data: [],
        loading: true,
        error: null
    })
    if (test.status === 200) {
        // console.log(test);
        props.setDataadd({
            data: test.data.data.results,
            loading: true,
            error: null
        })
        // return props.event
    } else {
        props.setDataadd({
            data: [],
            loading: true,
            error: test
        })
        // return props.event
    }

}

export const callComicListAdd = async (props) => {
    const test = props.limit ? await getComicList.getComic(props.limit, props.offset) : await getComicList.getComic()
    props.setDataadd({
        data: [],
        loading: true,
        error: null
    })
    if (test.status === 200) {
        // console.log(test);
        props.setDataadd({
            data: test.data.data.results,
            loading: true,
            error: null
        })
    } else {
        props.setDataadd({
            data: [],
            loading: true,
            error: test
        })
    }

}

export const callHeroListAdd = async (props) => {
    // console.log("props", props);
    // console.log("props222", props.eventsid);

    // console.log((props.limit || props.eventsid));
    const test = (props.eventsid) ? await getHeroList.getHero(props.limit, props.offset, props.eventsid) :
        (props.limit) ? await getHeroList.getHero(props.limit, props.offset, props.eventsid = null) : await getHeroList.getHero()
    // console.log("test", test);
    props.setDataadd({
        data: [],
        loading: true,
        error: null
    })
    if (test.status === 200) {
        // console.log(test);
        props.setDataadd({
            data: test.data.data.results,
            loading: true,
            error: null
        })
    } else {
        props.setDataadd({
            data: [],
            loading: true,
            error: test
        })
    }

}


export const callSearchData = async (props) => {


}