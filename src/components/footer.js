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
    color: yellow;
  }
`

const Footer = () => {
  return(
    <div>
      <footer className="footer pb-6">
        <div className='container'>
        <div className="columns is-centered">
          <div className='column'>
            <div className='menu'>
              <p className={Styles.footer_header}>SITEMAP</p>
              <p><Link className='menu-label' to='/' css={ FooterLinkHover }>HOME</Link></p>
              <p><Link className='menu-label' to='/' css={ FooterLinkHover }>WHO WE ARE</Link></p>
              <p><Link className='menu-label' to='/' css={ FooterLinkHover }>OUR WORK</Link></p>
              <p><Link className='menu-label' to='/' css={ FooterLinkHover }>OUR REFLECTIONS</Link></p>
              <p><Link className='menu-label' to='/' css={ FooterLinkHover }>CONTACT US</Link></p>
            </div>
          </div>
          <div className='column'>
            <div className='menu'>
              <p className={Styles.footer_header}>CONNECT WITH US</p>
              <p className={Styles.footer_subhead}>For Partnerships and Opportunities: </p>
              <p><Link className='menu-label' to='mailto:connect@pdag.in' css={ FooterLinkHover}>connect@pdag.in</Link></p>
            </div>
          </div>
          <div className='column'>
            <p className={Styles.footer_header}>SUBSCRIBE</p>
            <p className={Styles.footer_subhead}>To our newsletter</p>
            <NewsletterLogo src={PraxisLogo} alt="" />
            <div className='field is-grouped'>
              <p className='control is-expanded'>
                <input className='input is-small' type='text' size='3' placeholder='Email' />
              </p>
              <p className='control'>
                <a className='button is-warning is-small'> > </a>
              </p>
            </div>
          </div>
          <div className='column'>
            <div className='menu'>
              <p className={Styles.footer_header}>CONTACT US</p>
              <p className={Styles.footer_subhead}>PDAG Consulting LLP</p>
              <p className={Styles.footer_subhead}>B 281, 2nd Floor, C R Park</p>
              <p className={Styles.footer_subhead}>New Delhi 110019</p>
              <p className='menu-label p-1'></p>
              <p className={Styles.footer_subhead}>+91 94344 49964</p>
              <p className={Styles.footer_subhead}>+91 81020 94157</p>
            </div>
          </div>
        </div>
        <div className="content has-text-centered">
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