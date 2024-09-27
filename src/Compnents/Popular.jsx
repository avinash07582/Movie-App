import axios from '../utilis/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Cards from './partials/Cards';

const Popular = () => {
    document.title = "CinePulse|Popular" 


    const navigate = useNavigate();
    const[category ,setcategory] = useState("movie");
    
    const[popular,setpopular] = useState([]);
    const[page ,setpage] = useState(1);
    const[hasMore ,sethasMore] = useState(true);
    



    const GetPopular = async () => {
        try {
          const { data } = await axios.get(`${category}/popular?page=${page}`);
        //   settrending(data.results);
        console.log(data)
        if(data.results.length >0){
            
          setpopular((prevState)=>[...prevState,...data.results]);
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
        if(popular.length==0){
            GetPopular();
        }else{
             setpage(1);
             setpopular([]);
             GetPopular();
        }
    };

      useEffect(()=>{
        refreshHandler();
        // GetTrending();
      },[category]);
  return   popular.length>0 ? (
    <div className='  w-screen h-screen  '>
    <div className=" px-[6%]  w-full   flex items-center justify-between">
    
     <h1 className='  text-2xl font-semibold
      text-zinc-400'><i   onClick={()=> navigate(-1)} class="  hover:text-[#6556CD]  ri-arrow-left-line"></i>Popular</h1>
      <div className='flex items-center w-[80%]'>
      <Topnav/>
      <Dropdown title ="Category" options ={["movie","tv"]} func ={(e)=>setcategory(e.target.value)} />
      <div className='w-[2%]'></div>
      
      </div>
      
    </div>

    <InfiniteScroll  dataLength={popular.length}
    next={GetPopular}    hasMore ={hasMore}  loader ={<h1>Loading...</h1>}>
<Cards data={ popular} title ={category}/>


    </InfiniteScroll>



    
 </div>
)  : ( <Loading/>
);
}










  

 
export default Popular
