import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img7 from  '../../images/note taking pic main.jpg'//using image rezier for croping and set width and height https://imageresizer.com/resize/download/6415284935139b9a6573365d
import img5 from  '../../images/a22.png'
import img3 from  '../../images/bootstrap icon1.jpeg'
import img4 from  '../../images/a23.1.png'

import img2 from  '../../images/pridictify logo.jpg'


function Project() {  
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>My Projects</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
        
<ProjectBox title = "Note Taking using React" img= {img7} link = "https://github.com/hiabhi23/react_noteTaking"  />
            <ProjectBox title = "Bank Managment System using C++(oops)" img= {img5} link = "https://github.com/hiabhi23/BMS_project_c-"  />
            <ProjectBox title = "Bootstrap HTML Web" img= {img3} link = "https://github.com/hiabhi23/Coder-Abhi-Bootstrap"  />
            <ProjectBox title = "School Managment System using C++(oops)" img= {img4} link = "https://github.com/hiabhi23/SMS_Project"  />
            <ProjectBox title = "Pridicti-fy " img= {img2} link = "https://github.com/hiabhi23/pridicti-fy"  />
           

          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
