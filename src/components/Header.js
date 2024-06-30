import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4 fixed w-full z-10 top-0 mb-60">
      <nav className="max-w-4xl mx-auto px-4">
        <ul className="flex justify-center space-x-4">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/projects" className="text-white hover:text-gray-300">Projects</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
