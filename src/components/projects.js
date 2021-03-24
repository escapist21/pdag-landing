import React from 'react'
import {Link} from 'gatsby'

import { css } from '@emotion/react'

const HeroButton = css`
    background-color: #6b3234;
    color:white;
    :hover{
        color:#fbefca;
    }
`
const MediaImage = css`
    height: 256px;
    width: 256px;
`
const TitleStyles = css`
    color: #6b3234;
`

const FeaturedProjects = (props) => {
    return(
        <article className='media'>
            <figure className='media-left'>
                <p>
                    <img src={props.src} css={ MediaImage }/>
                </p>
            </figure>
            <div className='media-content'>
                <div className='content'>
                    <p className='title is-size-4-touch has-text-weight-normal' css={TitleStyles}>{props.title}</p>
                    <p className='subtitle is-4 is-size-5-desktop is-size-6-touch'>{props.excerpt}</p>
                    <Link className='button' css={HeroButton} to={props.href}><p className='is-uppercase has-text-weight-medium'>read more</p></Link>
                </div>
            </div>
        </article>
    )
}

const OtherProjects = (props) => {
    return(
        <article className='media'>
            <div className='media-content'>
                <div className='content'>
                    <p className="title is-3 has-text-weight-medium" css={TitleStyles}>{props.title}</p>
                    <p className='subtitle is-4 is-size-5-desktop is-size-6-touch'>{props.excerpt}</p>
                </div>
            </div>
        </article>
    )
}

const ProjectsSection = () => {
    return(
        <div className='container'>
            <div className='columns'>
                <div className='column is-three-fifths pl-0 pr-6 pb-6'>
                    <p className='title is-size-2-widescreen is-size-3-desktop is-size-5-touch' css={TitleStyles}>
                        Featured Projects
                    </p>
                    <FeaturedProjects src="https://bulma.io/images/placeholders/256x256.png" title='Lorem Ipmsum Dolor Sit Amet' 
                    excerpt='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt' href="#" />
                    <FeaturedProjects src="https://bulma.io/images/placeholders/256x256.png" title='Lorem Ipmsum Dolor Sit Amet' 
                    excerpt='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt' href="#" />
                    <FeaturedProjects src="https://bulma.io/images/placeholders/256x256.png" title='Lorem Ipmsum Dolor Sit Amet' 
                    excerpt='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt' href="#" />
                    <FeaturedProjects src="https://bulma.io/images/placeholders/256x256.png" title='Lorem Ipmsum Dolor Sit Amet' 
                    excerpt='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt' href="#" />
                </div>
                <div className='divider is-vertical'></div>
                <div className='column'>
                    <p className='title is-size-2-widescreen is-size-3-desktop is-size-5-touch' css={TitleStyles}>
                        Other Projects
                    </p>
                    <OtherProjects title='Lorem Ipmsum Dolor Sit Amet' excerpt='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt'/>
                    <OtherProjects title='Lorem Ipmsum Dolor Sit Amet' excerpt='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt'/>
                    <OtherProjects title='Lorem Ipmsum Dolor Sit Amet' excerpt='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt'/>
                    <OtherProjects title='Lorem Ipmsum Dolor Sit Amet' excerpt='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt'/>
                    <OtherProjects title='Lorem Ipmsum Dolor Sit Amet' excerpt='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt'/>
                    <div className='block'></div>
                    <Link className='button is-right' css={ HeroButton } to='#'><p className='is-uppercase has-text-weight-medium'>View More</p></Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection