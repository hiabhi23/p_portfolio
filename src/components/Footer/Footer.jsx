import React from 'react'
import "./Footer.css"


import CV from "../../../src/images/Abhinav's Resume (3).pdf"

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='author'>
        <p>Created by <a href={CV} target="_blank" rel="noopener noreferrer">abhinavaggarwal</a> with <i className='far fa-heart'></i></p>
        </div>
        <div className=''>
        <p className='copyright'> <i className='far fa-copyright'></i> 2023 All rights reserved</p>
        </div>
    </div>
    </>
  )
}

export default Footer

