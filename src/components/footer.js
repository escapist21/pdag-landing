import React from "react"

import {Link} from 'gatsby'
import PraxisLogo from '../assets/logos/PRAXIS LOGO.png'
import * as Styles from './footer.module.scss'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const NewsletterLogo = styled.img`
  flex-grow:0;
  flex-shrink:0;
  flex-basis: 128px;
  width: 144px;
  margin: 0;
`
const FooterLinkHover = css`
  :hover{
    color: #fbefca;
  }
`
const FooterHeader = css`
  color: white;
  font-size: 1em;

`
const FooterText = css`
  color: white;
  font-size: 0.75em
  letter-spacing: 0.1em;
`

const InputField = css`
  width: 175px;
`
const Footer = () => {
  return(
    <div>
      <footer className="footer pb-6">
        <div className='container'>
        <div className="columns is-centered">
          <div className='column'>
            <div className='menu'>
              <p className='menu-label is-upperclass has-text-weight-medium' css={ FooterHeader }>SITEMAP</p>
              <p><Link className='menu-label has-text-weight-medium' to='/' css={ FooterLinkHover }>HOME</Link></p>
              <p><Link className='menu-label has-text-weight-medium' to='#' css={ FooterLinkHover }>WHO WE ARE</Link></p>
              <p><Link className='menu-label has-text-weight-medium' to='/our-work' css={ FooterLinkHover }>OUR WORK</Link></p>
              <p><Link className='menu-label has-text-weight-medium' to='#' css={ FooterLinkHover }>OUR REFLECTIONS</Link></p>
              <p><Link className='menu-label has-text-weight-medium' to='' css={ FooterLinkHover }>CONTACT US</Link></p>
            </div>
          </div>
          <div className='column'>
            <div className='menu'>
              <p className='menu-label is-upperclass has-text-weight-medium' css={FooterHeader}>CONNECT WITH US</p>
              <p css={FooterText}>For Partnerships and Opportunities: </p>
              <p><Link className='menu-label has-text-weight-medium' to='mailto:connect@pdag.in' css={ FooterLinkHover}>connect@pdag.in</Link></p>
            </div>
          </div>
          <div className='column'>
            <p className='menu-label is-upperclass has-text-weight-medium' css={FooterHeader}>SUBSCRIBE</p>
            <p css={FooterText}>To our newsletter</p>
            <NewsletterLogo src={PraxisLogo} alt="" />
            <div className='field is-grouped'>
              <p className='control'>
                <input className='input is-small' type='text' placeholder='Email' css={InputField}/>
              </p>
              <p className='control'>
                <a className='button is-warning is-small is-uppercase has-text-weight-bold is-focused'> submit </a>
              </p>
            </div>
          </div>
          <div className='column'>
            <div className='menu'>
              <p className='menu-label is-upperclass has-text-weight-medium' css={FooterHeader}>CONTACT US</p>
              <p css={FooterText}>PDAG Consulting LLP</p>
              <p css={FooterText}>B 281, 2nd Floor, C R Park</p>
              <p css={FooterText}>New Delhi 110019</p>
              <div className='block'></div>
              <p css={FooterText}>+91 94344 49964</p>
              <p css={FooterText}>+91 81020 94157</p>
            </div>
          </div>
        </div>
        <div className="content has-text-centered hax-text-weight-medium">
          <p>
            © PDAG Consulting LLP, 2021. All rights reserved.
          </p>
        </div>
        </div>
      </footer>
      
    </div>
  )
}

export default Footer