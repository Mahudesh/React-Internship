import React, { useEffect, useState } from 'react';
import './Assets/AddToCart.css'; 
import MovieHeader from './MovieHeader';

const AddToCart = ({selectedMovies}) => 
{
  const [cartMovies, setCartMovies] = useState([]);

  useEffect(() => 
  {
    setCartMovies(selectedMovies.filter(movie => movie!==undefined)); 
  }, [selectedMovies]);

  function totalAmount(cartMovies)
  {
    let amnt=0;
    for(let i=0;i<cartMovies.length;i++)
    {
      amnt=amnt+(cartMovies[i].price* cartMovies[i].tickets);
    }
    return amnt;
  }
  function handleClickBookNow()
  {
    alert("You Have Successfully Booked Your Ticket!!");
  }

  return (

    <div className='pagecontainer'>
      <MovieHeader/>
      <div className="cart-page">
        <h1>Movies Selected</h1>
        {cartMovies.length > 0 ?
         (
          <div className="movie-list">
            {cartMovies.map((movie) => (
              <div key={movie.id} className="cart-item">
                <img src={movie.image} alt={movie.name} className="cart-image" />
                <div className="cart-details">
                  <h2>{movie.name}</h2>
                  <p>Show Time: {movie.showTime}</p>
                  <p>Tickets: {movie.tickets}</p>
                  <p>Total Price: ₹{movie.price * movie.tickets}</p>
                </div>
              </div>
            ))}
            {/* <div className="total-amount">
              <h3>Total Amount: ₹{cartMovies.reduce((total, movie) => total + (movie.price * movie.tickets), 0)}</h3>
              <button className="book-button">Book Now</button>
            </div> */}
            <div className="total-amount">
              <h3>₹Total Amount:{totalAmount(cartMovies)}</h3>
              <button className="book-button" onClick={()=>handleClickBookNow()}>Book Now</button>
            </div>
          </div>
        ) : (
          <p>Your Cart Is Empty!!</p>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
