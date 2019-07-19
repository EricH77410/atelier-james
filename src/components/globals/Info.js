import React from 'react'
import { FaStore } from 'react-icons/fa'

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
      
      <div className="row info-container">
        <div className="info-horaires col-sm">
          <div className="info-icon">
            <span><FaStore /></span>
          </div>
          <div className="info-heure">
            <h5>Jours et Heures d'ouverture</h5>
            <p>Du mardi au vendredi: 10h - 14h / 16h30 - 19h00</p>
            <p>Samedi: 10h - 14h</p>
          </div>          
        </div>
      </div>


      <div id="info-map" className="container">
        <iframe src={gglSrc} frameBorder="0"></iframe>
      </div>
    </section>
  )
}

export default Info
