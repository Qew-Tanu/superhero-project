import axios from 'axios'
import { privatekey, publickey } from '../../utility/token';
import md5 from 'md5';



export const SearchListService = {
    getEvent: async (limit = 20, offset = 0, name) => {
        var ts = new Date().getTime();
        var stringToHash = ts + privatekey + publickey;
        var hash = md5(stringToHash);

        var url = "http://gateway.marvel.com/v1/public/events";
        try {
            const response = await axios.get(url, {
                params: {
                    "ts": ts,
                    "apikey": publickey,
                    "hash": hash,
                    "limit": limit,
                    "offset": offset,
                    "nameStartsWith": name,
                }
            })
            return (response)
        } catch (error) {
            return (error)
        }
    },
    getComic: async (limit = 20, offset = 0, name) => {
        var ts = new Date().getTime();
        var stringToHash = ts + privatekey + publickey;
        var hash = md5(stringToHash);
        var url = "http://gateway.marvel.com/v1/public/comics";
        try {
            const response = await axios.get(url, {
                params: {
                    "ts": ts,
                    "apikey": publickey,
                    "hash": hash,
                    "limit": limit,
                    "offset": offset,
                    "nameStartsWith": name,
                }
            })
            console.log(response);
            return (response)
        } catch (error) {
            return (error)
        }
    },
    getHero: async (limit = 20, offset = 0, name) => {
        var ts = new Date().getTime();
        var stringToHash = ts + privatekey + publickey;
        var hash = md5(stringToHash);
        // console.log("eventsid", eventsid);
        const parameter = {
            params: {
                "ts": ts,
                "apikey": publickey,
                "hash": hash,
                "limit": limit,
                "offset": offset,
                "nameStartsWith": name,
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
