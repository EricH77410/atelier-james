import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/globals/Hero'
import Banner from '../components/globals/Banner'

import MenuJour from '../components/globals/MenuJour'
import MenuSemaine from '../components/globals/MenuSemaine'
import Contact from '../components/globals/Contact'

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
    </section>
    
  </Layout>
)

export default IndexPage
