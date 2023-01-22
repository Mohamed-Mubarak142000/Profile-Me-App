import React from 'react';
import Typical from 'react-typical';
import './Typica.css'

const Typica = () => {
  return (
    <div className='typic'>
       <p>
          <span id="name"> Hello , <br/> I'm Mohamed Mubarak</span>
          <Typical className="typiacl"
            steps={[
              " Front End Developer",
              2500 , 
              "WebSite Developement By React.js",
              2500,
              "Beginner of Back End Devoloper",
              2500,
              "UI/UX Designer",
              2500,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </p>
    </div>
  )
}

export default Typica