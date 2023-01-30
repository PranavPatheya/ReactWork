import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>
      <h1>Hi Guys</h1>
      <h2>This My About Page</h2>
    
    <header>
    <a href='https://patheya.tech/assets/images/logo-dark.png'>My Company Name</a>
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
  </div>
  )
}

export default About
