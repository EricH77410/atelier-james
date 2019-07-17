import React from 'react'
import { IoMdPhonePortrait, IoIosMailUnread } from 'react-icons/io'

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
        <hr/>
        <div className="banner-contact">
          <h4><IoMdPhonePortrait /> 05.59.26.33.37</h4>
          <h4><IoIosMailUnread/> latelierdejamse64@yahoo.com</h4>
        </div>
      </div>

    </div>
  )
}

export default Banner
