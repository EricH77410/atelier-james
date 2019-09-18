import React from 'react'

import Hero from './Hero'
import Title from './Title'

import PlatList from './PlatList'
import MenuJourTableau from './MenuJourTableau'

const MenuJour = ({day, plats}) => {
  const count = plats.length
  return (
    <section name="menu-jour">
      <Hero>
        <Title title="menu du jour"/>
      </Hero>
      <MenuJourTableau day={day} plats={plats}/>
      <div className="menu-jour menu-container">
        <PlatList day={day} plats={plats} count={count}/>
      </div>
    </section>
  )
}

export default MenuJour
