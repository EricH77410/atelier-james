import React from 'react'

import AdminProduct from '../components/admin/AdminProduct'
import ProductList from '../components/admin/ProductList'

const AdminPage = () => {
  return (
    <div className="row">
      <AdminProduct />
      <ProductList />
    </div>
  )
}

export default AdminPage
