import React, { Component } from 'react'

import { Panel, Grid, Col, Row, Jumbotron, Image } from 'react-bootstrap';

import dummyTopicCache from '../TopicPage/DummyData.js'

import './LandingPage.css'

export default class LandingPageArchive extends Component {
  render() {
    return (
      <div className="archiveWrapper">

          <h2>- Archive -</h2>

          <Grid>
              <Row>
                  <Col md={3}>
                    <Panel className="archivePanel">
                        <Panel.Body>
                            <h4>
                            "Minimum Wage"
                            </h4>
                            <img src="./assets/politicsIcon.svg" alt="" width="200"/>
                            <p>
                                "SUMMARY GOES HERE"
                            </p>
                        </Panel.Body>
                    </Panel>
                  </Col>
                  <Col md={3}>
                    <Panel className="archivePanel">
                        <Panel.Body>
                            <h4>
                            "Minimum Wage"
                            </h4>
                            <img src="./assets/politicsIcon.svg" alt="" width="200"/>
                            <p>
                                "SUMMARY GOES HERE"
                            </p>
                        </Panel.Body>
                    </Panel>
                  </Col>
                  <Col md={3}>
                    <Panel className="archivePanel">
                        <Panel.Body>
                            <h4>
                            "Minimum Wage"
                            </h4>
                            <img src="./assets/politicsIcon.svg" alt="" width="200"/>
                            <p>
                                "SUMMARY GOES HERE"
                            </p>
                        </Panel.Body>
                    </Panel>
                  </Col>
                  <Col md={3}>
                    <Panel className="archivePanel">
                        <Panel.Body>
                            <h4>
                            "Minimum Wage"
                            </h4>
                            <img src="./assets/politicsIcon.svg" alt="" width="200"/>
                            <p>
                                "SUMMARY GOES HERE"
                            </p>
                        </Panel.Body>
                    </Panel>
                  </Col>
                  <Col md={3}>
                    <Panel className="archivePanel">
                        <Panel.Body>
                            <h4>
                            "Minimum Wage"
                            </h4>
                            <img src="./assets/politicsIcon.svg" alt="" width="200"/>
                            <p>
                                "SUMMARY GOES HERE"
                            </p>
                        </Panel.Body>
                    </Panel>
                  </Col>
              </Row>
          </Grid>


      </div>
    )
  }
}
