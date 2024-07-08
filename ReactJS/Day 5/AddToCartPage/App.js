import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddToCart from './AddToCart';
import MovieBookHomePage from './MovieBookHomePage';
import { useState } from 'react';

function App() {
  const [selectedMovies, setSelectedMovies]=useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieBookHomePage selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />} />
          <Route path='/AddToCart' element={<AddToCart selectedMovies={selectedMovies}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
