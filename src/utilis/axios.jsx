import axios from "axios";


const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers:{
         accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmNjZGVjMThkY2FlYWI0YzZlYjVkZjQ1ZTBhOWVlMCIsIm5iZiI6MTcyNjc0NTMyOC4wNTY1ODksInN1YiI6IjY2ZWMwNWQ4NTE2OGE4OTZlMTFmZjhlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fLLE_hU11EJr84QmymZs1IEqkz4QaDl7-Xif-_Qo5io',

    },
});

export default instance;
