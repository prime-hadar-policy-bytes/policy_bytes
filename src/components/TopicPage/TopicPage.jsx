import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../Footer/Footer.jsx'
import CommentSection from './CommentSection/CommentSection.jsx'
import { USER_ACTIONS } from '../../redux/actions/userActions';

import { Panel, Tab, Tabs, Button, ButtonGroup } from 'react-bootstrap';

import KeyClaimPanel from './KeyClaimPanel.jsx'
import dummyTopicCache from './DummyData.js'

import './TopicPage.css'


//TO-DO replace hard-coded topic_id in CommentSection component

export class TopicPage extends Component {

  componentDidMount() {
    // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  render() {

    console.log(dummyTopicCache);

    let keyClaimsArray = []
    for (const keyClaimId in dummyTopicCache.keyClaims) {      
      keyClaimsArray.push(
        <KeyClaimPanel key={keyClaimId}
                        keyClaim={dummyTopicCache.keyClaims[keyClaimId]}/>
      )
    }

    

    return (
      <div>
        <div className="wrapper">

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

          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title={dummyTopicCache.contributor1FirstName}>
              Tab 1 content
              </Tab>
            <Tab eventKey={2} title={dummyTopicCache.contributor2FirstName}>
              Tab 2 content
              </Tab>
          </Tabs>


          {/* ARENA */}
          <Panel>
            <Panel.Heading>Arena</Panel.Heading>
            <Panel.Body>
              <div className="wireArenaPhoto">Contrib. Photo</div>
              <Panel className="wireArenaSummary">
                <Panel.Body>
                  {dummyTopicCache.proposal1}
                </Panel.Body>
              </Panel>

              {keyClaimsArray}

            </Panel.Body>
          </Panel>

          <CommentSection topicId={1} />

          
          <Panel>
            <Panel.Body>
              <h4>Sponsored by Ameriprise Financial</h4>
            </Panel.Body>
          </Panel>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

export default connect(mapStateToProps)(TopicPage);
