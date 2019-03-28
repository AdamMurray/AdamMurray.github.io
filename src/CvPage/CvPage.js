import React, { Component } from 'react'
import { css } from 'emotion'

import './CvPage.css'

export class CvPage extends Component {
  render() {
    return (
      <section id="cv" className="cv">
        <div className="cv__section cv__section--header">
          <div className="cv__subsection">
            <h2
              className={css`
                margin-bottom: 0;
              `}
            >
              Adam Murray
            </h2>
            <p
              className={css`
                color: white;
                text-transform: uppercase;
                font-style: italic;
                margin: 5px 0;
              `}
            >
              Web Developer
            </p>
            <p
              className={css`
                color: #f268ff;
                margin-top: 10px;
                text-transform: uppercase;
              `}
            >
              Curriculum Vitae
            </p>
          </div>
        </div>

        <div className="cv__section cv__section--experience">
          <div className="cv__subsection">
            <h3>Biography</h3>

            <div className="cv__experience">
              <div className="cv__experience__description">
                <p>
                  Graduated from the University of Glasgow in 2012 with a BSc in
                  Physics, achieving second class honours (division I).
                </p>
                <p>
                  Have over 5 years of web development experience in a variety
                  of industries, gaining experience with a large number of tools
                  and technologies.
                </p>
                <p>
                  Currently a freelance web developer based in London,
                  specialising in complex front-end application development
                  using React and associated tooling. On the lookout for
                  interesting full-time opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="cv__section cv__section--experience">
          <div className="cv__subsection">
            <h3>Experience</h3>

            <div className="cv__experience">
              <div className="cv__experience__year">2016-2018</div>
              <div className="cv__experience__company">
                <span
                  className={css`
                    font-weight: bold;
                  `}
                >
                  Synthace Ltd{' '}
                </span>
                <span className="cv__experience__position">
                  | Front-end Engineer
                </span>
              </div>
              <div className="cv__experience__description">
                <p>
                  Worked as part of a cross-disciplinary team of software
                  engineers and life scientists towards the creation of a
                  platform to enhance the workflow of biology.
                </p>
                <p>
                  Primary responsibilities involved developing and maintaining a
                  large and complex front-end code base, written using Polymer,
                  as part of a small front-end team.
                </p>
              </div>
            </div>

            <div className="cv__experience">
              <div className="cv__experience__year">2015-2016</div>
              <div className="cv__experience__company">
                <span
                  className={css`
                    font-weight: bold;
                  `}
                >
                  IntelligentPOS{' '}
                </span>
                <span className="cv__experience__position">
                  | Front-end Technical Lead
                </span>
              </div>
              {/* <div className="cv__experience__position">
                Front End Technical Lead
              </div> */}
              <div className="cv__experience__description">
                <p>
                  Led development of primary client-facing web application.
                  Completely refactored and revamped existing codebase, using
                  modern AngularJS best practices. Led the implementation of a
                  number of advanced features including a product management and
                  stock system. Took charge of implementing
                  mobile-responsiveness and progressive web app features in the
                  application.
                </p>
                <p>
                  Application stack: AngularJS (1.4.x), Sass, Gulp, Bower, NPM.
                </p>
              </div>
            </div>

            <div className="cv__experience">
              <div className="cv__experience__year">2013-2015</div>
              <div className="cv__experience__company">
                <span
                  className={css`
                    font-weight: bold;
                  `}
                >
                  Geeks Ltd{' '}
                </span>
                <span className="cv__experience__position">
                  | Junior Software Engineer
                </span>
              </div>
              {/* <div className="cv__experience__position">
                Junior Software Engineer
              </div> */}
              <div className="cv__experience__description">
                Developed bespoke web applications for a range of clients,
                primarily using Microsoft .NET technologies and an in-house
                code-generation tool called M#.
              </div>
            </div>
          </div>
        </div>

        <div className="cv__section cv__section--experience">
          <div className="cv__subsection">
            <h3>Skills</h3>

            <div className="cv__experience">
              <ul>
                <li>
                  HTML
                  <span
                    className={css`
                      color: #777;
                    `}
                  >
                    {' -'} 6+ years
                  </span>
                </li>
                <li>
                  CSS
                  <span
                    className={css`
                      color: #777;
                    `}
                  >
                    {' -'} 6+ years
                  </span>
                </li>
                <li>
                  JavaScript
                  <span
                    className={css`
                      color: #777;
                    `}
                  >
                    {' -'} 5+ years
                  </span>
                </li>
                <li>
                  React
                  <span
                    className={css`
                      color: #777;
                    `}
                  >
                    {' -'} >1 years
                  </span>
                </li>
                <li>
                  Polymer
                  <span
                    className={css`
                      color: #777;
                    `}
                  >
                    {' -'} 2 years
                  </span>
                </li>
                <li>
                  Node
                  <span
                    className={css`
                      color: #777;
                    `}
                  >
                    {' -'} 1+ years
                  </span>
                </li>
                <li>
                  Rich UI development
                  <span
                    className={css`
                      color: #777;
                    `}
                  >
                    {' -'} 4+ years
                  </span>
                </li>
                <li>Excellent written communication skills</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cv__section cv__section--education">
          <div className="cv__subsection">
            <h3>Education</h3>

            <div className="cv__experience">
              <div className="cv__experience__year">2008-2012</div>
              <div className="cv__experience__company">
                University of Glasgow
              </div>
              <div className="cv__experience__position">
                Bachelor in Science
              </div>
              <div className="cv__experience__description">
                <p>Physics (Second class honours, division i)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
