import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>My Services And Skills</h1>
      <div className="boxes">
        <ServiceBox animation = "fade-up" icon = "fas fa-globe" heading = "Web Development" text = "Offers a variety of website design and development services in which I use modern technologies of Era.." />
        <ServiceBox animation = "fade-up" icon = "fas fa-code" heading = "Software Development" text = "Software development is an amalgamation of several activities like designing, testing, programming.."/>
        <ServiceBox animation = "fade-up" icon = "fas fa-info-circle" heading = "Software Testing" text = "Provides professional software testing solutions to the valueable customers.." />
        <ServiceBox animation = "fade-up" icon = "fas fa-bookmark" heading = "Web Hosting" text = "A web host, or web hosting service provider, is a business that provides the technologies and services .." />
        <ServiceBox animation = "fade-up" icon = "fa-level-up" heading = "Leetcode" text = " Leetcoding will challenge me to see problems I've never seen before and force me to use strategies that are the most efficient to solve them." />
        <ServiceBox animation = "fade-up" icon = "fa-brands fa-hackerrank" heading = "Hackerrank" text = "Hackerrank will challenge me to see problems I've never seen before and force me to use strategies that are the most efficient to solve them"  />
      </div> 
    </div>
    </>
  )
}

export default Service
    