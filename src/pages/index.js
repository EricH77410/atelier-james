import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/globals/Hero'
import Banner from '../components/globals/Banner'

import MenuJour from '../components/globals/MenuJour'
import MenuSemaine from '../components/globals/MenuSemaine'
import Contact from '../components/globals/Contact'
import Info from '../components/globals/Info'
//import Admin from '../components/AdminProduct'

class IndexPage extends React.Component {

  state = {
    plats: this.props.data.plats.edges,
    category: [],
    days: ['Mardi', 'Mercredi', "Jeudi", 'Vendredi', 'Samedi']
  }

  componentDidMount() {
    this.setState(()=>{
      return {category: this.props.data.categories.edges.map(({node}) => {return node.title} )}
    })
  }

  getToday(){    
    //return this.state.days[new Date().getDay()]
    return 'Samedi'
  }

  getPlatsToday(){    
    let plats = []
    const day = this.getToday()
    this.state.plats.forEach((plat) => {
      plat.node.category.forEach((c) => {
        if (c.title === day){
          plats.push(plat)
        }
      })
    })
    return plats
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Hero home="true" className="home-hero">
          <Banner title="L'atelier de james" info="votre traiteur - Biarritz"/>
        </Hero>
        <section className="main">
          <MenuJour day={this.getToday()} plats={this.state.plats}/>
          <MenuSemaine plats={this.state.plats}/>
          <Info />
          <Contact />
      </section>
    </Layout>
  )
  }
}


export default IndexPage
export const query = graphql`{
  plats: allContentfulPlat{
    edges{
      node{
        id
        title
        price
        description
        category { title }
        image {
          fluid(maxWidth:500, maxHeight:500) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }

  categories:allContentfulCategory(skip: 7) {
    edges {
      node{
        title
      }
    }
  }
}

`
