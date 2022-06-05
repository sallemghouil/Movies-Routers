import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
  

<header>
 <div className="overlay header">
 <Link to="/movies" >
  <button>MOVIES</button>
  </Link>
  <h1>GOMYCODE FLIX</h1>
  <br/>


    </div>
    </header>



  )
}

export default Home