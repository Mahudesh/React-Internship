import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieHeader from './MovieHeader'; 
import './Assets/MovieBookHomePage.css'; 

import Jigarthanda2 from './Assets/Jigarthanda2.jpg';
import Star from './Assets/Star.jpg';
import Premalu from './Assets/Premalu.png';
import ManjumelBoys from './Assets/ManjumelBoys.jpg';
import Aavesham from './Assets/Aavesham.jpg'
import Kalki from './Assets/kalki.avif'
import Varshangalukushesham from './Assets/Varshangaluku Shesham.jpg'
import TheeraKadhal from './Assets/TheeraKadhal.jpg'

const movies = [
  {
    id: 1,
    name: 'Jigarthanda DoubleX',
    showTime: '7:00 PM',
    description: 'In 1975, in Tamil Nadu, India, an unlikely filmmaker and a dangerous gangster collaborate to make a Western movie',
    price: 200,
    image: Jigarthanda2,
  },
  {
    id: 2,
    name: 'Manjummel Boys',
    showTime: '11:00 AM',
    description: 'Manjummel boys adventure takes a dangerous turn when one of them plunges into Guna Caves, igniting a test of unity in a fight for survival.',
    price: 180,
    image: ManjumelBoys,
  },
  {
    id: 3,
    name: 'Premalu',
    showTime: '1:00 PM',
    description: 'Premalu is a 2024 Indian Malayalam-language romantic comedy film directed by Girish A. D. and produced by Bhavana Studios.',
    price: 200,
    image: Premalu,
  },
  {
    id: 4,
    name: 'Star',
    showTime: '10:00 PM',
    description: 'Born in a lower-middle-class family, Kalai aspires to become a Star in the Tamil Film Industry.',
    price: 100,
    image: Star,
  },
  {
    id:5,
    name: 'Aavesham',
    showTime: '5:00 PM',
    description: 'Three teens come to Bangalore for their engineering education and get involved in a fight. They find a local gangster to help them.',
    price: 150,
    image: Aavesham
  },
  {
    id:6,
    name: 'Varshangalkku Shesham',
    showTime: '10.30 PM',
    description:'Two young men leave their hometown to chase their dream of becoming big in the world of 1970s and 80s South Indian cinema.',
    price: 100,
    image:Varshangalukushesham
  },
 
  {
    id:7,
    name: 'Theera Kadhal',
    showTime: '9.30 AM',
    description:'In a relationship during college, Gowtham and Aaranya marry different people. They accidentally meet on a train to Mangalore, but Gowtham returns to life with his family, while Aaranya remains stuck in a spiderweb of her husband violence',
    price: 100,
    image: TheeraKadhal
  },
  {
    id:8,
    name: 'Kalki 2898 AD',
    showTime: '2.30 PM',
    description:'A modern avatar of the Hindu god Vishnu, is said to have descended on Earth to protect the world from evil forces.',
    price: 190,
    image: Kalki
  },
 
];

const MovieBookHomePage = ({selectedMovies,setSelectedMovies}) => {
  const navigate = useNavigate();
    // const [selectedMovies, setSelectedMovies] = useState([]);

  const increaseTickets = (index) => {
    const updatedSelectedMovies = [...selectedMovies];
    if (!updatedSelectedMovies[index]) {
      updatedSelectedMovies[index] = { ...movies[index], tickets: 0 };
    }
    updatedSelectedMovies[index].tickets += 1;
    setSelectedMovies(updatedSelectedMovies);
  };

  const decreaseTickets = (index) => {

    const updatedSelectedMovies = [...selectedMovies];
    if (updatedSelectedMovies[index] && updatedSelectedMovies[index].tickets > 0) {
      updatedSelectedMovies[index].tickets -= 1;
      setSelectedMovies(updatedSelectedMovies);
    }
  };

  const handleBookNow = () =>
   {
    // navigate('/AddToCart', { state: { selectedMovies: selectedMovies.filter(movie => movie !== undefined) } });
    navigate('/AddToCart');
  };

  return (
    <div className="movie-app">
      <MovieHeader onBookNow={()=>handleBookNow()}/>
      <div className="movie-grid">
        {movies.map((movie,index) => (
          <div key={movie.id} className="movie-card">
      <img src={movie.image} alt={movie.name} className="movie-image" />
      <h2>{movie.name}</h2>
      <p><b>Show Time</b>: {movie.showTime}</p>
      <p><b>Description:</b> {movie.description}</p>
      <h3>Ticket Price: ₹{movie.price}</h3>
      <div className="ticket-counter">
      <button onClick={() => increaseTickets(index)}>+</button>
      <h3>No.Of.Tickets:</h3>
      <span>{selectedMovies[index]?.tickets || 0 }</span>
       <button onClick={() => decreaseTickets(index)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieBookHomePage;
