import { getComicList } from './comic/comicListService';
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
    const test = props.limit ? await getHeroList.getHero(props.limit, props.offset = 0) : await getHeroList.getHero()
    // console.log(test);
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