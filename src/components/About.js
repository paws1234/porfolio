import React from 'react';
import backgroundImage from '../assets/background.png';

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 ">
        <div className="bg-purple-600 bg-opacity-50 rounded-lg shadow-lg text-white p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold leading-tight">About Me</h2>
            <p className="text-lg">Get to know Reyvand Jasper Medrano</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-purple-600 bg-opacity-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Personal Info</h3>
              <p className="text-lg">
                Residing in Cebu City, Philippines, a vibrant city known for cultural diversity and tech innovation. Age: 22
              </p>
              <p className="text-lg">
                Title: Full-Stack Software Engineer
              </p>
            </div>
            <div className="p-6 bg-purple-600 bg-opacity-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <ul className="text-lg">
                <li>Laravel</li>
                <li>PHP</li>
                <li>Vue.js</li>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML / CSS</li>
                <li>Tailwind CSS</li>
                <li>Golang</li>
                <li>C#</li>
                <li>.NET</li>
                <li>SQL, SQLite</li>
                <li>NoSQL databases</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg">Passionate about problem-solving, logic, and coding as a hobby. Always eager to learn, innovate, and collaborate.</p>
          </div>
        </div>
      </div>

      {/* Margin below content */}
      <div className="h-20"></div>
    </div>
  );
}

export default About;
