
// El componente Post no tiene componentes hijos.
// ESTADO: Post debe tener un número para almacenar la cantidad de likes, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Post debe tener un método para manejar el click de su boton, el cual debe:
//  - sumar 1 like al posteo
//  - sumar en la cantidad total de likes contabilizada por App
//  - mostrar en consola qué posteo sumó un like
// PROPS: Post recibe todos los campos que muestra en pantalla: titulo, texto, likes y el método heredados para sumar en el total.
// Maqueta de Post:
//    h3
//    p
//    button       (este boton debe permitir sumar likes)
//    h5    (este h5 debe mostrar la cantidad de likes, pero si la misma es mayor a 10 debe decir "Más de 10 likes")
import { useState } from 'react'
import React from 'react'

const Post = ({publicacion,contarLikes}) => {
    const [nlike, setLike] = useState(0)

    const estadoPublicacion=() => {
       
        setLike(nlike => nlike + 1)
        console.info('Suma like:' + nlike + " - " + publicacion.titulo)
        contarLikes()
    }
    

  return (
    <>
        <h3>- {publicacion.titulo}</h3>   
        <p>{publicacion.texto}</p>
        <button onClick={estadoPublicacion}> Me gusta </button>  
        <h5>{nlike>5? "Mas de 20": nlike}</h5>
    
    </>
  )
}

export default Post