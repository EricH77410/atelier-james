/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import './bootstrap.min.css'
import "./layout.css"

import NavBar from "./globals/Navbar"
import Footer from './globals/Footer'


const Layout = ({ children }) => {

  return (
    <>
      <NavBar />
        {children}
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
