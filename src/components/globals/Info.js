import React from 'react'
import Title from './Title'

const Info = () => {
  return (
    <section name="info" className="container">
      <Title title="informations"/>
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
        <iframe src="https://www.google.com/maps/embed/v1/place?q=L'atelier+Biarritz+17+avenue de verdun&amp;key=AIzaSyCFTEEUGk7hGBqhWJiqIrSRCN1Hn5QhL5s" frameborder="0"></iframe>
      </div>
    </section>
  )
}

export default Info
