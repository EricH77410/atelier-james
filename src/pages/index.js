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
    days: ['Lundi', 'Mardi', 'Mercredi', "Jeudi", 'Vendredi', 'Samedi', 'Dimanche']
  }

  componentDidMount() {
    this.setState(()=>{
      return {category: this.props.data.categories.edges.map(({node}) => {return node.title} )}
    })
  }

  getToday(){
    return 'Jeudi'
  }

  getPlatsToday(){
    return this.state.plats
  }

  render() {
    console.log(this.state);
    return (
      <Layout>
        <SEO title="Home" />
        <Hero home="true" className="home-hero">
          <Banner title="L'atelier de james" info="votre traiteur - Biarritz"/>
        </Hero>
        <section className="main">
          <MenuJour day={this.getToday()} plats={this.getPlatsToday()}/>
          <MenuSemaine plats={this.getPlatsToday()}/>
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
          fluid(maxWidth:250, maxHeight:150) {
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
