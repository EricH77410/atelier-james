import React, { Component } from 'react'
//import { Link } from 'gatsby'
import { Link } from 'react-scroll'

import logo from '../../images/logo.png'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default class NavBar extends Component {

    state = {
        navbarOpen: false,
        css: 'collapse navbar-collapse',
        links: [
            {id:2, path:'menu-jour', text:'menu du jour'},
            {id:3, path:'menu-semaine', text:'menu de la semaine'},
            {id:1, path:'info', text:'info'},
            {id:5, path:'contact', text:'contact'}
        ],
        social: [
            {icon: <FaFacebook />, url:'https://facebook.com'},
            {icon: <FaInstagram />, url:'https://instagram.com'}
        ]
    }

    navbarHandler = () => {
        this.state.navbarOpen ? this.setState({navbarOpen:false, css:"collapse navbar-collapse"}) : this.setState({navbarOpen: true,css:"collapse navbar-collapse show"})
    }

    render() {
        return (
            <div className="menu-wrapper">
                <nav className="navbar navbar-expand-sm bg-light navbar-light main-menu">
                    <Link to="/" spy={true} smooth={true} offset={50} duration={1000} className="navbar-brand">
                        <img className="logo" src={logo} alt="Logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={this.state.css}>
                        <ul className="navbar-nav mx-auto">
                            {this.state.links.map((item, ind) => {
                                return (
                                    <li key={ind} className="nav-item menu-item">
                                        <Link to={item.path} spy={true} smooth={true} offset={0} duration={1000} className="nav-link text-uppercase">{item.text}</Link>
                                    </li>
                                )
                            } )}
                            <div className="social-link">
                            { this.state.social.map((item, ind) => {
                                return <a className="social-item" href={item.url} key={ind} target="_blank" rel="noopener noreferrer">{item.icon}</a>
                            })}
                            </div>
                        </ul>

                    </div>

                </nav>
            </div>

        )
    }
}
