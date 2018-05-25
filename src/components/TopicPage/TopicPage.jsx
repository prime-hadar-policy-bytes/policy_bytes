import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../Footer/Footer.jsx'
import CommentSection from './CommentSection/CommentSection.jsx'
import { USER_ACTIONS } from '../../redux/actions/userActions';

import { Panel, Tab, Tabs, Button, ButtonGroup } from 'react-bootstrap';

import KeyClaimPanel from './KeyClaimPanel.jsx'
import StreamItem from './StreamItem.jsx'
import TopicTitleContent from './TopicTitleContent.jsx'
import StreamItemFactory from './StreamItemFactory.jsx'


import dummyTopicCache from './DummyData.js'

import './TopicPage.css'


//TO-DO replace hard-coded topic_id in CommentSection component

export class TopicPage extends Component {
  constructor(props) {
    super(props) 
    
    this.state = {
      showStreamForClaim: undefined,
      keyClaimLocked: false, 
    }
  }

  componentDidMount() {
    // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }


//called on mouseEnter from keyClaimPanel IF keyClaimLocked === false
  handleHoverShowStream = (id) => {
    if (this.state.keyClaimLocked === false) {
      console.log('in handleShowStream, id:', id);
      this.setState({
        showStreamForClaim: id
      })   
    }
  }

//called on mouseLeave from keyClaimPanel IF keyClaimLocked === false
  handleHoverHideStream = (id) => {
    if (this.state.keyClaimLocked === false) {
      console.log('in handleHideStream, id:', id);
      this.setState({
        showStreamForClaim: undefined
      })     
    }
  }

//toggle this.state.keyClaimLocked
  toggleClickShowStream = (id) => {
    console.log('in handleShowStream, id:', id);
    this.setState({
      showStreamForClaim: id,
      keyClaimLocked: !this.state.keyClaimLocked
    })
  }

  render() {
    
 //declare empty arrays that will fill with KeyClaimPanels and StreamItemPanels
    let keyClaimsArray = []

//loop through keyclaim object to make keyClaimPanels 
    for (const keyClaimId in dummyTopicCache.keyClaims) {      
      keyClaimsArray.push(
        <KeyClaimPanel key={keyClaimId}
                        keyClaimId={keyClaimId}
                        keyClaim={dummyTopicCache.keyClaims[keyClaimId]}
                        showStreamForClaim={this.state.showStreamForClaim}
                        keyClaimLocked={this.state.keyClaimLocked}
                        handleHoverShowStream={this.handleHoverShowStream}
                        handleHoverHideStream={this.handleHoverHideStream}
                        toggleClickShowStream={this.toggleClickShowStream}/>
      )
    }



    

    return (
      <div>
        <div className="wrapper">

        <TopicTitleContent />


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

              <div className="keyClaimsContainer">
                {keyClaimsArray}
              </div>

              <div className = "streamItemsContainer">
                <StreamItemFactory keyClaims = {dummyTopicCache.keyClaims} 
                                  showStreamForClaim = {this.state.showStreamForClaim}/>
              </div>


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
