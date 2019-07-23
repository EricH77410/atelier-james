import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import Image from 'gatsby-image'

const Plat = ({ plat, addToCart }) => {
  return (
    <div className="plat-card card">
      <Image className="card-img-top" fluid={plat.image.fluid} />
      <div className="plat-content card-body">
        <h4 className="plat-card-title">{plat.title}</h4>
        <p className="plat-card-description">{plat.description}</p>
        <span className="span-left">{plat.price.toFixed(2)} € / part</span>
        <span className="span-right snipcart-add-item"
          data-item-id={plat.id}
          data-item-name={plat.title}
          data-item-price={plat.price.toFixed(2)}
          data-item-url="http://localhost:8000/"
          data-item-image={plat.image.fluid.src}
        >
          <FaCartArrowDown />
        </span>
      </div>
    </div>
  )
}

export default Plat
