import React from 'react'

import { css } from '@emotion/react'

import DataAnalytics from '../assets/icons/DATA ANALYTICS.png'
import StratCom from '../assets/icons/STRATEGIC COMMUNICATIONS.png'
import PolicyAnalysis from '../assets/icons/POLICY ANALYSIS.png'
import ResearchOps from '../assets/icons/FIELD SURVEYS.png'
import GeoAnalytics from '../assets/icons/GIS MAPPING.png'
import ImpactAssessment from '../assets/icons/IMPACT ASSESSMENT.png'
import ProjectManagement from '../assets/icons/PROJECT MANAGEMENT.png'
import KnowledgeManagement from '../assets/icons/KNOWLEDGE MANAGEMENT.png'

const LabelText = css`
    font-size: 1.2rem;
`

const ExpertiseIcons = (props) => {
    return(
        <div className='level-item has-text-centered'>
        <div>
            <figure className='image is-128x128'>
                <img src={ props.src } alt="" />
                <p className='heading' css={LabelText}>{props.text}</p>
            </figure>
        </div>
    </div>
    )
}

const Expertise = () => {
    return(
        <div className='container'>
            <div className='pt-6'>
                <p className='subtitle is-size-4-fullhd is-size-5-desktop has-text-centered'>
                    We partner with governments, non-profits, social media firms and academic institutes throughout the world and provide a mix of research,
                    advisory, analytics, design and communication services. We have expertise in the below topics.
                </p>
            </div>
            <nav className='level p-3'>
                <ExpertiseIcons src = { DataAnalytics } text='Data Analytics'/>
                <ExpertiseIcons src = { StratCom } text='Strategic Communications'/>
                <ExpertiseIcons src = { PolicyAnalysis } text='Policy Analysis'/>
                <ExpertiseIcons src = { ResearchOps } text='Research Operations'/>
            </nav>
            <nav className='level p-3'>
                <ExpertiseIcons src = { GeoAnalytics } text='Geospatial Analysis'/> 
                <ExpertiseIcons src = { ImpactAssessment } text='impact Assessment'/>
                <ExpertiseIcons src = { ProjectManagement } text='Project management'/>
                <ExpertiseIcons src = { KnowledgeManagement } text='knowledge management'/>
            </nav>
        <div className="block"></div>
        </div>
        
    )
}

export default Expertise