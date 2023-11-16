import md5 from "md5";


// export const publickey = "7ac47af1579437971912708dc950fba2";
// export const privatekey = "7f12999784ab9309e71a25fbe0bef8b00bf4a7ac";
// var ts = new Date().getTime();
// const stringToHash = ts + privatekey + publickey;
// export const hash = MD5(stringToHash);



export const publickey = "16fb4bd42a470966d70da8f5fb7f2842";
export const privatekey = "bfd3c58a3f10bb57f8ba9e41f03053e5972d0edd";
var ts = new Date().getTime();
const stringToHash = ts + privatekey + publickey;
export const hash = md5(stringToHash);
