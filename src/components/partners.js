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

const Partners = () =>{
    return(
    <div>
        <section className='section'>
        {/* Logos style 2 */}
        <div className='container'>
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
              <figure className='image is-96x96'>
                  <img className='is-rounded' src={JharGov} alt="" css={LogoHover}/>
                </figure>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
              <figure className='image is-96x96'>
                  <img className='is-rounded' src={Twitter} alt="" css={LogoHover}/>
                </figure>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
              <figure className='image is-96x96'>
                  <img className='is-rounded' src={ISB} alt="" css={LogoHover}/>
                </figure>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
              <figure className='image is-96x96'>
                  <img className='is-rounded' src={LSE} alt="" css={LogoHover}/>
                </figure>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
              <figure className='image is-96x96'>
                  <img className='is-rounded' src={IGC} alt="" css={LogoHover}/>
                </figure>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
              <figure className='image is-96x96'>
                  <img className='is-rounded' src={GSU} alt="" css={LogoHover}/>
                </figure>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
              <figure className='image is-96x96'>
                  <img className='is-rounded' src={UNSW} alt="" css={LogoHover}/>
                </figure>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
              <figure className='image is-96x96'>
                  <img className='is-rounded' src={JNU} alt="" css={LogoHover}/>
                </figure>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
    )
}

export default Partners



