import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import JharGov from '../assets/logos/Jhargov.png'
import Twitter from '../assets/logos/Twitter.png'
import ISB from '../assets/logos/ISB.png'
import LSE from '../assets/logos/LSE.png'
import IGC from '../assets/logos/IGC.png'
import GSU from '../assets/logos/GSU.png'
import UNSW from '../assets/logos/UNSW.png'
import JNU from '../assets/logos/JNU.png'

const LogoHover = css`
  filter: grayscale(100%);
  &:hover{
    filter: none;
  }
`

const PartnerLogo = (props) => {
  return(
    <div className="level-item has-text-centered">
      <div>
        <figure className='image is-96x96'>
          <img className='is-rounded' src={ props.src } alt="" css={ LogoHover }/>
        </figure>
      </div>
    </div>
  )
}

const Partners = () =>{
    return(
    <div>
        <section className='section p-6'>
        {/* Logos style 2 */}
        <div className='container'>
          <nav className="level">
            <PartnerLogo src={JharGov}/>
            <PartnerLogo src={Twitter}/>
            <PartnerLogo src={ISB}/>
            <PartnerLogo src={LSE}/>
            <PartnerLogo src={IGC}/>
            <PartnerLogo src={GSU}/>
            <PartnerLogo src={UNSW}/>
            <PartnerLogo src={JNU}/>
          </nav>
        </div>
      </section>
    </div>
    )
}

export default Partners



