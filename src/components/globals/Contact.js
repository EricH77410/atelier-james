import React from 'react'

import { FaStore } from 'react-icons/fa'
import { IoMdPhonePortrait, IoIosMailUnread } from 'react-icons/io'

import Title from './Title'
import Hero from './Hero'

const Contact = () => {
  return (
    <div>
      <Hero>
        <Title title="nous contacter" />
      </Hero>
      <section name="contact" className="contact container mb-3">
        <div className="contact-left contact-background">
          <h4 className="mb-4">L'atelier de James</h4>
          <div className="contact-address mb-4">            
            <FaStore />
            <div className="contact-address-rue">
              <h5>17 Avenue de Verdun</h5>
              <h5>64200 BIARRITZ</h5>
            </div> 
            
          </div>
          <div className="contact-tel mb-4">
            <IoMdPhonePortrait /> 
            <h5>05.59.26.33.37</h5>           
          </div>
          <div className="contact-email mb-4">
            <IoIosMailUnread />
            <h5>latelierdejamse64@yahoo.com</h5>
          </div>
        </div>
        <div className="contact-right">
          <form action="https://formspree.io/rico@club.fr" method="POST">
            <div className="form-group">
              <label htmlFor="name" className="control-label">Nom</label>
              <input type="text" name="name" className="form-control" placeholder="Votre nom..."/>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" id="email"/>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" className="form-control" row="5" placeholder="Votre message...">
              </textarea>
            </div>
            <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Envoyer</button>
          </form>
        </div>
      </section>
    </div>

  )
}

export default Contact
