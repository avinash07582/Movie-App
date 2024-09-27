import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';
import HorizonalCards from './partials/HorizonalCards';

const Moviedetails = () => {

        const {pathname} = useLocation();

  const navigate = useNavigate();
  const {id} = useParams();
    const {info} = useSelector((state)=>state.movie)
    console.log(info)


  const dispatch = useDispatch();

  useEffect(()=>{
  dispatch(asyncloadmovie(id))
  return ()=>{
    dispatch(removemovie())
  }
  },[id])
  return  info?(
    <div
     style={{
        background :`linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition : 'top 10%',
        backgroundSize : 'cover',
        marginTop: '10px',
        objectFit : 'center',
        backgroundRepeat: 'no-repeat',
        
       
    }}
     className='w-screen  h-[190vh]   px-[10%]'>
     {/* {Part-1 Navigation} */}
     <nav className=' h-[10vh] w-full text-zinc-200 flex gap-10 text-xl items-center'>
     <Link   onClick={()=> navigate(-1)} class="  hover:text-[#6556CD]  ri-arrow-left-line"></Link>
      <a  target ="_blank" href={info.detail.homepage}><i class="  hover:text-[#6556CD]   ri-external-link-fill"></i></a>
     <a  target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class=" hover:text-[#6556CD]   ri-earth-fill"></i></a>
     
     <a   className='hover:text-[#6556CD] '  target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>
     

     </nav>
     
      {/* {Part-2 Poster and details} */}
      <div className='w-full flex'>
      <img   className='   h-[50vh] object-cover' src={`https://image.tmdb.org/t/p/original/${
          info.detail.poster_path || info.detail.backdrop_path }`} alt="" />


       <div className='content ml-[5%] text-white'>
       <h1 className='text-5xl text-white font-black'>

{ info.detail.name || info.detail.title || info.detail.original_name|| info.detail.original_title}

         <small className='text-2xl font-bold text-zinc-300 '>({info.detail.release_date.split("-")[0]
         })</small>
         </h1>
         <div className=' mt-3 mb-5 flex text-white items-center gap-x-4 gap-y-11'>
         <span className='  bg-red-600 text-white hover:text-[#6556CD] w-[7vh] h-[7vh] flex justify-center items-center rounded-lg p-4'>{(info.detail.vote_average*10).toFixed()} <i class="ri-star-fill"></i>
         </span>

         <h1 className='w-[60px] font-semibold text-2xl leading-6'>User Score</h1>
         <h1>{info.detail.release_date} </h1>
         <h1>{info.detail.genres.map(g=>g.name).join("|")}</h1>
         <h1>{info.detail.runtime}min</h1>
        
         </div>

            <h1 className='text-xl font-semibold italic text-zinc-200'>{info.detail.tagline}</h1>

            
            <h1 className='text-2xl mt-4'>
            Overview </h1>
            <p className='text-medium'>{info.detail.overview}</p>
            <h1 className='text-2xl mt-4'>
            Movie Translations </h1>
            <p className='mb-10 text-medium'>{info.translations.join(", ")}</p>
            
               <Link    className=' py-3 px-8 bg-[#6556CD] rounded-md' to={`${pathname}/trailer`}><i class=" text-xl  ri-play-line"></i> Play Tralier</Link>

         </div>


   </div>
   {/* {Part-3 -Platforms} */}
  <div className='w-[80%] flex flex-col gap-y-5 mt-10 '>
      



      {info.watchproviders && 
            info.watchproviders.flatrate && 
            <div className='flex gap-x-10 items-center text-white'>
              <h1>Available on Platforms</h1>
              {info.watchproviders.flatrate.map(w=>(<img
                title={w.provider_name}
              
                className='w-[5vh] h-[5vh] object-cover rounded-md'
              src={`https://image.tmdb.org/t/p/original/${
                w.logo_path  }`}
                alt=''
            />
            ))}
                 </div>}

           

          {info.watchproviders && 
            info.watchproviders.rent && 
            <div className='flex gap-x-10 items-center text-white'>
              <h1>Available on Rent</h1>
              {info.watchproviders.rent.map(w=>(<img  
                title={w.provider_name}
              
              className='w-[5vh] h-[5vh] object-cover rounded-md'
              src={`https://image.tmdb.org/t/p/original/${
                w.logo_path  }`}
                alt=''
            />
            ))}
                 </div>}



                 {info.watchproviders && 
            info.watchproviders.buy && 
            <div className='flex gap-x-10 items-center text-white'>
              <h1>Available to  Buy</h1>
              {info.watchproviders.buy.map(w=>(<img 

              title={w.provider_name}
              
              
               className='w-[5vh] h-[5vh] object-cover rounded-md'
              src={`https://image.tmdb.org/t/p/original/${
                w.logo_path  }`}
                alt=''
            />
            ))}
                 </div>}
            

           
           
            
          </div>


        

         

          
      {/* {Part-4 -Recomendations and Similarties} */}
            <hr className='mt-10 mb-5 border-none h-[1px] bg-zinc-500' />
      <h1 className=' hover:text-[#6556CD] text-3xl  font-bold text-white'>
        Recommendations and Similarties
      </h1>
        <HorizonalCards data= 
        {
          info.recommendations.length > 0 ?info.recommendations:info.similar
          }

          />
           <Outlet/>
          

         
     

    </div>
   
  ) :(
    <Loading/>
  )
}

export default Moviedetails





{/* <img   className='   h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${
          info.detail.poster_path || info.detail.backdrop_path }`} alt="" />
          <div>
            {info.watchproviders && 
            info.watchproviders.flatrate &&
            info.watchproviders.flatrate.map(w=>(<img 
              src={`https://image.tmdb.org/t/p/original/${
                w.logo_path  }`}
                alt=''
            />
            ))}
            
          </div> */}




          // {info.watchproviders && 
          //   info.watchproviders.rent &&
          //   info.watchproviders.rent.map(w=>(<img  className='w-[5vh] h-[5vh] object-cover rounded-md'
          //     src={`https://image.tmdb.org/t/p/original/${
          //       w.logo_path  }`}
          //       alt=''
          //   />
          //   ))}
          //   {info.watchproviders && 
          //   info.watchproviders.buy &&
          //   info.watchproviders.buy.map(w=>(<img  className='w-[5vh] h-[5vh] object-cover rounded-md'
          //     src={`https://image.tmdb.org/t/p/original/${
          //       w.logo_path  }`}
          //       alt=''
          //   />
          //   ))}
