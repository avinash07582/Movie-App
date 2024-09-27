// import React from 'react'
// import Dropdown from './Dropdown'


// const HorizonalCards = ({ data }) => {
//   return (
//     // <div className='w-full  p-5  '>

//     <div className="w-[100%]  flex overflow-y-hidden mb-5 p-5 ">
//       {data.map((d, i) => (
//         <div key={i} className=' min-w-[18%] h-full   mr-5 mb-5 bg-zinc-900'>
//           <img className='w-full h-[65%]  object-cover'

//             src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path})`} alt="" />
//           <div className='text-white p-3 h-[55%]'>

//             <h1 className='   text-xl font-black '>
//               {d.name || d.title || d.original_name || d.original_title}
//             </h1>
//             <p className='  '>{d.overview.slice(0, 50)}<span className='text-blue-900'>...more</span>
//             </p>
//           </div>
//         </div>
//       ))};
//     </div>
//     // </div>
//   )
// }

// export default HorizonalCards


import React from 'react';
import { Link } from 'react-router-dom';
import noimage  from "/noimage.jpg"

const HorizonalCards = ({ data }) => {
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
      {  data.length > 0 ?  data.map((d, i) => (
        <Link to={`/${d.media_type}/details/${d.id}`}
          key={i} 
          className='min-w-[200px] w-[200px] h-[350px] mr-5 mb-5 bg-zinc-900 rounded-lg shadow-lg hover:bg-[#6556CD]'>
          <img 
            className='w-full h-[60%] object-cover rounded-t-lg' 
            src={
              d.backdrop_path ||
               d.poster_path ?
              `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`
              : noimage} 
            alt="" 
          />
          <div className='text-white p-3 h-[40%] overflow-y-auto'>
            <h1 className='text-xl font-black truncate'>
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className='text-sm overflow-hidden'>
              {d.overview.slice(0, 50)}
              <span className='text-blue-500'>...more</span>
            </p>
          </div>
        </Link>
      )) : <h1 className='text-3xl mt-5  text-white font-black text-center'>Nothing to show</h1>}
    </div>
  );
};

export default HorizonalCards;
