import React from 'react'
import {Link} from 'gatsby'
import { css } from '@emotion/react'
import HeroBannerImage from '../assets/hero-banner-img.jpg'

const HeroBackground = css`
    background-color: #fbefca;
`
const HeroHeadingColor = css`
    color: #6b3234;
`
const HeroButton = css`
    background-color: #6b3234;
    color:white;
    :hover{
        color:#fbefca;
    }
`
const HeroImage = css`
    display: block;
    margin-left:auto;
    margin-right:auto;
    filter:grayscale(100%);
`

const WorkHero = () => {
    return(
        <section className='hero is-halfheight'>
            <div className='container'>
                <div className='hero-body px-0'>
                    <div className='columns'>
                        <div className='column is-half p-0'>
                            <img src={ HeroBannerImage } alt="" css={ HeroImage } />
                        </div>
                        <div className='column px-6 pt-6' css={ HeroBackground }>
                            <p className='title is-size-1-widescreen is-size-2-desktop is-size-4-touch' css={ HeroHeadingColor }>Strategic advisory to CMO, <br />Government of Jharkhand</p>
                            <p className='subtitle is-size-3-widescreen is-size-4-desktop is-size-5-touch has-text-left'>Support in strategic communications, public policy & research across focal sectors
                            of sports, tourism, education, tribal welfare, rural development, healthcare and industries</p>
                            <Link className='button' css={ HeroButton } to='#'><p className='is-uppercase  has-text-weight-medium'>Read More</p></Link>
                        </div>
                    </div>
                </div>   
            </div>
        </section>
    )
}

export default WorkHero