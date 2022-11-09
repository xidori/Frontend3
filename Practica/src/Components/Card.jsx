import { useState } from 'react'
import React from 'react'


const Card = ({post, sumar}) => {
//Si llegan a ser muchos items se puede
// const {titulo,texto,likes}=post
// y al colocarlo seria   <h3>{titulo}</h3>
//<button onClick={sumar}>ME GUSA </button>

const [total, setTotal] = useState(0)


return (
    <>
        <h3>{post.titulo}</h3>
        <p>{post.texto}</p>
        <p>{total}</p>
        <button onClick={()=>{sumar();  setTotal(total => total + 1)}}>ME GUSTA </button>
    </>
  )
}

export default Card