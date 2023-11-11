import { MD5 } from 'crypto-js'
import axios from 'axios'
import { hash, publickey } from '../../utility/token';




export const getComicDetail = {
    getComic: async (id) => {
        var ts = new Date().getTime();
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
