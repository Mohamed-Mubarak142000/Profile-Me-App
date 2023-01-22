import React from 'react'
import './Portfolio.css'
import data from './DataPortfolio'


const Portofolio = () => {

    const renderPortfolio = data.map((el) =>{
        return(
            <div className='child-content-portofolio' key={el.id}>

            <div className='image-project'>
              <img src={el._image} alt=''></img>
            </div>

            <div className='description-project'>
              <p>
                {el.parag}
              </p>
            </div>

            <div className='button-project'>
              <a href='#git' className='btn'>github</a>
              <a href='#demo' className='btn btn-primary'>live demo</a>
            </div>

          </div>
        )
    })
  return (
    <section id='myportofolio'>

      <div className='container'>

        <div className='header-section'>
          <h5>my projects works</h5>
          <h1>portofolio</h1>
        </div>

        <div className='main-content-portofolio'>
            {renderPortfolio}
        </div>

      </div>
    </section>
  )
}

export default Portofolio