import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="main">
      <h1>L'Atelier de James</h1>
      <p>Votre traiteur italien</p>
    </section>
    
  </Layout>
)

export default IndexPage
