import React from 'react'

import Hero from './Hero'
import Title from './Title'

import PlatList from '../globals/PlatList'

const days = ['Lundi', 'Mardi', 'Mercredi', "Jeudi", 'Vendredi', 'Samedi', 'Dimanche']

const MenuSemaine = () => {
  return (
    <section name="menu-semaine">
      <Hero>
        <Title title="menu de la semaine" />
      </Hero>

      <div className="menu-container">
        {days.map((day, ind) => {
          return <PlatList key={ind} day={day}/>
        })}

      </div>
    </section>
  )
}

export default MenuSemaine
