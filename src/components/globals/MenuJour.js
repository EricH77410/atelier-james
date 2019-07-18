import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Hero from './Hero'
import Title from './Title'

import PlatList from './PlatList'

// const getTodayMenu = graphql`
// query($today:String!){
//   today:allContentfulPlat(filter: { category: { elemMatch: {title: {eq: $today}}}}){
//     edges{
//       node{
//         title
//         price
//         description
//         category {
//           title
//         }
//         image {
//           fluid {
//             ...GatsbyContentfulFluid
//           }
//         }
//       }
//     }
//   }
// }
// `

const getTheDay = () => {
  return 'Jeudi'
}

const MenuJour = () => {
  // const {today} = useStaticQuery(getTodayMenu)
  // console.log(today)
  return (
    <section name="menu-jour">
      <Hero>
        <Title title="menu du jour"/>
      </Hero>

      <div className="menu-jour menu-container">
        <PlatList day={getTheDay()} />
      </div>
    </section>
  )
}

export default MenuJour
