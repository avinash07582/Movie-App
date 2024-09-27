import axios from '../utilis/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Cards from './partials/Cards';

const TVshows = () => {
    document.title = "CinePulse|TV Shows" 


    const navigate = useNavigate();
    const[category ,setcategory] = useState("airing_today");
    
    const[tvshows,settvshows] = useState([]);
    const[page ,setpage] = useState(1);
    const[hasMore ,sethasMore] = useState(true);
    



    const GetTvshow = async () => {
        try {
          const { data } = await axios.get( `/tv/${category}?page=${page}`);
        //   settrending(data.results);
        console.log(data)
        if(data.results.length >0){
            
          settvshows((prevState)=>[...prevState,...data.results]);
          setpage(page+1);
        }else{
            sethasMore(false);

        }


        
        } catch (error) {
          console.error('Error', error)
        }
      };
    //   console.log(trending)

    const refreshHandler = () => {
        if(tvshows.length==0){
            GetTvshow();
        }else{
             setpage(1);
             settvshows([]);
             GetTvshow();
        }
    };

      useEffect(()=>{
        refreshHandler();
        // GetTrending();
      },[category]);




  return  tvshows.length>0 ? (
    <div className='  w-screen h-screen  '>
    <div className=" px-[6%]  w-full   flex items-center justify-between">
    
     <h1 className='  text-2xl font-semibold
      text-zinc-400'><i   onClick={()=> navigate(-1)} class="  hover:text-[#6556CD]  ri-arrow-left-line"></i>TV Shows</h1>
      <div className='flex items-center w-[80%]'>
      <Topnav/>
      <Dropdown title ="Category" options ={["on_the_air","popular","top_rated","airing_today"]} func ={(e)=>setcategory(e.target.value)} />
      <div className='w-[2%]'></div>
      
      </div>
      
    </div>

    <InfiniteScroll  dataLength={tvshows.length}
    next={GetTvshow}    hasMore ={hasMore}  loader ={<h1>Loading...</h1>}>
<Cards data={ tvshows} title ="tv"/>


    </InfiniteScroll>



    
 </div>
)  : ( <Loading/>
);
   
  
}

export default TVshows
