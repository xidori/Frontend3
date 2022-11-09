import React from 'react'
import ProductosDash from '../Components/ProductosDash'

const ShopDashboard = (props) => {
  return (
    <div>
         Bienvenido : {props.titulo}
         <ProductosDash/>
    </div>
  )
}

export default ShopDashboard