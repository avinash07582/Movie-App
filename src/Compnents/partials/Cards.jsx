import React from 'react'
import { Link } from 'react-router-dom'
import noimage from "/noimage.jpg"

const Cards = ({data,title}) => {
    //  console.log(data)
//   console.log(title)
  return (
    <div className='   flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]'>
      {data.map((c,i)=>(
        <Link 
         to={`/${c.media_type||title}/details/${c.id}`}  className='relative w-[25vh] mr-[5%] mb-[5%]' key={i}>
        <img   className='   h-[40vh] object-cover' src={
          
          c.name || c.title || c.original_name|| c.original_title ?`https://image.tmdb.org/t/p/original/${
          c.poster_path || c.backdrop_path ||c.profile_path}`:noimage
          } alt="" />
          <h1 className='text-2xl text-zinc-400 font-semibold'>

          { c.name || c.title || c.original_name|| c.original_title}
          </h1>
          {c.vote_average &&(
            <div className=' absolute right-[5%] bottom-[25%] top-1 bg-red-600 text-white hover:text-[#6556CD] w-[7vh] h-[7vh] flex justify-center items-center rounded-lg p-4'>{(c.vote_average*10).toFixed()} <i class="ri-star-fill"></i>
          </div>
          )}


      </Link>
      ))}
    </div>
  )
}

export default Cards


//  shadow -[8px_17px_38px_2px_rgba(0,0,0,.5)]