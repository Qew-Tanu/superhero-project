import { MD5 } from 'crypto-js'
import axios from 'axios'
import { privatekey, publickey } from '../../utility/token';

export const getDetail = {
    getDetail: async (type, id) => {

        var ts = new Date().getTime();
        var stringToHash = ts + privatekey + publickey;
        var hash = MD5(stringToHash);

        var url = `http://gateway.marvel.com/v1/public/${type}/${id}`;
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
