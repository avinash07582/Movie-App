import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadperson, removeperson } from '../store/actions/personActions';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';
import HorizonalCards from './partials/HorizonalCards';
import Dropdown from './partials/Dropdown';


const Persondetails = () => {


  const {pathname} = useLocation();

  const navigate = useNavigate();
  const {id} = useParams();
    const {info} = useSelector((state)=>state.person)
    // console.log(info)


  const dispatch = useDispatch();
  const [category,setcategory] = useState ("movie")
  console.log(info)

  useEffect(()=>{
  dispatch(asyncloadperson(id))
  return ()=>{
    dispatch(removeperson())
  }
  },[id])
  return info ? (
    <div className='px-[15%]  h-[170vh] w-screen bg-[#1F1E24] '>
    {/* {Part-1 Navigation} */}
    <nav className=' h-[10vh] w-full text-zinc-200 flex gap-10 text-xl items-center'>
     <Link   onClick={()=> navigate(-1)} class="  hover:text-[#6556CD]  ri-arrow-left-line"></Link>
      

     </nav>

     <div className="w-[full] flex ">
     {/* {Part2- LeftPoster and Details} */}
     <div className="w-[20%]">
     <img   className='   h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${
          info.detail.profile_path || info.detail.backdrop_path }`} alt="" />
          <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500' />
          {/* {External Links or Social Media} */}
          <div className=" text-2xl text-white flex gap-x-5">
          <a  target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class=" hover:text-[#6556CD]   ri-earth-fill"></i></a>
          <a  target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}> <i class=" hover:text-[#6556CD]   ri-facebook-fill"></i></a>
          <a  target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}> <i class="   hover:text-[#6556CD]  ri-instagram-line"></i></a>
          <a  target="_blank" href={`https://www.twitter.com/${info.externalid.twitter_id}`}><i class="ri-twitter-x-fill"></i></a>
          </div>
          {/* {Personal Information} */}
          <h1  className='text-2xl text-zinc-400 font-semibold my-5'> Personal Info</h1>
          <h1  className='text-lg text-zinc-400 font-semibold '> Know For</h1>
          <h1  className=' text-zinc-400 '> {info.detail.known_for_department}</h1>



          <h1  className='text-lg text-zinc-400 font-semibold mt-3 '> Gender</h1>
          <h1  className=' text-zinc-400 '> {info.detail.gender === 2? "Male":"Female"}</h1>
          <h1  className='text-lg text-zinc-400 font-semibold mt-3 '> BirthDay</h1>
          <h1  className=' text-zinc-400 '> {info.detail.birthday}</h1>
          <h1  className='text-lg text-zinc-400 font-semibold mt-3 '> DeathDay</h1>
          <h1  className=' text-zinc-400 '> {info.detail.deathhday ? info.detail.deathhday:"Alive"}</h1>
          <h1  className='text-lg text-zinc-400 font-semibold mt-3 '> Place of Birth</h1>
          <h1  className=' text-zinc-400 '> {info.detail.place_of_birth}</h1>
          <h1  className='text-lg text-zinc-400 font-semibold mt-3 '> Also Known As</h1>
          <h1  className=' text-zinc-400 '> {info.detail.also_known_as.join(", ")}</h1>
     </div>
     {/* {Part-3 Right Derails and information} */}
            <div className="w-[80%] ml-[5%]">
            <h1  className='text-6xl text-zinc-400 font-black my-5'> {info.detail.name}</h1>
          <h1  className='text-lg text-zinc-400 font-semibold '> Biography</h1>
          <p  className=' text-zinc-400'>{info.detail.biography}</p>

          <h1  className=' mt-5 text-lg text-zinc-400 font-semibold '> Famous For</h1>
           
           <HorizonalCards data = {info.combinedCredits.cast}/>


           <div className="w-full flex justify-between">
           <h1  className=' mt-5 text-xl text-zinc-400 font-semibold '> Acting
           </h1>
           <Dropdown title="Category" options={["tv","movie"]} func ={(e)=>setcategory(e.target.value)}/>
           </div>
               <div className="  list-disc  w-full h-[50vh] mt-5  text-zinc-400  overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5">


                {info[category + "Credits"].cast.map((c,i)=>(
                  <li   key={i} className='hover:text-white duration-300  cursor-pointer'>
                  
                  <Link  to={`/${category}/details/${c.id}`} className=''>
                    <span>{ c.name || c.title || c.original_name|| c.original_title}</span>
                    <span className='block ml-6 mt-3 '> 
                    {c.character && `Character Played :${c.character}`}
                    
                    </span>
                  </Link>
                  
                  </li>
                ))}



                 
               </div>

            </div>
     </div>
      
    </div>
  ) :<Loading/>
}

export default Persondetails






{/* <a  target ="_blank" href={info.detail.homepage}><i class="  hover:text-[#6556CD]   ri-external-link-fill"></i></a>
     <a  target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class=" hover:text-[#6556CD]   ri-earth-fill"></i></a>
     
     <a   className='hover:text-[#6556CD] '  target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>
      */}