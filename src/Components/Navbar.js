// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Check if user is admin
  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (!error && data?.role === 'admin') {
        setIsAdmin(true);
      }
    };

    checkAdmin();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img
            src="https://i.ibb.co/jPGFt4TB/f9648caa-cb4b-44fe-8f16-81bf86129709.jpg"
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

          {/* Conditionally show Moderation Dashboard if admin */}
          {isAdmin && (
            <li><Link to="/moderation" onClick={closeMenu}>Moderation Dashboard</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
