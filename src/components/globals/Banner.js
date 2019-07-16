import React from 'react'

import logo from '../../images/logo.png'

const Banner = ({title, info}) => {
  return (
    <div className="banner">

      <div className="banner-title">
        <img src={logo} alt="Logo" />
      </div>

      <div className="banner-info">
        <h3>Traiteur - Epicerie fine</h3>
        <h4>17 Avenue de Verdun</h4>
        <h4>64200 BIARRITZ</h4>

        <div className="banner-contact">
          <h4>05.59.26.33.37</h4>
          <h4>latelierdejamse64@yahoo.com</h4>
        </div>
      </div>
      
    </div>
  )
}

export default Banner
