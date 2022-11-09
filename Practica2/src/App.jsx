// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.
import Posteos from './Componentes/Posteos'

import { useState } from 'react'

function App() {
  const [cantidadLikes, setCantidadLikes] = useState(0)
  
  const contarLikes=() => {
     setCantidadLikes(cantidadLikes => cantidadLikes + 1)
  }

  return (
    <>
      <h1>Total de likes: {cantidadLikes}</h1>
      <Posteos contarLikes={contarLikes}/>
    </>
  )
}

export default App
