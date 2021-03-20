import React from "react"

import Layout from '../components/layout'

import Carousel from '../components/carousel'
import Partners from '../components/partners'


import  '../styles/global.scss'


const HomePage = () => {
  return (
    <Layout>
      <Carousel />
      <Partners />
      <section className='section'>
        <div className='container'>
          <h1 className='title is-3'>The recent tweets will go here</h1>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage