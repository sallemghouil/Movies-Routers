import React from 'react'
import './App.css';
import MovieList from './Components/MovieList/MovieList';
import { Route, Routes } from 'react-router-dom';
import { movies } from "./data"
import Home from './Pages/Home/Home';
import { useState } from 'react';
import Filter from './Components/Filter/Filter';
import Add from './Components/Add/Add';
import NavbarAll from './Components/Navbar/Navbar';



function App() {
  const [moviesList, setMoviesList] = useState(movies)
  const [search, setsearch] = useState("")
  const [searchR, setsearchR] = useState(0)
  const getNewMovie = (newM) => {
    setMoviesList([...moviesList, { ...newM, id: moviesList.length }])
  }
  const handleDclick = () => {
    setMoviesList([])
  }
  const deleteMovie = (idDel) => {
    setMoviesList(moviesList.filter((el) => el.id !== idDel))
  }
  const FilterMovie=moviesList.filter(el=> el.title.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()));
  const FilterMovieByRating=moviesList.filter(el=>el.rating>=searchR)
  return (
    <div className="App">
      <Routes>
          
            <Route  path="/" element={<Home/>} />
            <Route path="/movies"  element={[ <NavbarAll NewMovie={getNewMovie} FilterMovie={FilterMovie} FilterMovieByRating={FilterMovieByRating}/>,
            <div>
              <Filter setsearch={setsearch} setsearchR={setsearchR}/>
      <button onDoubleClick={handleDclick}>Clear all</button>
              {moviesList.length ? <MovieList movies={moviesList.filter((el)=>{return(el.title.toLocaleLowerCase().includes(search.trim().toLowerCase()) && el.rating>=searchR)})} deleteMovie={deleteMovie} /> : <h1>no movies</h1>}
              <Add getNewMovie={getNewMovie} />
              </div>
  ]}/>

          
      </Routes>

    </div>
  );
}

export default App;
