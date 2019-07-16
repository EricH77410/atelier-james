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
            {id:2, path:'/menu-jour', text:'menu du jour'},
            {id:3, path:'/menu-semaine', text:'menu de la semaine'},
            {id:2, path:'/about', text:'à propos'}
        ]
    }

    navbarHandler = () => {
        this.state.navbarOpen ? this.setState({navbarOpen:false, css:"collapse navbar-collapse"}) : this.setState({navbarOpen: true,css:"collapse navbar-collapse show"})
    }

    render() {
        return (
          <header className="site-header main_h>" role="banner">

        			<div className="row">
                	<Link className="logo" to="/">
        						<img className="rico-img" src={logo} alt="Logo" />
									</Link>

                	<div className="rico_mobile-toggle">
                    	<span></span>
                    	<span></span>
                    	<span></span>
                	</div>

        			<nav className="rico-nav">
        				<ul>
        					{this.state.links.map((item) => {
										return <li key={item.id}><Link to={item.path}>{item.text}</Link></li>
									})}
        				</ul>
        			</nav>

            	</div>

        	</header>
	)
{/*         	<div className="hero">
        		<div className="hero_milieu">
        			<div className="header_title">

        				<img src={logo} alt="Logo"/>
        			</div>
        		</div>
        		<div className="hero_bottom">
        			<h3>Traiteur - Epicerie fine</h3>
        			<h4>17 Avenue de Verdun</h4>
        			<h4>64200 BIARRITZ</h4>
        			<div className="hero_bottom__contact">
        				<h4>05.59.26.33.37</h4>
        				<h4>latelierdejamse64@yahoo.com</h4>
        			</div>
        		</div>
        	</div> */}
        
    }
}
