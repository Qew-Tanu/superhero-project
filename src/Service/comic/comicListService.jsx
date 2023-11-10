import { MD5 } from 'crypto-js'
import axios from 'axios'


export const getComicList = {
    getComic: async (limit = 20, offset = 0) => {
        var publickey = "7ac47af1579437971912708dc950fba2";
        var privatekey = "7f12999784ab9309e71a25fbe0bef8b00bf4a7ac";
        var ts = new Date().getTime();
        var stringToHash = ts + privatekey + publickey;
        var hash = MD5(stringToHash);
        var date = new Date(2019, 1, 1)

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
