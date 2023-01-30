import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <header>
      <center><a >My Page</a>
      </center>
      <img></img>
      
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
            
          </li>

          <li>
            <Link to="/About"> About </Link>
          </li>

        </ul>
      </nav>
    </header>
    </>
  )
}

export default Home
