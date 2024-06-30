import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerStyle, setHeaderStyle] = useState("bg-gray-800 py-4 w-full z-10");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      // Check scroll direction
      if (currentScrollTop > lastScrollTop) {
        // Scroll down
        setIsVisible(false);
      } else {
        // Scroll up
        setIsVisible(true);
      }
      setLastScrollTop(currentScrollTop);
    };

    // Add event listener to scroll events
    window.addEventListener("scroll", handleScroll);
    
    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  // Toggle header visibility based on scroll direction
  const headerClassName = isVisible ? headerStyle : `${headerStyle} -translate-y-full`;

  return (
    <header className={headerClassName + " transition-transform duration-300 ease-in-out"}>
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
