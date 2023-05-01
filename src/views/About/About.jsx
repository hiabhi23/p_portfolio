import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/latestpic-PhotoRoommmmm (2).png'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>About me</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>I'm Abhinav</h2>
        <p>Skilled multitasker with superior work ethic and good teamwork, problem-solving and organizational skills. Willing to take on any task
to help team. Motivated Internship Student working toward B.tech degree. Committed to developing career path and expanding work
experience. Strong knowledge of C++,HTML/CSS, JavaScript,ReactJS,SQL. Good learner with good communication skills. </p>
        <a href="https://www.linkedin.com/in/abhinav-aggarwal-2804b0240/" target="_blank" rel="noopener noreferrer">Hire me</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
