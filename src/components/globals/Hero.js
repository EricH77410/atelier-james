import React from 'react'

import BackgroundImage from 'gatsby-background-image'

import { useStaticQuery, graphql } from 'gatsby'

const getDefaultImg = graphql`
query {
  file(relativePath: {eq: "back.jpg"}){
    childImageSharp {
      fluid(quality: 90, maxWidth: 2160){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = ({img, className, children, home}) => {
  const data = useStaticQuery(getDefaultImg)
  const image = img ? img: data.file.childImageSharp.fluid
  return (
    <BackgroundImage className={className} fluid={image} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default Hero
