import React from 'react'
import {FaGithub , FaLinkedin , FaFacebookMessenger} from 'react-icons/fa'
import './MyLink.css'


const MyLink = () => {
  return (
    <div>
        <section>
        <div className='mylink'>
            <a href='#m'><FaGithub /> </a>
            <a href='#m'> <FaLinkedin /> </a>
            <a href='#m'> <FaFacebookMessenger /> </a>
        </div>
    </section>
    </div>
  )
}

export default MyLink