import React from 'react';
import './Home.css';
import Typica from './Typica'; 
import ScrollDown from './ScrollDown';
import MyLink from './MyLink';
import IMAGEME from '../../imag/image-me.jpeg';
import {HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom';


const Home = () => {
  return (
    <section id='myheader'>
    <div className='container'>

        <div className='main-content-header'>
            
            <div className='right-content'>
                 <MyLink />
           </div>

            <div className='center-content'>
   
                <div className='content-info-header'>
                    <Typica />
                </div>

                <div className='button-header'>
                    <a href='#s' className='btn'> download CV</a>
                    <BrowserRouter>
                       <Link to='#mycontact' className='btn btn-primary'> let's talk</Link>
                    </BrowserRouter>
                </div>

                <div className='about-me'>
                    <div className='about-me-image'>
                        <img src={IMAGEME} alt='im'/>
                    </div>
                </div>

            </div>

            <div className='left-content'>
                <ScrollDown />
           </div>

        </div>

    </div>
</section>
  )
}

export default Home