import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'

const AdminProductItem = ({item, img, del, editItem}) => {
  const id = item.sys.id
  return (
    <div className="plat-card card">
      <img className="card-img-top" src={img.fields.file['en-US'].url} />
      <div className="plat-content card-body">
        <h4 className="plat-card-title">{item.fields.title['en-US']}</h4>
        {item.fields.description ? <p className="plat-card-description">{item.fields.description['en-US']}</p>:''}
        {item.fields.price ? <span className="span-left">{item.fields.price['en-US']}</span>: ''} 
        <span className="span-right"> <FaEdit onClick={() => editItem(id)}/> <FaTrash onClick={() => del(id)}/></span>       
      </div>
    </div>
  )
}

export default AdminProductItem
