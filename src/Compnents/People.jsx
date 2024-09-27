import axios from '../utilis/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Cards from './partials/Cards';


const People = () => {




    document.title = "CinePulse|Popular" 


    const navigate = useNavigate();
    const[category ,setcategory] = useState("popular");
    
    const[person,setperson] = useState([]);
    const[page ,setpage] = useState(1);
    const[hasMore ,sethasMore] = useState(true);
    



    const GetPerson = async () => {
        try {
          const { data } = await axios.get( `/person/${category}?page=${page}`);
        //   settrending(data.results);
        console.log(data)
        if(data.results.length >0){
            
          setperson((prevState)=>[...prevState,...data.results]);
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
        if(person.length==0){
            GetPerson();
        }else{
             setpage(1);
             setperson([]);
             GetPerson();
        }
    };

      useEffect(()=>{
        refreshHandler();
        // GetTrending();
      },[category]);


  return person.length>0 ? (
    <div className='  w-screen h-screen  '>
    <div className=" px-[6%]  w-full   flex items-center justify-between">
    
     <h1 className='  text-2xl font-semibold
      text-zinc-400'><i   onClick={()=> navigate(-1)} class="  hover:text-[#6556CD]  ri-arrow-left-line"></i>People</h1>
      <div className='flex items-center w-[80%]'>
      <Topnav/>
      {/* <Dropdown title ="Category" options ={["on_the_air","popular","top_rated","airing_today"]} func ={(e)=>setcategory(e.target.value)} />
      <div className='w-[2%]'></div> */}
      
      </div>
      
    </div>

    <InfiniteScroll  dataLength={person.length}
    next={GetPerson}    hasMore ={hasMore}  loader ={<h1>Loading...</h1>}>
<Cards data={ person} title ="person"/>


    </InfiniteScroll>



    
 </div>
)  : ( <Loading/>
);
    
    
}

export default People
