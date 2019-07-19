import React from 'react'

import Hero from './Hero'
import Title from './Title'

import PlatList from './PlatList'

const MenuJour = ({day, plats}) => {
  return (
    <section name="menu-jour">
      <Hero>
        <Title title="menu du jour"/>
      </Hero>

      <div className="menu-jour menu-container">
        <PlatList day={day} plats={plats}/>
      </div>
    </section>
  )
}

export default MenuJour
