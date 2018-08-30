import * as React from 'react'
import LeftColumn from './LeftColumn'
import OptionalSteps from '../Steps/OptionalSteps'
import Duration from '../Duration'
import Steps from '../Steps/Steps'
import { Step } from '../../types'
import { getTotalDuration } from '../../utils/getTotalDuration'

const config = require('../../config')

interface Props {
  steps: { [key: string]: Step[] }
  location: any
}

export default function IntroSteps({ steps, location }: Props) {
  const basicsDuration = getTotalDuration(steps.basics)

  const introTutorial = config.tutorials.content.filter(tuto => tuto.category === 'Introduction')

  return (
    <div className="intro-steps">
      <style jsx={true}>{`
        .intro-steps {
          @p: .mt38, .pt10;
        }
        .steps-content {
          @p: .flex;
        }
        .steps-content :global(.steps-description) h3 {
          @p: .mt0;
        }
        .basic-graphql {
          @p: .relative;
          top: -3px;
        }
        .advanced-graphql {
          margin-top: 196px;
        }
        .steps-list {
          @p: .w50;
        }
        p {
          @p: .black30;
        }
        .steps-content :global(.steps-description) .time {
          @p: .justifyEnd, .pr38, .mt16;
        }
        .duration {
          @p: .mt16, .mr38, .flex, .justifyEnd;
        }
        h3 {
          @p: .fw6;
        }
        @media (max-width: 500px) {
          .steps-content :global(.steps-description) {
            display: none;
          }
          div.steps-list {
            @p: .w100;
          }
        }
      `}</style>
      <div className="steps-content">
        <LeftColumn className="steps-description" light={true}>
          <div className="basic-graphql">
            <h3>{ introTutorial[0].section }</h3>
            <div className="duration">
              <Duration duration={basicsDuration} total={true} />
            </div>
            <p>
              { introTutorial[0].description }. {' '}
            </p>
          </div>
          <div className="advanced-graphql">
            <h3>{ introTutorial[1].section }</h3>
            <p>
              { introTutorial[1].description }
            </p>
          </div>
        </LeftColumn>
        <div className="steps-list fade-before">
          <Steps
            steps={steps.basics}
            location={location}
            highlightFirst={true}
            showLast={false}
          />
          <OptionalSteps steps={steps.advanced} location={location} />
        </div>
      </div>
    </div>
  )
}
