import { useState } from 'react'
import React from 'react'

const ProductosDash = () => {
    const [itemSeleccionado, setItemSeleccionado] = useState()
    const [descuentoSeleccionado, setDescuentoSeleccionado] = useState(1)
  
    let lista =[
        {id:1, producto:'camisa', precio:1000},
        {id:2, producto:'medias', precio:500},
        {id:3, producto:'pañuelo', precio:100},
        {id:4, producto:'pantalon', precio:2000}
    ]

    const findProduct= lista.find(item => item.producto === itemSeleccionado) || 0

  return (
    <div>
        {lista.map(item => <li key={item.id}>{item.producto} - {item.precio}</li>)}

        <form>
            <select name="" id="" onChange={(e)=> setItemSeleccionado(e.target.value)}>
               <option disable selected value="">Producto</option> 
               {lista.map(item => <option key={item.id} value={item.producto}> {item.producto}</option>)}
            </select>

            <select name="descuento" id="descuento" onChange={(e) => setDescuentoSeleccionado(e.target.value) }>
            <option disable selected value="">Descuento</option>
                <option value={0.9}>10%</option>
                <option value={0.8}>20%</option>
                <option value={0.7}>30%</option>
            </select>
            <h3>Elemento seleccionado: {itemSeleccionado} </h3>
               {findProduct?.precio*descuentoSeleccionado}
        </form>

    </div>
  )
}

export default ProductosDash