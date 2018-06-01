import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Col, Row, Jumbotron, Image } from 'react-bootstrap';

import dummyTopicCache from '../TopicPage/DummyData.js'

import './LandingPage.css'

const mapStateToProps = state => ({
    user: state.user,
    login: state.login,
    state
})

class LandingPageArchive extends Component {
    componentDidMount(){
        this.props.dispatch({
            type: 'FETCH_ARCHIVED_TOPICS'
        })
    }

  render() {
    return (
      <div>

          <Grid>
              <Row>
                  <Col xs={12} md={12}>
                    <h2 className="archiveTitle">- Archive -</h2>
                  </Col>
              </Row>
          </Grid>

          
        <div className="archiveWrapper">
          <Grid>
              <Row>
                  <Col xs={12} sm={6} md={4} lg={4}>
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
                  <Col xs={12} sm={6} md={4} lg={4}>
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
                  <Col xs={12} sm={6} md={4} lg={4}>
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
                  <Col xs={12} sm={6} md={4} lg={4}>
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
                  <Col xs={12} sm={6} md={4} lg={4}>
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
                  <Col xs={12} sm={6} md={4} lg={4}>
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
      </div>
    )
  }
}
export default connect(mapStateToProps)(LandingPageArchive);

