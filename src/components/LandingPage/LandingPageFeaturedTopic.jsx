import React, { Component } from 'react'

import { Panel, Grid, Col, Row, Jumbotron, Image } from 'react-bootstrap';

import dummyTopicCache from '../TopicPage/DummyData.js'

import './LandingPage.css'

export default class LandingPageFeaturedTopic extends Component {
  render() {
    return (
      <div>
        
        <Jumbotron className="featuredTopicJumbotron" >
            <Grid>
                  {/* <div className="featuredTopicJumbotronInner"> */}
                    <Row>
                          <Col xs={12} md={12}>
                              <h3><strong>- Current Conversation -</strong></h3>
                          </Col>
                    </Row>
                    <Row>
                          <Col xs={12} md={12}>
                              <h2><strong>Minimum Wage in MPLS/STP</strong></h2>
                          </Col>
                    </Row>


        {/* CONTRIBUTORS */}
                    <Row>
                          <div >
                                  <Col xs={12} md={12} lg={2}>
                                      <img className="featuredTopicPhotoLeft contrib1" src="/assets/headshot1.jpeg"/>
                                  </Col>
                                  <Col xs={12} md={12} lg={4}>
                                      <div className="contributorText">
                                          <h3>
                                              <strong>
                                                  {dummyTopicCache.contributor1FirstName} {dummyTopicCache.contributor1LastName}
                                              </strong>
                                          </h3>
                                          <p>
                                          {dummyTopicCache.bio1}
                                          </p>
                                      </div>
                                  </Col>
                          </div>

                          <div >
                                  <Col xs={12} md={12} lg={4}>
                                      <div className="contributorText">
                                              <h3>
                                                  <strong>
                                                      {dummyTopicCache.contributor2FirstName} {dummyTopicCache.contributor2LastName}
                                                  </strong>
                                              </h3>
                                              <p>
                                                  {dummyTopicCache.bio2}
                                              </p>
                                      </div>
                                  </Col>
                                  <Col  xs={12} md={12} lg={2}>
                                      <img className="featuredTopicPhotoRight contrib2" src="/assets/headshot2.jpeg"/>
                                  </Col>
                          </div>
                  </Row>

                <Row>
                        <Col xs={12} md={12}>
                            <h3>Published: April 16, 2018</h3>
                        </Col>
                </Row>
                  {/* </div> */}
            </Grid>
          </Jumbotron>
      </div>
    )
  }
}
