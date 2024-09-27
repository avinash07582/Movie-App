import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from '../utilis/axios'
import Header from './partials/Header'
import HorizonalCards from './partials/HorizonalCards'

import Dropdown from './partials/Dropdown'
import { all } from 'axios'
import Loading from './Loading'

const Home = () => {
  document.title = "CinePulse|Homepage"
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");


  const GetHeaderWallpaper = async () => {
    const { data } = await axios.get(`/trending/all/day`)
    // console.log(d);
    let randomdata = data.results[(Math.random() * data.results.length).toFixed()]
    setwallpaper(randomdata);

    try {

    } catch (error) {
      console.error('Error fetching searches', error)

    }
  };



  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.error('Error', error)
    }
  };
  // console.log(wallpaper)

  // console.log(trending)
  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category])
  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
        <Topnav />
        <Header data={wallpaper} />

        <div className=' flex justify-between p-6'>
          <h1 className='  text-3xl font-semibold  text-zinc-400'>Trending
          </h1>
          <Dropdown 
          title="Filter" 
          options={["tv", "movie", "all"]} 
          func={(e) => setcategory(e.target.value)} />
        </div>
        <HorizonalCards data={trending} />
      </div>
    </>
  ) : <Loading/>
}

export default Home
