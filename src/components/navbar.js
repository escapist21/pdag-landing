import React from "react"

import { Link } from 'gatsby'
import { css } from '@emotion/react'
import logo from '../assets/logos/PDAG LOGO.png'

const Navbar = () => {
  return(
    <div>
      <nav className='navbar' role='navigation' aria-label='main-navigation'>
        <div className='container'>
          <div className='navbar-brand'>
            <a className='navbar-item' href='/'>
              <img src={logo} height='800' alt=""/>
            </a>
          </div>
          {/* <!--The Hamburger will go here --> */}
          <div className='navbar-menu'>
            <div className='navbar-end'>
              <Link className='navbar-item has-text-weight-medium' to='/'>HOME</Link>
              <div className='navbar-item has-dropdown is-hoverable'>
                <Link className='navbar-link has-text-weight-medium' to='#'>WHO WE ARE</Link>
                <div className='navbar-dropdown'>
                  <Link className='navbar-item is-uppercase has-text-weight-normal' to='#' >our team</Link>
                  <Link className='navbar-item is-uppercase has-text-weight-normal' to='#' >overview</Link>
                </div>
              </div>
              
              <Link className='navbar-item has-text-weight-medium' to='/our-work'>OUR WORK</Link>
              <div className='navbar-item has-dropdown is-hoverable'>
                <Link className='navbar-link is-uppercase has-text-weight-medium' to='#'>our reflections</Link>
                <div className='navbar-dropdown'>
                  <Link className='navbar-item is-uppercase has-text-weight-normal' to='#' >blog</Link>
                  <Link className='navbar-item is-uppercase has-text-weight-normal' to='#' >publications</Link>
                </div>
              </div>
              <Link className='navbar-item has-text-weight-medium' to='#'>CONTACT US</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar