/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header(props) {

    const {countCartItems} = props

    return (
        
      <header className="row">
      <div className="logo" >
        <Link to="/">
          GamerLand
        </Link>
        <img src="/assets/2923485.svg"/>
       
      </div>
      <div className="cart">
        <Link to="/cart"><img src="/assets/cart-icon.svg"/>{' '}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>) : ('')}
         
        </Link>{''}
            
      </div>
     
    </header>
        
    )
}
