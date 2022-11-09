import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h1>  Bievenidos al titulo {props.titulo} </h1>
        <p> {props.descripcion}</p>
    </div>
  )
}

export default Header