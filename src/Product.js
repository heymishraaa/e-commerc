import React from 'react'
import "./Product.css"

function Product({title, image, price, rating }) {
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                <p>⭐️</p>
            </div>
        </div>
        <img 
          src={"https://m.media-amazon.com/images/I/41+ZsplOPWL._SY445_SX342_.jpg"} 
          alt=""
        />
        <button>Add to Cart</button>
    </div>
  )
}

export default Product
