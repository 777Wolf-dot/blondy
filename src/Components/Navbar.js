// src/components/Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img
            src="https://i.ibb.co/MDDFKxT1/24e064de-badc-4b95-a903-40829bf24a76.jpg"
            alt="Association Logo"
          />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/programs" onClick={closeMenu}>Programs</Link></li>
          <li><Link to="/membership" onClick={closeMenu}>Membership</Link></li>
          <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
