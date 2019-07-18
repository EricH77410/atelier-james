import React from 'react'
import Title from './Title'

import Hero from './Hero'

const key = process.env.GGL_API_KEY
const gglSrc = "https://www.google.com/maps/embed/v1/place?q=L'atelier+Biarritz+17+avenue de verdun&key="+key

const Info = () => {
  return (
    <section name="info" className="container">
      <Hero>
        <Title title="informations"/>
      </Hero>
      
      <div className="row">
        <div className="info-horaires col-sm">
          <div className="info-icon"></div>
          <h5>Jours et Heures d'ouverture</h5>

        </div>
        <div className="info-horaires col-sm">
          <div className="info-icon"></div>
          <h5>Jours et Heures d'ouverture</h5>
        </div>
      </div>


      <div id="info-map" className="container">
        <iframe src={gglSrc} frameborder="0"></iframe>
      </div>
    </section>
  )
}

export default Info
