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
            <div className='level-item has-text-centered'>
                <div>
                    <figure className='image is-128x128'>
                        <img src={ DataAnalytics } alt="" />
                        <p className='heading' css={LabelText}>Data Analytics</p>
                    </figure>
                </div>
            </div>
            <div className='level-item has-text-centered'>
                <div>
                    <figure className='image is-128x128'>
                        <img src={ StratCom } alt="" />
                        <p className='heading' css={LabelText}>Strategic Communications</p>
                    </figure>
                </div>
            </div>
            <div className='level-item has-text-centered'>
                <div>
                    <figure className='image is-128x128'>
                        <img src={ PolicyAnalysis } alt="" />
                        <p className='heading' css={LabelText}>Policy Analysis</p>
                    </figure>
                </div>
            </div>
            <div className='level-item has-text-centered'>
                <div>
                    <figure className='image is-128x128'>
                        <img src={ ResearchOps } alt="" />
                        <p className='heading' css={LabelText}>Research Operations</p>
                    </figure>
                </div>
            </div>
        </nav>
        <nav className='level p-3'>
            <div className='level-item has-text-centered'>
                <div>
                    <figure className='image is-128x128'>
                        <img src={ GeoAnalytics } alt="" />
                        <p className='heading' css={LabelText}>Geospatial Analysis</p>
                    </figure>
                </div>
            </div>
            <div className='level-item has-text-centered'>
                <div>
                    <figure className='image is-128x128'>
                        <img src={ ImpactAssessment } alt="" />
                        <p className='heading' css={LabelText}>Impact Assessment</p>
                    </figure>
                </div>
            </div>
            <div className='level-item has-text-centered'>
                <div>
                    <figure className='image is-128x128'>
                        <img src={ ProjectManagement } alt="" />
                        <p className='heading' css={LabelText}>Project Management</p>
                    </figure>
                </div>
            </div>
            <div className='level-item has-text-centered'>
                <div>
                    <figure className='image is-128x128'>
                        <img src={ KnowledgeManagement } alt="" />
                        <p className='heading' css={LabelText}>Knowledge Management</p>
                    </figure>
                </div>
            </div>
        </nav>
        <div className="block"></div>
        </div>
        
    )
}

export default Expertise