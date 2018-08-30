import * as React from 'react'
// import 'graphiql/graphiql.css'
import '../../styles/graphiql-dark.css'
import MarkdownGraphiQL from '../MarkdownGraphiQL'
import { simpleQuery } from '../../data/LandingPlayground'
import Link from 'gatsby-link'
import { CSSTransitionGroup } from 'react-transition-group'

const config = require('../../config').playground

interface State {
  showNextStep: boolean
}

export default class LandingPlayground extends React.Component<{}, State> {
  private firstExecution = true
  constructor() {
    super()
    this.state = {
      showNextStep: false,
    }
  }
  render() {
    return (
      <section className="landing-playground">
        <style jsx={true}>{`
          .landing-playground {
            @p: .pt96, .bgDarkerBlue, .pb38;
          }
          .graphiql {
            @p: .flex, .center, .justifyCenter, .mv96;
            max-width: 960px;
            height: 500px;
          }
          .graphiql :global(.variable-editor) {
            @p: .dn;
          }
          .graphiql :global(.docExplorerWrap) {
            @p: .dn;
          }
          .graphiql :global(.graphcool-execute-button) :global(svg) {
            top: -1px;
            left: 3px;
          }
          h1 {
            @p: .tc, .white;
          }
          p {
            @p: .tc, .white50, .mt25;
          }
          h3 {
            @p: .white, .tc, .f20, .fw6, .mb25;
          }
          .center-container {
            @p: .center, .flex, .justifyCenter, .pb60;
            max-width: 960px;
          }
          @media (max-width: 900px) {
            .landing-playground {
              @p: .dn;
            }
          }
        `}</style>
        <style jsx={true} global={true}>{`
          .playground-enter {
            opacity: 0.01;
          }
          .playground-enter.playground-enter-active {
            opacity: 1;
            transition: opacity 500ms ease-in;
          }
          .playground-leave {
            opacity: 1;
          }
          .playground-leave.playground-leave-active {
            opacity: 0.01;
            transition: opacity 300ms ease-in;
          }
        `}</style>
        <h1>{ config.title }</h1>
        <p>{ config.subtitle }</p>
        <div className="graphiql">
          <MarkdownGraphiQL
            literal={simpleQuery(config.api)}
            playground={true}
            disableResize={true}
            disableQueryHeader={true}
            onExecuteQuery={this.showNextStep}
          />
        </div>
        <CSSTransitionGroup
          transitionName="playground"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.state.showNextStep &&
            <div className="center-container">
              <div>
                <h3>{ config.transition }</h3>
                <Link to="/advanced/0-clients/">
                  <div className="btn small">{ config.cta }</div>
                </Link>
              </div>
            </div>}
        </CSSTransitionGroup>
      </section>
    )
  }

  private showNextStep = () => {
    if (this.firstExecution) {
      this.firstExecution = false
    } else {
      setTimeout(() => {
        this.setState({ showNextStep: true })
      }, 500)
    }
  }
}
