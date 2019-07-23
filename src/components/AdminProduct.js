import React, { Component } from 'react'
import { createClient } from 'contentful-management'

import Title from './globals/Title'


const client = createClient({
  accessToken: "CFPAT-UBsFP32zmPnc51uD1bk_tFbfc5m1rk6hP8GyM-fHq58"
})
const spaceId = '8gqi5226j56q'

class AdminProduct extends Component {

  state = {
    days: ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
    title: '',
    price: 0,
    description: '',
    image: '',
    catIds: [] 
  }

  componentDidMount(){    
    client.getSpace(spaceId)
      .then((space) => {
        space.getEnvironment('master')
          .then((environment) => environment.getEntries({'content_type':'category'}))
          .then((res) => {
            console.log(res.items)
          })
      })
  }

  createAsset = () =>{
    //const src = this.state.image
    let img_id
    client.getSpace(spaceId)
      .then((space) => space.getEnvironment('master'))
      .then((env) => env.createAsset({
        fields: {
          title: {
            'fr': 'Img Rico Test'
          },
          file: {
            'fr': {
              contentType: 'image/jpeg',
              fileName: 'img_rico.jpeg',
              upload: 'https://i0.wp.com/rico-media.fr/atelier/wp-content/uploads/2015/07/cafe.jpg?fit=530%2C440&ssl=1'
            }
          }
        }
      }))
      .then((asset) => asset.processForAllLocales())
      .then((asset) => asset.publish())
      .then((asset) => {
        this.createEntry(asset.sys.id)
      })
      .catch(console.error)

  }

  createEntry = (assetId) => {
    const contentTypeId = 'plat'

    //Creation de l'entry
    client.getSpace(spaceId)
      .then((space)=>space.getEnvironment('master'))
      .then((env)=>env.createEntry(contentTypeId,{
        fields: {
          title: {'fr':'Rico plat'},
          description: {'fr':'Rico description'},
          price: {'fr':10.90},
          image: {'fr':{sys:{id: assetId, linkType:'Asset', type:'Link'}}}
        }
      }))
      .then((entry) => entry.publish())
      .then((entry) => console.log(entry))
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
      image: this.state.image
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
            <label htmlFor="image">Image</label>
            <input type="file" value={this.state.image} onChange={this.handleImage} className="form-control" name="image" id="image"/>
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
          <button className="btn btn-block btn-primary" onClick={this.createAsset}>Asset Test</button>
        </form>
      </section>
    )
  }
}

export default AdminProduct
