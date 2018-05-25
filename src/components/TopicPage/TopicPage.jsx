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
      contributorSelect: 'contributor1',  
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

  handleTabSelect = (key) => {
    this.setState({
      contributorSelect: key
    })
  }




  render() {
    
    //loop through keyclaim object to make keyClaimPanels 
    let keyClaimsArray = []
    for (const keyClaimId in dummyTopicCache.keyClaims) {      
      //if statement to render only the selected contributor's claims
      if (this.state.contributorSelect === dummyTopicCache.keyClaims[keyClaimId].claimContributor) {        
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
    }


//DYNAMIC CSS CLASSES
    let arenaContainer = 'arenaContainer'
    let streamContainerClass = "streamItemsContainer"
    if (this.state.contributorSelect === 'contributor1') {
      arenaContainer = "arenaContainerContrib1"
      streamContainerClass += " contrib1"
    }
    if (this.state.contributorSelect === 'contributor2') {
      arenaContainer += " contrib2"
      streamContainerClass += " contrib2"
    }



    

    return (
      <div>
        <div className="wrapper">

        <TopicTitleContent />


          <Tabs className="tabParent"
                bsStyle="pills"
                defaultActiveKey='contributor1' 
                id="contributorSelectTabs"
                onSelect={this.handleTabSelect}
                animation={false} 
                >
            <Tab tabClassName="tabChildren"  eventKey='contributor1' title={dummyTopicCache.contributor1FirstName}></Tab>
            <Tab tabClassName="tabChildren" eventKey='contributor2' title={dummyTopicCache.contributor2FirstName}></Tab>
          </Tabs>


          {/* ARENA */}
          <Panel className="arenaContainer">
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

              <div className = {streamContainerClass}>
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
