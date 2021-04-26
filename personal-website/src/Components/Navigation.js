import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav>
                <Router> 
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/portafolio">Portafolio</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/contact">Contact</Link>
                </Router>
            </nav>
            
        </div>
    );
};

export default Navigation;