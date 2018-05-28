import React, { Component } from 'react'

import { Panel, Jumbotron, Image, Grid, Row, Col } from 'react-bootstrap';

import dummyTopicCache from './DummyData.js'


export default class TopicContributors extends Component {
  render() {
    return (
      <div>
            <Grid>
                <Row>
                    <Col xs={12} md={6}>
                        <Panel className="contributorPanel contrib1">
                            <Panel.Body>
                                <Col xs={4} md={4}>
                                    <Image className="contributorPhoto" src="/assets/headshot1.jpeg" rounded />
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
                    </Col>

                    <Col xs={12} md={6}>
                        <Panel className="contributorPanel contrib2">
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
                                    <Image className="contributorPhoto" src="/assets/headshot2.jpeg" rounded />
                                </Col>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>

            </Grid>

        
      </div>
    )
  }
}
