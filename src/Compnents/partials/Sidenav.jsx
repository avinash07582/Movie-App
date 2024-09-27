
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Sidenav = () => {

 

 
  return (
    <div className=' h-full  w-[20%]  border-r-2 border-zinc-400 p-10 '>
      <h1 className='text-2xl text-white font-bold'>
      <i class="text-[#6556CD] ri-tv-fill  mr-1"></i>
       <span className='text-2xl'>CinePulse</span>
      </h1>
     <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
     <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
     <Link  to="/trending" className='hover:bg-[#6556CD] hover:text-white  duration-300 rounded-lg p-5'>  <i class="  ri-fire-fill"></i>Trending </Link>
     <Link   to="/popular"  className='hover:bg-[#6556CD] hover:text-white  duration-300 rounded-lg p-5'> <i class=" mr-2 ri-bard-fill"></i>Popular</Link>
     <Link to="/movies" className='hover:bg-[#6556CD] hover:text-white  duration-300 rounded-lg p-5'>
     
     <i class="ri-film-fill"></i> Movies </Link>
     <Link   to = "/tvshows" className='hover:bg-[#6556CD] hover:text-white  duration-300 rounded-lg p-5'> <i class="ri-computer-fill"></i> TV Shows</Link>
     <Link  to="/people" className='hover:bg-[#6556CD] hover:text-white  duration-300 rounded-lg p-5'> <i class="mr-2 ri-team-fill"></i>People </Link>

    
     </nav>
     <hr className='border-none h-[1px]  bg-zinc-400' />
     <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
     <h1 className='text-white font-semibold text-xl mt-10 mb-5'>WebSite Information</h1>
     <Link   to="/about"  className='hover:bg-[#6556CD] hover:text-white  duration-300 rounded-lg p-5'>    <i class=" mr-2 ri-information-fill"></i>About </Link>
     <Link   to= "/contacts" className='hover:bg-[#6556CD] hover:text-white  duration-300 rounded-lg p-5'> <i class="ri-phone-fill"></i>  Contact Us </Link>
     
     </nav>
    </div>
  )
}

export default Sidenav
