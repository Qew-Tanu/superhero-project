import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NavbarWeb } from "../../Components/NavBar/navbar";
import { callDetail } from "../../Service/datacall";
import ReactLoading from "react-loading";
import { Smallswiper } from "../../Components/smallswiper/smallswiper";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';




const Detail = () => {

    const queryParameters = new URLSearchParams(window.location.search)
    const type = queryParameters.get("type")
    const id = queryParameters.get("id")
    // const { id } = useParams()
    // const { type, id } = useParams()
    const information = `${type}-${id}`

    // const type = test[0]
    // const id = test[1]

    const [detail, setDetail] = useState({})
    const [comics, setComics] = useState()
    const [hero, setHero] = useState()
    const [events, setEvents] = useState()
    const [datatest, setDatatest] = useState()


    useEffect(() => {
        if (localStorage.getItem(`${information}`) !== null && Object.keys(JSON.parse(localStorage.getItem(`${information}`))).length !== 0) {
            const dataInID = (JSON.parse(localStorage.getItem(`${information}`)))
            setDatatest(dataInID)
        } else {
            callDetail({ detail, setDetail, hero, setHero, comics, setComics, events, setEvents, datatest, setDatatest, type, id })
        }
    }, [])


    useEffect(() => {
        if (datatest) {
            setDetail(datatest.detail)
            setComics(datatest.comics)
            setHero(datatest.hero)
            setEvents(datatest.events)
        }

        if ((localStorage.getItem(`${information}`) === null || Object.keys(JSON.parse(localStorage.getItem(`${information}`))).length === 0) && datatest) {
            localStorage.setItem(`${information}`, JSON.stringify(datatest));
        }
        // localStorage.setItem(`${typeid}`, JSON.stringify(datatest));

        // }

    }, [datatest])





    return (
        <div className=' max-w-[1400px] mx-auto'>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center bg-[#b4b4b4] rounded-[30px] p-5 w-[80%] gap-10">
                    {!(datatest) && (<div className="h-[300px] sm:h-[600px] flex justify-center items-center">
                        <ReactLoading type="spinningBubbles" color="#fff" height={'30%'} width={'30%'} />
                    </div>
                    )}
                    {detail.data && (<div className="flex justify-center flex-col gap-5">
                        <div className="flex justify-center">
                            <img src={`${detail.data.thumbnail.path}.${detail.data.thumbnail.extension}`} alt="" />
                        </div>
                        <div className="text-[0.6em] sm:text-[1em] xl:text-[1.5em]">
                            {detail.data.title}
                        </div>
                        <div className="text-[0.5em] sm:text-[0.9em] xl:text-[1.3em]">
                            {detail.data.description}
                        </div>
                    </div>)}

                    {(hero && hero.length > 0) && (

                        <div className="w-full">
                            <div className="flex justify-start text-[0.6em] sm:text-[1em] xl:text-[1.5em]">
                                <h1>Character in this {type}</h1>
                            </div>
                            <Smallswiper item={hero} type='characters' />
                        </div>
                    )}
                    {(comics && comics.length > 0) && (
                        <div className="w-full">
                            <div className="flex justify-start text-[0.6em] sm:text-[1em] xl:text-[1.5em]">
                                <h1>Comic in this {type}</h1>
                            </div>
                            <Smallswiper item={comics} type='comics' />
                        </div>
                    )}
                    {(events && events.length > 0) && (
                        <div className="w-full">
                            <div className="flex justify-start text-[0.6em] sm:text-[1em] xl:text-[1.5em]">
                                <h1>Event in this {type}</h1>
                            </div>
                            <Smallswiper item={events} type='events' />
                        </div>
                    )}
                </div>
            </div>

        </div >

    )
}

export default Detail

