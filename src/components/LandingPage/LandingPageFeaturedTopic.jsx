import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Panel, Grid, Col, Row, Jumbotron, Image } from 'react-bootstrap';

import dummyTopicCache from '../TopicPage/DummyData.js'

import './LandingPage.css'

import moment from 'moment'
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
    user: state.user,
    login: state.login,
    state
  });

class LandingPageFeaturedTopic extends Component {

    componentDidMount(){
        this.props.dispatch({
            type: 'FETCH_NEW_TOPIC_LANDING_PAGE'
        })
    }

  render() {

    let featuredTopic = this.props.state.landing.featuredLandingPage;
    console.log('featuredTopic = ', featuredTopic);
    

    return (
        <Link className='landingLink' to="/topicPage"><div>
        
        <Jumbotron className="featuredTopicJumbotron" >
            <Grid>
                  {/* <div className="featuredTopicJumbotronInner"> */}
                    <Row>
                          <Col xs={12} md={12}>
                          <h3><strong>- Current Conversation -</strong></h3>
                              {/* Conditional rendering, only show the title after props have loaded. */}
                          </Col>
                    </Row>
                    <Row>
                          <Col xs={12} md={12}>
                              <h2><strong>{featuredTopic[0] && featuredTopic[0].topic_title}</strong></h2>
                          </Col>
                    </Row>


        {/* CONTRIBUTORS */}
                    <Row>
                          <div >
                                  <Col xs={12} md={12} lg={2}>
                                      <img className="featuredTopicPhotoLeft contrib1" src={featuredTopic[0] && featuredTopic[0].photo_url}/>
                                  </Col>
                                  <Col xs={12} md={12} lg={4}>
                                      <div className="contributorText">
                                          <h3>
                                              <strong>
                                              {featuredTopic[0] && featuredTopic[0].first_name} {featuredTopic[0] && featuredTopic[0].last_name}
                                              </strong>
                                          </h3>
                                          <p>
                                          {featuredTopic[0] && featuredTopic[0].bio}
                                          </p>
                                      </div>
                                  </Col>
                          </div>

                          <div >
                                  <Col xs={12} md={12} lg={4}>
                                      <div className="contributorText">
                                              <h3>
                                                  <strong>
                                                  {featuredTopic[1] && featuredTopic[1].first_name} {featuredTopic[1] && featuredTopic[1].last_name}
                                                  </strong>
                                              </h3>
                                              <p>
                                              {featuredTopic[1] && featuredTopic[1].bio}
                                              </p>
                                      </div>
                                  </Col>
                                  <Col  xs={12} md={12} lg={2}>
                                      <img className="featuredTopicPhotoRight contrib2" src={featuredTopic[1] && featuredTopic[1].photo_url}/>
                                  </Col>
                          </div>
                  </Row>

                <Row>
                        <Col xs={12} md={12}>
                            <h3>{moment(featuredTopic[1] && featuredTopic[1].published_date).format('MMMM Do YYYY')}</h3>
                        </Col>
                </Row>
                  {/* </div> */}
            </Grid>
          </Jumbotron>
      </div></Link>
    )
  }
}
  
  export default connect(mapStateToProps)(LandingPageFeaturedTopic);
