import React, { Component } from 'react'
import { createClient } from 'contentful-management'
import { spaceId, contentTypeID, Content_Token } from '../../variables/ContentFul'

import Title from '../globals/Title'
import AdminProductItem from './AdminProductItem'

const client = createClient({
  accessToken: Content_Token,
})

export default class ProductList extends Component {

  state = {
    products: [],
    assets: []
  }

  componentDidMount() {
    let tabData = []
    let tabAssets = []
    client.getSpace(spaceId)
      .then((space) => {
        space.getEnvironment('master')
          .then((environment) => environment.getEntries(contentTypeID))
          .then((res) => {
            tabData = res.items.map((it) => {
              return it
            })
            console.log('Tab Data')
            this.setState({products: tabData})
          })
      })

      client.getSpace(spaceId)
        .then((space) => space.getAssets())
        .then((res) => {
          tabAssets = res.items.map((it) => {
            return it
          })
          this.setState({assets: tabAssets})
        })

        
  }

  getImg = (id) => {
    const asset = this.state.assets.filter((asset) => {
      return asset.sys.id === id
    })

    console.log('getImg: ', asset[0].toPlainObject())
    // return <img src={asset[0].fields.file['en-US'].url} alt={asset[0].fields.title['en-US'].url}/>
    return asset[0]
  }

  handleDelete = (id) => {
    console.log('Delete item: '+id)
  }

  handleEdit = (id) => {
    console.log('Edit item: '+id)
  }

  render() {
    return (
      <section className="admin-product-list container col-md-7">
        <Title title="Liste des Plats" />
        <ul className="list-items">
          { this.state.products.map((item) => {
            console.log(item.fields)
            return <li key={item.sys.id}>
              <AdminProductItem 
              item={item} 
              img={this.getImg(item.fields.image['en-US'].sys.id)}
              del={this.handleDelete}
              editItem={this.handleEdit} 
              />
             
            </li>
          }) }
        </ul>
      </section>
    )
  }
}
