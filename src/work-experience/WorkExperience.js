import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './WorkExperience.css';
import shopifyLogo from '../assets/shopify-logo.png'

function test() {
  return (
    <img src={shopifyLogo} alt="logo"/>
  )
}

class WorkExperience extends React.Component{
  render () {
    return (
      <div className="work-exp-container">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - present"
            iconStyle={{ background: '#303030'}}
            icon={test}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Shopify - Toronto</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: '#303030'}}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    )
  }
}

export default WorkExperience;