import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo">
            <div className="logo-square"></div>
            <div className="logo-square"></div>
            <div className="logo-square"></div>
            <div className="logo-square"></div>
          </div>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'hamburger open' : 'hamburger'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {isOpen && (
            <div className="mobile-menu-header">
              <div className="logo">
                <div className="logo-square"></div>
                <div className="logo-square"></div>
                <div className="logo-square"></div>
                <div className="logo-square"></div>
              </div>
              <button className="close-menu" onClick={toggleMenu}>
                <X size={24} />
              </button>
            </div>
          )}
          <li className="nav-item">
            <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className={location.pathname === '/shop' ? 'nav-link active' : 'nav-link'}>
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className={location.pathname === '/blog' ? 'nav-link active' : 'nav-link'}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;