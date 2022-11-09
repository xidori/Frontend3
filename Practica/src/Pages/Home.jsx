import React from 'react'
import Header from '../Components/Header'
import posteos from  '../Components/data.json'
import Card from '../Components/Card'

const Home = ({sumar}) => {
  // variables que voy a pasar
   const texto='Hello'
  return (
    <div>
        <Header titulo={texto} descripcion='Esto es un ejemplo'/>
        {posteos.map((elemento)=> <Card key={elemento.id} post={elemento} sumar={sumar}/>)}
    </div>
  )
}

export default Home