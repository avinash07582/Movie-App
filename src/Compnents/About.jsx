
// AboutSection.js
// AboutSection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const AboutSection = () => {

    const navigate = useNavigate();
      const [about,setabout] = useState([]);
  return  about && about? (
    <section className="relative bg-gray-900 text-gray-100 h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1706886272687-c043824f89cf?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 h-full flex flex-col justify-center">
        {/* Title with Animation */}
        <h2 className="text-5xl font-extrabold text-center mb-10 text-[#6556CD] animate-fadeIn">
          About CinePulse
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side Image with Hover Effect */}
          <div className="md:w-1/2 mb-8 md:mb-0 transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <img
              src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Movie Banner"
              className="rounded-lg shadow-2xl"
            />
          </div>
          
          {/* Right Side Text Content */}
          <div className="md:w-1/2 md:pl-10">
            <p className="text-lg leading-relaxed mb-6 animate-fadeIn delay-200">
              At <span className="text-[#6556CD] font-bold">CinePulse</span>, we celebrate the magic of films! 
              Discover the latest blockbusters, indie gems, and hidden classics, all curated for true movie lovers. 
              Whether you're looking for in-depth reviews, behind-the-scenes stories, or the latest trailers, we’ve got it all covered.
            </p>
            <p className="text-lg leading-relaxed mb-6 animate-fadeIn delay-400">
              Our platform is dedicated to bringing fans closer to the world of cinema. From exclusive interviews 
              with filmmakers to must-watch recommendations, MovieHub is where movie magic happens.
            </p>
            
            {/* Button with Hover Animation */}
            <div className="mt-8">
              <button onClick={() =>navigate(-1)}
                
                className="inline-block bg-[#6556CD] text-gray-900 py-3 px-8 rounded-lg shadow-md hover:bg-[#6556CD] transition-all duration-300 transform hover:scale-105"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  ): ( <Loading/>
  );
};

export default AboutSection;
