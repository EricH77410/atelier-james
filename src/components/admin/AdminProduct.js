import React, { Component } from 'react'
import { createClient } from 'contentful-management'
import { spaceId, contentTypeID, Content_Token } from '../../variables/ContentFul'

import Title from '../globals/Title'


const client = createClient({
  accessToken: Content_Token
})


class AdminProduct extends Component {

  state = {
    days: ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
    title: '',
    price: 0,
    description: '',
    image: '',
    catIds: [],
    loading: false 
  }

  componentDidMount(){    

  }

  createAsset = () =>{
    this.setState({loading: true})
    const tabImg = this.state.image.split('/')
    const imgName = tabImg[tabImg.length-1]
    client.getSpace(spaceId)
      .then((space) => space.getEnvironment('master'))
      .then((env) => env.createAsset({
        fields: {
          title: {
            'en-US': imgName
          },
          file: {
            'en-US': {
              contentType: 'image/jpeg',
              fileName: imgName,
              upload: this.state.image
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
    console.log('CreateAsset: '+ assetId)
    //Creation de l'entry
    client.getSpace(spaceId)
      .then((space)=>space.getEnvironment('master'))
      .then((env)=>env.createEntry(contentTypeID,{
        fields: {
          title: {'en-US':this.state.title},
          description: {'en-US':this.state.description},
          price: {'en-US':parseInt(this.state.price,10)},
          image: {'en-US':{sys:{id: assetId, linkType:'Asset', type:'Link'}}}
        }
      }))
      .then((entry) => entry.publish())
      .then((entry) => {
        console.log(entry)
        this.setState({loading: false,title:'',description:'',image:'',price:0})
      })

      
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
  }

  handleCategories = (e) => {
    console.log(e.target.value)
  }

  handleJour = (e) => {
    console.log(e.target.value)
  }

  render() {
    return (
      <section className="admin-product container col-md-5">
        <Title title="Ajout d'un plat" />
        { this.state.loading ? <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>:'' }
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label htmlFor="title">Titre</label>
            <input value={this.state.title} onChange={this.handleTitle} type="text" className="form-control" name="title" id="title" placeholder="Poulet aux olives"/>
          </div>

          <div className="form-group">
            <label htmlFor="image">URL Image</label>
            <input type="tet" value={this.state.image} onChange={this.handleImage} className="form-control" name="image" id="image"/>
          </div>

          <div className="form-group">
            <label htmlFor="price">Prix</label>
            <input value={this.state.price} onChange={this.handlePrice} type="number" className="form-control" name="price" id="price" placeholder="12,90"/>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input value={this.state.description} onChange={this.handleDescription} type="text" className="form-control" name="description" id="description" placeholder="une courte description"/>
          </div>

          <div className="form-group">
            <label htmlFor="category">Categorie</label>
            <select multiple className="form-control" id="category" onChange={this.handleCategories}>
              <option>Entrée</option>
              <option>Plat</option>
              <option>Dessert</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="jour">Au menu</label>
            <select multiple className="form-control" id="jour" onChange={this.handleJour}>
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
