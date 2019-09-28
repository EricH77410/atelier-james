import React from 'react'
import Hero from './Hero'

import { useStaticQuery, graphql } from 'gatsby'

const getDefaultImg = graphql`
query {
  file(relativePath: {eq: "menu-bkg.jpg"}){
    childImageSharp {
      fluid(quality: 90, maxWidth: 900){
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

const MenuJourTableau = ({day, plats}) => {
  const data = useStaticQuery(getDefaultImg)
  return (
    
    <section name="menu-jour-tableau">
      <Hero className="menu-background" img={data.file.childImageSharp.fluid}>
        <div className="menu-jour-tableau-container">
          <h1>Au menu ce {day}</h1>
          { plats.map(item => <h2 key={item.node.id}>- {item.node.title}</h2>) }
        </div>    
      </Hero>
    </section>
  )
}

export default MenuJourTableau
