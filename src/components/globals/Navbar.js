import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.png'
//import { FaCartArrowDown } from 'react-icons/fa'

export default class NavBar extends Component {

    state = {
        navbarOpen: false,
        css: 'collapse navbar-collapse',
        links: [
            {id:1, path:'/', text:'home'},
            {id:2, path:'/#menu-jour', text:'menu du jour'},
            {id:3, path:'/#menu-semaine', text:'menu de la semaine'},
            {id:4, path:'/#about', text:'à propos'},
            {id:5, path:'/#contact', text:'contact'}
        ]
    }

    navbarHandler = () => {
        this.state.navbarOpen ? this.setState({navbarOpen:false, css:"collapse navbar-collapse"}) : this.setState({navbarOpen: true,css:"collapse navbar-collapse show"})
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light main-menu">
                <Link to="/" className="navbar-brand">
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
                                    <Link to={item.path} className="nav-link text-uppercase">{item.text}</Link>
                                </li>
                            )
                        } )}

                    </ul>
                </div>

            </nav>
        )
    }
}
