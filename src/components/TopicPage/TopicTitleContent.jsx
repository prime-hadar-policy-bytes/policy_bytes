import React, { Component } from 'react'

import { Panel, Tab, Tabs, Button, ButtonGroup } from 'react-bootstrap';

import dummyTopicCache from './DummyData.js'


export default class TopicTitleContent extends Component {
  render() {
    return (
      <div>

          <h1>{dummyTopicCache.topicTitle}</h1>

            {/* INTRO */}
            <Panel>
            <Panel.Body>
                <p>
                {dummyTopicCache.topicPremise}
                </p>
            </Panel.Body>
            </Panel>

            <Panel>
            <Panel.Body>
                <h4>Common Ground</h4>
                <p>
                "{dummyTopicCache.topicCommonGround}"
                </p>
            </Panel.Body>
            </Panel>

            <Panel className="contributorPanel">
            <Panel.Body>
                <div className="wirePhoto"></div>
                <h3>
                {dummyTopicCache.contributor1FirstName} {dummyTopicCache.contributor1LastName}
                </h3>
                <i>
                {dummyTopicCache.bio1}
                </i>
            </Panel.Body>
            </Panel>

            <Panel className="contributorPanel">
            <Panel.Body>
                <div className="wirePhoto"></div>
                <h3>
                {dummyTopicCache.contributor2FirstName} {dummyTopicCache.contributor2LastName}
                </h3>
                <i>
                {dummyTopicCache.bio2}
                </i>
            </Panel.Body>
            </Panel>

        
      </div>
    )
  }
}
