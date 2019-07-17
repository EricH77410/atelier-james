import React, { Component } from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import Title from './globals/Title'

// const getCat = graphql`
// {
//   categories: allContentfulCategory {
//     edges {
//       node {
//         title
//       }
//     }
//   }
// }
// `

// const categories = useStaticQuery(getCat)

class AdminProduct extends Component {

  state = {
    days: ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
    title: '',
    price: 0,
    description: '',
    image: '' 
  }

  handleTitle = (e) => {
    this.setState({title: e.target.value})
  }

  handlePrice = (e) => {
    this.setState({price: e.target.value})
  }

  handleDescription = (e) => {
    this.setState({description: e.target.value})
  }

  handleImage = (e) => {
    this.setState({image: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
    }
    console.log(obj)
  }

  render() {
    return (
      <section className="admin-product container">
        <Title title="Ajout d'un plat" />
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label htmlFor="title">Titre</label>
            <input value={this.state.title} onChange={this.handleTitle} type="text" className="form-control" name="title" id="title" placeholder="Poulet aux olives"/>
          </div>

          <div className="form-group">
            <label htmlFor="price">Prix</label>
            <input value={this.state.price} onChange={this.handlePrice} type="text" className="form-control" name="price" id="price" placeholder="12,90"/>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input value={this.state.description} onChange={this.handleDescription} type="text" className="form-control" name="description" id="description" placeholder="une courte description"/>
          </div>

          <div className="form-group">
            <label htmlFor="category">Categorie</label>
            <select multiple className="form-control" id="category">
              <option>Entrée</option>
              <option>Plat</option>
              <option>Dessert</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="jour">Categorie</label>
            <select multiple className="form-control" id="jour">
              {this.state.days.map((jour,ind) => {
                return <option key={ind}>{jour}</option>
              })}
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-block text-capitalize mt-5">submit</button>
        </form>
      </section>
    )
  }
}

export default AdminProduct
