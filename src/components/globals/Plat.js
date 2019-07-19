import React from 'react'
import Image from 'gatsby-image'

const Plat = ({ plat }) => {
  return (
    <div className="plat-card card">
      <Image className="card-img-top" fluid={plat.image.fluid} />
      <div className="plat-content card-body">
        <h4 className="plat-card-title">{plat.title}</h4>
        <p className="plat-card-description">{plat.description}</p>
        <span>{plat.price.toFixed(2)} € / part</span>
      </div>
    </div>
  )
}

export default Plat
