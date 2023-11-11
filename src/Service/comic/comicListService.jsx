import { MD5 } from 'crypto-js'
import axios from 'axios'
import { privatekey, publickey } from '../../utility/token';


export const getComicList = {
    getComic: async (limit = 20, offset = 0) => {
        var ts = new Date().getTime();
        var stringToHash = ts + privatekey + publickey;
        var hash = MD5(stringToHash);
        var url = "http://gateway.marvel.com/v1/public/comics";
        try {
            const response = await axios.get(url, {
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
            })
            return (response)
        } catch (error) {
            return (error)
        }
    },
}
