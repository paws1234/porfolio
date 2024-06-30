import React from 'react';
import backgroundImage from '../assets/background.png'; 
import profileImage from '../assets/profile.png'; 

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Purple Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-75"
        style={{ zIndex: -1 }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 bg-purple-600 bg-opacity-75 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl p-8 md:p-20 mx-auto max-w-4xl text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl mb-8">I am Reyvand Jasper Medrano.</p>
        <img src={profileImage} alt="Your Name" className="mx-auto rounded-full h-40 w-40 mb-4 md:h-60 md:w-60 border-4 border-white" />
      </div>
    </div>
  );
}

export default Home;
