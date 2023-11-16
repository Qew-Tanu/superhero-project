import React, { useContext, useEffect } from 'react'
import { CardList } from '../../Components/Cardlist/CardList';
import { ParameterContext } from '../../Components/usecontext/parametersearch';



const Search = (props) => {
    const queryParameters = new URLSearchParams(window.location.search)
    const type = queryParameters.get("searchby")
    const name = queryParameters.get("keyword")
    console.log(type);
    console.log(name);



    // console.log(props);
    // const { typesearch, keyword } = useParams()
    // console.log('typesearch', typesearch);
    // console.log('keyword', keyword);
    // const testparam = new useSearchParams(window.location.search)
    // // const type = testparam.get("searchby")
    // console.log(testparam);



    // console.log(finishSearch);

    useEffect(() => {

    }, [])








    return (
        <div className='flex flex-col max-w-[1400px] mx-auto h-[100%]' >

            <div className=' text-white flex justify-start '>
                <h1 className='p-5 text-[0.6em] sm:text-[1em] xl:text-[1.5em]'>{type}</h1>
            </div>
            <div>
                {/* {datashow.data && <CardList item={hero.data} type='characters' />} */}
            </div>



        </div >
    )
}

export default Search



// {events.data && <CardList item={events.data} type='events' />}