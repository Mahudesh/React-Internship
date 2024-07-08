import React from 'react';
import './Assets/MovieHeader.css'; 
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';


const MovieHeader = ({ onBookNow }) => {
  return (
    <header className="head">
      <h1 className="header-title">Movie Ticket Booking</h1>
    <Link to='/'><span className='icon'>  < FaHome/></span></Link>
        <button className="cart-button" onClick={onBookNow}>Book Now</button>
      
    </header>
  );
};

export default MovieHeader;
