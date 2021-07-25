import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import '../css/homepage.css'

const Homepage = ()=> {
  return (
    <div className="homepage-container">
    <h1>AWESOME 
     SNEAKERS</h1>
     <p>Learn,hang,move.Whatever this school years throw your way nail it in style</p>
    <Link to="/product">View Detail <span className="detail-icon"><BsArrowRight/></span></Link>
  </div>
  )
}

export default Homepage
