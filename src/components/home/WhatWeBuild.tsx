import * as React from 'react'
import Checkmark from '../Checkmark'

const config = require('../../config').build

export default function WhatWeBuild() {
  return (
    <section>
      <div className="what-we-build">
        <style jsx={true}>{`
          .what-we-build {
            @p: .center;
            max-width: 960px;
          }
          p.c {
            @p: .tc, .mt38;
          }
          .preview {
            @p: .flex, .justifyBetween, .itemsCenter, .mt96;
          }
          .preview img {
            height: 370px;
            width: auto;
          }
          .point {
            @p: .flex, .itemsCenter, .mt20;
          }

          .point:first-child {
            @p: .mt0;
          }

          .point p {
            @p: .ml16;
          }

          @media (max-width: 500px) {
            .what-we-build {
              @p: .relative;
              padding: 0 30px;
            }

            .what-we-build:after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 100px;
              background: linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))
            }

            p.c {
              text-align: left!important;
            }

            div.preview {
              @p: .mt38;
              flex-direction: column-reverse;
            }

            div.preview img {
              width: 100%;
              height: auto;
              @p: .mt38;
            }
          }
        `}</style>
        <h2>{ config.title }</h2>
        <p className="c">
          { config.subtitle }
        </p>
        <div className="preview">
          <img
            src={require('../../assets/graphics/build-screenshot.png')}
            alt=""
          />
          <div className="points">
            {
              config.bullets.map(keypoint => (
                <div className="point">
                  <Checkmark />
                  <p>{ keypoint }</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
