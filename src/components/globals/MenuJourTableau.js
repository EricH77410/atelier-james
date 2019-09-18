import React from 'react'


const MenuJourTableau = ({day, plats}) => {
  
  return (
    <section name="menu-jour-tableau">

      <div className="menu-jour-tableau-container">
        <h1>Au menu ce {day}</h1>
        { plats.map(item => <h2 key={item.node.id}>- {item.node.title}</h2>) }
      </div>
    </section>
  )
}

export default MenuJourTableau
