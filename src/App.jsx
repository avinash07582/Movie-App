import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Compnents/Home'
import Trending from './Compnents/Trending'
import Popular from './Compnents/Popular'
import Movies from './Compnents/Movies'
import TVshows from './Compnents/TVshows'
import People from './Compnents/People'
import AboutSection from './Compnents/About'
import Contacts from './Compnents/Contacts'
import Moviedetails from './Compnents/Moviedetails'
import Tvdetails from './Compnents/Tvdetails'
import Persondetails from './Compnents/Persondetails'
import Trailer from './Compnents/partials/Trailer'
import Notfound from './Compnents/Notfound'




const App = () => {
  return (
    <div className=' bg-[#1F1E24] w-screen h-full flex'>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/trending" element ={<Trending/>}/>
      <Route path="/popular" element ={<Popular/>}/>
      <Route path="/movies" element ={<Movies/>}/> 
        <Route path="movie/details/:id" element ={<Moviedetails/>}>

              <Route path="/movie/details/:id/trailer" element ={<Trailer/>}/>

                    </Route>        

     <Route path="/tvshows" element ={<TVshows/>}/>
      <Route path="tv/details/:id" element ={<Tvdetails/>}> 
      <Route path="/tv/details/:id/trailer" element ={<Trailer/>}/>
      
      </Route> 
      
      
      
      

           

      <Route path="/people" element ={<People/>} />
      <Route path="person/details/:id" element ={<Persondetails/>}/>

      <Route path="*" element ={<Notfound/>}/>
    

          
      <Route path="/about" element ={<AboutSection/>}/>
      <Route path="/contacts" element ={<Contacts/>}/>
     
      
      
    </Routes>
      
    </div>
  )
}

export default App





// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './Compnents/Home';
// import Trending from './Compnents/Trending';
// import Popular from './Compnents/Popular';
// import Movies from './Compnents/Movies';
// import TVshows from './Compnents/TVshows';
// import People from './Compnents/People';
// import AboutSection from './Compnents/About';
// import Contacts from './Compnents/Contacts';
// import Moviedetails from './Compnents/Moviedetails';
// import Tvdetails from './Compnents/Tvdetails';
// import Persondetails from './Compnents/Persondetails';

// const App = () => {
//   return (
//     <div className="bg-[#1F1E24] w-screen h-full flex">
//       <Routes>
//         {/* Main Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/trending" element={<Trending />} />
//         <Route path="/popular" element={<Popular />} />

//         {/* Movies Routes */}
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movie/details/:id" element={<Moviedetails />} />

//         {/* TV Shows Routes */}
//         <Route path="/tvshows" element={<TVshows />} />
//         <Route path="/tvshows/details/:id" element={<Tvdetails />} />

//         {/* People Routes */}
//         <Route path="/people" element={<People />} />
//         <Route path="/people/details/:id" element={<Persondetails />} />

//         {/* Other Pages */}
//         <Route path="/about" element={<AboutSection />} />
//         <Route path="/contacts" element={<Contacts />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

