import React, { Component } from 'react'

import { Panel, Jumbotron, Image, Grid, Row, Col } from 'react-bootstrap';

import dummyTopicCache from './DummyData.js'


export default class TopicTitleContent extends Component {
  render() {
    return (
      <div>


            {/* INTRO */}
            <Jumbotron className="titleJumbotron" >
            <Grid>
                <Row>
                    <Col xs={12} md={12}>
                        {/* <hr/> */}
                        <h1><strong>{dummyTopicCache.topicTitle}</strong></h1>
                    </Col>
                    <Col xs={12} md={12}>
                    <p>{dummyTopicCache.topicPremise}</p>
                    {/* <hr/> */}
                    </Col>
                </Row>
            </Grid>
            </Jumbotron>

            <Jumbotron className="commonGroundJumbotron">
                <h1>Common Ground</h1>
                <p>
                "{dummyTopicCache.topicCommonGround}"
                </p>
            </Jumbotron>

        
      </div>
    )
  }
}
