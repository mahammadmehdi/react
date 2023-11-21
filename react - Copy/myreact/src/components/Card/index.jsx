import React from 'react'
import "./index.css"


const Card = ({img,title,description}) =>{
        return (

    <div className='card'> 
    <img src={img} alt="" />
    <h1>{title}</h1>
    <span>{description}</span>
    </div>
  )
    }


export default Card