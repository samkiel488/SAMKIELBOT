import React from 'react'

const Person = () => {
  return (
        <Details 
            img="/favicon.png" 
            name = "samkiel"
            age = {12}
        />
  )
}


const Details = ({img, name, age}) => {
  return (
    <div>
        <img src={img} alt={name} width={200} />
        <h1>Name: {name} </h1>
        <h2>Age: {age} </h2>
    </div>
  )
}


export default Person