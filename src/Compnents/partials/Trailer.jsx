import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notfound from '../Notfound';

const Trailer = () => {
    const navigate = useNavigate();

    const {pathname}= useLocation();
    

     const category = pathname.includes("movie")? "movie" :"tv"
     const ytvideo =useSelector((state)=>state[category].info.videos);
     console.log(ytvideo)


    // console.log (pathname.includes("movie"),ytvideo)

  return  (
    <div className='bg-[rgba(0,0,0,.9)] absolute z-[100] top-0
    left-0 w-screen h-screen flex items-center justify-center'>

     
<Link
   onClick={()=> navigate(-1)} class="  hover:text-[#6556CD]  ri-close-fill absolute text-3xl text-white right-[5%] top-[5%]"></Link>
     {ytvideo ? (<ReactPlayer
     controls
      height={600}
      width={1000}
       url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/>
       ):(
        <Notfound/>
       )}
      
    </div>
    )
  
}

export default Trailer
