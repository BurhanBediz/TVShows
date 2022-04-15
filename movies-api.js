const apiUrl="https://api.tvmaze.com";

const searchShow = (show,cb)=>{
    fetch(`${apiUrl}/search/shows/?q=${show}`)
    .then((resp)=> resp.json())
    .then((data)=>{
        cb(data);
    })
}



const getShow = (id,cb)=>{
    fetch(`${apiUrl}/shows/${id}`)
    .then((resp)=>resp.json())
    .then((data)=>{
        cb(data);
    })
}
export {searchShow,getShow};