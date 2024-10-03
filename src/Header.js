import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    <div className='header'>
      <img 
            className="header_logo"
            src={require('./1715487998amazon-logo-transparent.png')} alt="Amazon" />
        <div className="header_search">
            <input
            className='header_searchInput' type='text' />
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
            <div className='header_option'>
              <span className='header_option1'>Hello Guest</span>
              <span className='header_option2'>Sign in</span>
            </div>
            <div className='header_option'>
            <span className='header_option1'>Returns</span>
            <span className='header_option2'>& Orders</span>
            </div>
            <div className='header_option'>
            <span className='header_option1'>Your</span>
            <span className='header_option2'>Prime</span>
            </div>
            <div className='header_optionCart'>
              <ShoppingBasketIcon/>
              <span className='header_option2 header_cartCount'>0</span>
            </div>
        </div>

    </div>
    
  )
}

export default Header
