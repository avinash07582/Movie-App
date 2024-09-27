import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({data}) => {
    // console.log(data)
  return (
    <div style={{
        background :`linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path||data.profile_path})`,
        backgroundPosition : 'top 10%',
        backgroundSize : 'cover',
        marginTop: '10px',
        objectFit : 'center',
        backgroundRepeat: 'no-repeat',
        
       
    }} className='w-full h-[50vh] flex flex-col justify-end p-[6%] items-start'>
    <h1 className=' w-[70%] text-4xl font-black text-white'>
    { data.name || data.title || data.original_name|| data.original_title}
    </h1>
    <p className='w-[70%] mt-3 mb-3  text-white'>{data.overview.slice(0,200)}<Link 
     to={`/${data.media_type}/details/${data.id}`}
    
    className='text-blue-300'>...more</Link>
    </p>
    {/*  slice use kar words pe limit lgaa diya ki 200 words tak he rhega taki ganda na dikhe */}
    <p className='text-white '>
    <i class=" text text-yellow-500 ri-megaphone-fill"></i>{ " "} {data.release_date ||"No Information"}
    <i class=" ml-5 text-yellow-500 ri-live-fill"></i>{ " "} {data.media_type.toUpperCase()}
   
    </p>
    <Link   to={`/${data.media_type}/details/${data.id}/trailer`} className='   bg-[#6556CD] text-gray-900 py-2 px-6 rounded-lg font-semibold shadow-lg transform transition duration-300 ease-in-out hover:bg-yellow-600 hover:text-white hover:scale-105 hover:shadow-2xl p-3   mt-4'>
        Watch Trailer
    </Link>
      
    </div>
  );
};

export default Header
