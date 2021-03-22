import React from 'react'

import wall1 from '../assets/walls/WALL 2A compressed.jpg'

const Carousel = () => {
    return(
        <div>
            <section className='hero'>
                <div className='hero-body p-0'>
                    <img src={wall1} alt='Policy advisory banner' />
                </div>
            </section>
        </div>
    )
}

export default Carousel