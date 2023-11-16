import axios from 'axios'
import { privatekey, publickey } from '../../utility/token';
import md5 from 'md5';


export const getHeroList = {
    getHero: async (limit = 20, offset = 0, eventsid) => {
        var ts = new Date().getTime();
        var stringToHash = ts + privatekey + publickey;
        var hash = md5(stringToHash);
        // console.log("eventsid", eventsid);
        const parameter = (eventsid === null) ? {
            params: {
                "ts": ts,
                "apikey": publickey,
                "hash": hash,
                "limit": limit,
                "offset": offset,
                // "startYear": 2021
                "orderBy": "-modified",
                // "modifiedSince": date
            }
        } : {
            params: {
                "ts": ts,
                "apikey": publickey,
                "hash": hash,
                // "limit": limit,
                // "offset": offset,
                "events": eventsid,
                // "startYear": 2021
                // "orderBy": "-modified",
                // "modifiedSince": date
            }
        }
        // console.log(test);
        var url = "http://gateway.marvel.com/v1/public/characters";
        try {
            const response = await axios.get(url, parameter)
            // console.log(response);
            return (response)
        } catch (error) {
            return (error)
        }
    },
}
