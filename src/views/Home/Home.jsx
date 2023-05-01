import React from 'react'
import './Home.css'

import img9 from "../../../src/images/abhipic222.png"
import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import CV from "../../../src/images/Abhinav's Resume (3).pdf"

function Home() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id='Home' className='home'>
      <div className="home-flex">
        <div className="left-content" data-aos = "fade-down" data-aos-delay= "2000">
          <p>Hello, My name is</p>
          <h1>Abhinav Aggarwal</h1>
          <h2>And I'm a  <span className="typing"></span></h2>
          <a href={CV} target="_blank" rel="noopener noreferrer">Download CV</a>
        </div>
        <div className="right-content" data-aos = "fade-up" data-aos-delay= "2000">
          <img src={img9} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home

