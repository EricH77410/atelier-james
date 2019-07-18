import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Plat from './Plat'

const getPlats = graphql`
{
  plats: allContentfulPlat{
    edges{
      node{
        id
        title
        price
        description
        image {
          fluid(maxWidth:250, maxHeight:150) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

const getTodayMenu = graphql`
query($today:String!){
  plats:allContentfulPlat(filter: { category: { elemMatch: {title: {eq: $today}}}}){
    edges{
      node{
        title
        price
        description
        category {
          title
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`


const PlatList = ({day}) => {


  const {plats} = useStaticQuery(getPlats)
  console.log(plats)
  return (
    <div className="list-plat">
      <div className="list-plat-title">
        <h3>{day}</h3>
      </div>
      <div className="list-plat-content">
        { plats.edges.map(({node}) => {
          return <Plat key={node.id} plat={node}/>
        }) }
      </div>
      
    </div>
  )
}

export default PlatList
