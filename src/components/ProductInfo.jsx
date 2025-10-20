import React from 'react'



const ProductInfo = () => {

    const productInfo = {name : "Laptop", price: '$999', availability: 'In Stock'}

  return (
    <div>
        <h2>Product Information</h2>
        <p>Name: {productInfo.name}</p>
        <p>Price: {productInfo.price}</p>
        <p>Availability: {productInfo.availability}</p>
    </div>
  )
}

export default ProductInfo