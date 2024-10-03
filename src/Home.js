import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className="home"> 
      <div className="home_container">
        <img className='home_image' src={require("./istockphoto-498301640-1024x1024.jpg")} 
         alt="" 
        />
        <div className='home_row'>
            <Product title="The Lean Startup" price={29.99} image="https://m.media-amazon.com/images/I/41+ZsplOPWL._SY445_SX342_.jpg" rating={5}/>
            <Product/>
        </div>
        <div className='home_row'>
            <Product/>
            <Product/>
            <Product/>
        </div>
        <div className='home_row'>
            <Product/>
        </div>

        </div>
    </div>
  );
}

export default Home;
