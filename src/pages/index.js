import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/globals/Hero'
import Banner from '../components/globals/Banner'

import MenuJour from '../components/globals/MenuJour'
import MenuSemaine from '../components/globals/MenuSemaine'
import Contact from '../components/globals/Contact'
//import Admin from '../components/AdminProduct'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero home="true" className="home-hero">
      <Banner title="L'atelier de james" info="votre traiteur - Biarritz"/>
    </Hero>
    <section className="main">
      <MenuJour />
      <MenuSemaine />
      <Contact />
     <div name="test">
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet recusandae vitae cum aspernatur est alias eligendi repudiandae laudantium ratione, perferendis, fugiat eaque. Maiores sapiente amet id ducimus dolorum. Dolor, incidunt?</p>
     </div>
    </section>
    
  </Layout>
)

export default IndexPage
