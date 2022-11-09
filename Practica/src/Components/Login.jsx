import { useState } from 'react'
import React from 'react'

const Login = () => {
    const [name, setName] = useState('')

    const handleSubmit= (e) => {
        e.preventDefault()
         if(name.length > 3){
               alert('Bienvenido'+ {name})
               e.target.reset()
               setName('')
         }   
     }

  return (
    <form onSubmit={handleSubmit}>
    {name}
       <label>Nombre</label>
       <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
       <label >Password</label> 
       <input type="password" /> 
       <button type="submit">Submit</button>
    </form>
  )
}

export default Login