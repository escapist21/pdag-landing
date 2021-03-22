import React from "react"

import Layout from '../components/layout'
import WorkHero from '../components/work-hero'
import ProjectsSection from '../components/projects'

import  '../styles/global.scss'


const OurWorkPage = () => {
  return (
    <Layout>
      <WorkHero />
      <ProjectsSection />
    </Layout>
  )
}

export default OurWorkPage