import React, { Component } from 'react'

import { Panel, Jumbotron, Image, Grid, Row, Col } from 'react-bootstrap';

import dummyTopicCache from './DummyData.js'


export default class TopicContributors extends Component {
  render() {
    return (
      <div className="contributorsSection">
            <Grid>
                <Row>
                    <Col xs={12} md={6}>
                        <div >
                        <Panel className="contributorPanel ">
                            <Panel.Body>
                                <Col xs={4} md={4}>
                                    <Image className="contributorPhoto contrib1" src="/assets/headshot1.jpeg" rounded responsive/>
                                </Col>
                                <Col xs={8} md={8}>
                                    <div className="contributorText">
                                        <h3>
                                            <strong>
                                                {dummyTopicCache.contributor1FirstName} {dummyTopicCache.contributor1LastName}
                                            </strong>
                                        </h3>
                                        <i>
                                        {dummyTopicCache.bio1}
                                        </i>
                                    </div>
                                </Col>
                            </Panel.Body>
                        </Panel>
                        </div>
                    </Col>

                    <Col xs={12} md={6}>
                        <div >
                        <Panel className="contributorPanel ">
                            <Panel.Body>
                                <Col xs={8} md={8}>
                                    <div className="contributorText">
                                            <h3>
                                                <strong>
                                                    {dummyTopicCache.contributor2FirstName} {dummyTopicCache.contributor2LastName}
                                                </strong>
                                            </h3>
                                            <i>
                                                {dummyTopicCache.bio2}
                                            </i>
                                    </div>
                                </Col>
                                <Col  xs={4} md={4}>
                                    <Image className="contributorPhoto contrib2" src="/assets/headshot2.jpeg" rounded responsive/>
                                </Col>
                            </Panel.Body>

                        </Panel>
                        </div>
                    </Col>
                </Row>
            </Grid>

        
      </div>
    )
  }
}
