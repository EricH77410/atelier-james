import React from 'react'

import Plat from './Plat'

const PlatList = ({day, plats, count}) => {
  const cls = "list-plat-content count-"+count
  return (
    <div className="list-plat">
      <div className="list-plat-title">
        <h3><span>{day}</span></h3>
      </div>
      <div className={cls}>
        { plats.map(({node}) => {
          return <Plat key={node.id} plat={node}/>
        }) }
      </div>

    </div>
  )
}

export default PlatList
