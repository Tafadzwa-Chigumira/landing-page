import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-brand">Travel & Earn <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         viewBox="0 0 16 16">
            <path fill="currentColor"
                  d="M12.3 6.5c.5-.5.9-.8 1.2-1.1c1.6-1.6 3.2-4.1 2.2-5.1s-3.4.6-5 2.2c-.3.3-.6.7-1.1 1.2L2.6.5C1.9.2 1.1.3.6.8l-.6.5L6.6 7c-1.3 1.6-2.7 3.1-3.4 4l-1.1-.6c-.5-.3-1.2-.3-1.6.2l-.3.3L3 13l2 2.8l.3-.3c.4-.4.5-1.1.2-1.6L5 12.8c.9-.7 2.4-2.1 4-3.4l5.7 6.6l.5-.5c.5-.5.6-1.3.3-2z"/>
        </svg></div>
        <ul className="navbar-links">
            <li><a href="#features"><b>Features</b></a></li>
            <li><a href="#testimonials"><b>Testimonials</b></a></li>
            <li><a href="#download"><b>Download</b></a></li>
        </ul>
    </nav>
  );
}

export default Navbar;
