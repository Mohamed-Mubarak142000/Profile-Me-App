import React from 'react'
import './Footer.css'
import {FaFacebookSquare , FaInstagramSquare , FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='myfooter' id='myfooter'>
      
      <div className='main-content-footer'>

        <div className='child-content-footer'>
          <h1>mohamed mubarak😎💻</h1>
        </div>

        <div className='child-content-footer'>
          <ul>
            <li> <a href='#myheader'>Home</a> </li>
            <li> <a href='#myabout'>About</a> </li>
            <li> <a href='#myexperience'>experience</a> </li>
            <li> <a href='#myservices'>Services</a> </li>
            <li> <a href='#myportofolio'>Portofolio</a> </li>
            <li> <a href='#mycontact'> Contact</a> </li>
          </ul>
        </div>

        <div className='child-content-footer'>

        <a href='#facebook'>  <FaFacebookSquare className='icons' /> </a>
        <a href='#insta'>  <FaInstagramSquare className='icons'/> </a>
        <a href='#twitter'>  <FaTwitterSquare className='icons'/>   </a> 
        </div>

        <div className='child-content-footer'>
        <p>&copy; 2023 Mohamedmubarak142000@gmail.com</p>
        </div>

      </div>
    
    </section>
  )
}

export default Footer