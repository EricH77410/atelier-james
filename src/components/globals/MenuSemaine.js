import React from 'react'

import Hero from './Hero'
import Title from './Title'

import PlatList from '../globals/PlatList'

const days = ['Mardi', 'Mercredi', "Jeudi", 'Vendredi', 'Samedi']

const MenuSemaine = ({plats}) => {
  let count = 0
  const getPlatsByDay = (day) => {
    let platsByDay = []
    plats.forEach((plat) => {
      plat.node.category.forEach((c) => {
        if (c.title === day){
          platsByDay.push(plat)
        }
      })
    })
    count = platsByDay.length
    return platsByDay
  }

  return (
    <section name="menu-semaine">
      <Hero>
        <Title title="menu de la semaine" />
      </Hero>

      <div className="menu-container">
        {days.map((day, ind) => {
          return <PlatList key={ind} day={day} plats={getPlatsByDay(day)} count={count}/>
        })}

      </div>
    </section>
  )
}

export default MenuSemaine
