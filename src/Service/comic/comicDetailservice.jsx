import { MD5 } from 'crypto-js'
import axios from 'axios'


export const getComicDetail = {
    getComic: async (id) => {
        var publickey = "7ac47af1579437971912708dc950fba2";
        var privatekey = "7f12999784ab9309e71a25fbe0bef8b00bf4a7ac";
        var ts = new Date().getTime();
        var stringToHash = ts + privatekey + publickey;
        var hash = MD5(stringToHash);

        var url = `http://gateway.marvel.com/v1/public/series/${id}/characters`;
        try {
            const response = await axios.get(url, {
                params: {
                    "ts": ts,
                    "apikey": publickey,
                    "hash": hash,
                }
            })
            return (response)
        } catch (error) {
            return (error)
        }
    },
}
