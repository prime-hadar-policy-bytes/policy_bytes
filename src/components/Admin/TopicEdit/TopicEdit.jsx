import React, { Component } from 'react'
import { connect } from 'react-redux'
import Images from '../../Images/Images.jsx'
import Footer from '../../Footer/Footer.jsx'
import KeyClaimForm from './KeyClaimForm.jsx'
import SubmitAlert from './SubmitAlert.jsx'

import ReactFilestack, { client } from 'filestack-react';
import filestack from 'filestack-js';
import { Panel, Tab, Tabs, Button, ButtonGroup, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

let debug = false;

class TopicEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submitAlert: false
    }
  }

  componentDidMount() {
    this.populateEditCache(); 
    this.fetchEditCache();
  }


  populateEditCache = () => {
    let editTopicId = this.props.match.params.id; 
    if (editTopicId) {
      this.props.dispatch({
        type: 'FETCH_EDIT_TOPIC_INFO',
        payload: editTopicId
      })
      this.fetchEditCache();
    } else {
      this.props.dispatch({
        type: 'RESET_EDIT_CACHE',
        payload: editTopicId
      })
      this.fetchEditCache();
    }
  }


  fetchEditCache = () => {
    this.props.dispatch({
      type: 'FETCH_EDIT_CACHE'
    })
  }

  handleKeyClaimChange = (event) => {
    this.props.dispatch({
      type: 'CHANGE_KEY_CLAIM_INFO',
      payload: event.target
    })
  }

  handleStreamChange = (event, claimId, streamId) => {
    if (debug){console.log('in topicEdit handle stream change, claim id:', claimId, 'streamId:', streamId);}
    if (debug){console.log('event.target: ', event.target);}
    let payloadPackage = {
      claimId: claimId,
      streamId: streamId,
      eventTarget: event.target
    }
    this.props.dispatch({
      type: 'CHANGE_STREAM_ITEM_INFO',
      payload: payloadPackage
    })
  }

  //Send local state object to Redux
  handleSubmit = (event) => {
    event.preventDefault();
    if (debug){console.log('form submit clicked, contents:', this.state);}
    this.props.dispatch({
      type: 'SET_NEW_TOPIC',
      payload: this.props.state.cacheEdit.topicEditCache,
    })
    this.setState({
      submitAlert: true
    })
    ///SOME INDICATOR HERE

  }

  //currying function TO CHANGE REDUX STATE
  handleTextChange = (event) => {
    if (debug){console.log('in handleTextChange, event.target: ', event.target.value);}
    this.props.dispatch({
      type: 'CHANGE_TOPIC_INFO',
      payload: event.target
    })
  }

  //ADDING A NEW KEY CLAIM OBJECT TO THE EDITTOPICCACHE
  addKeyClaim = () => {
    const claimAddId = Object.keys(this.props.keyClaims).length;
    if (debug) {console.log(claimAddId);}
    this.props.dispatch({
      type: 'ADD_KEY_CLAIM',
      payload: claimAddId
    })
  }

  handleDismiss = () => {
    if (debug) {console.log('in handledismiss');}
    
    this.setState({
      submitAlert: false
    })
  }



  render() {

    if (debug) {console.log('ROUTE PARAMS', this.props.match.params.id);}


    let keyClaimIdObject = this.props.state.cacheEdit.topicEditCache.keyClaims;
    let keyClaimForms = []
    for (const keyClaim in keyClaimIdObject) {
      keyClaimForms.push(
        <KeyClaimForm key={keyClaim}
                      claimId={keyClaim}
                      keyClaimIdObject={this.props.state.cacheEdit.topicEditCache.keyClaims}
                      handleKeyClaimChange={this.handleKeyClaimChange}
                      handleStreamChange={this.handleStreamChange} />
      )
    }
   

    return (
      <div>
        <div className="wrapper">
          <h1>Topic Edit</h1>

          {/* SHOW STATE ON DOM */}
          {/* <pre>state: {JSON.stringify(this.props.state, null, 3)}</pre> */}
          {/* <pre>state: {JSON.stringify(this.props.state.cacheEdit.topicEditCache, null, 3)}</pre>
          <pre>{JSON.stringify(this.props.state.cacheEdit.topicEditCache.topicSummary, null, 3)}</pre> */}
          {/* <pre>state: {JSON.stringify(this.props.keyClaims, null, 3)}</pre> */}

          <form action="" onSubmit={this.handleSubmit}>

            <Panel>
              <Panel.Body>
                <ControlLabel>Topic Title</ControlLabel>
                <FormControl onChange={this.handleTextChange}
                  name="topicTitle"
                  value={this.props.state.cacheEdit.topicEditCache.topicTitle}  //<-- VALUE COMES FROM REDUX STATE 
                  type="text" />
                <Button bsSize="large" bsStyle="primary">Icon Upload</Button>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Topic Summary (for archive)</ControlLabel>
                <FormControl onChange={this.handleTextChange}
                  name="topicSummary"
                  value={this.props.state.cacheEdit.topicEditCache.topicSummary}  //<-- VALUE COMES FROM REDUX STATE 
                  type="text" />
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Topic Premise</ControlLabel>
                <FormControl onChange={this.handleTextChange}
                  name="topicPremise"
                  value={this.props.state.cacheEdit.topicEditCache.topicPremise}  //<-- VALUE COMES FROM REDUX STATE 
                  type="text" />
                <ControlLabel>Link to read more?</ControlLabel>
                <FormControl onChange={this.handleTextChange}
                  name="topicReadMore"
                  value={this.props.state.cacheEdit.topicEditCache.topicReadMore}  //<-- VALUE COMES FROM REDUX STATE 
                  type="text" />
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Common Ground</ControlLabel>
                <FormControl onChange={this.handleTextChange}
                  name="topicCommonGround"
                  value={this.props.state.cacheEdit.topicEditCache.topicCommonGround}  //<-- VALUE COMES FROM REDUX STATE 
                  type="text" />
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Contributor 1 First Name</ControlLabel>
                <FormControl onChange={this.handleTextChange}
                  type="text" 
                  name="contributor1FirstName"
                  value={this.props.state.cacheEdit.topicEditCache.contributor1FirstName}  //<-- VALUE COMES FROM REDUX STATE 
                  />
                <ControlLabel>Contributor 1 Last Name</ControlLabel>
                <FormControl onChange={this.handleTextChange}
                  type="text" 
                  name="contributor1LastName"
                  value={this.props.state.cacheEdit.topicEditCache.contributor1LastName}  //<-- VALUE COMES FROM REDUX STATE 
                  />
                <ControlLabel>Contributor 1 Bio</ControlLabel>
                <FormControl onChange={this.handleTextChange}
                  name="bio1"
                  value={this.props.state.cacheEdit.topicEditCache.bio1}  //<-- VALUE COMES FROM REDUX STATE 
                  type="text" />
                <ControlLabel>Contributor 1 Proposal Summary</ControlLabel>
                <FormControl onChange={this.handleTextChange}
                  name="proposal1"
                  value={this.props.state.cacheEdit.topicEditCache.proposal1}  //<-- VALUE COMES FROM REDUX STATE 
                  type="text" />
                  <Images/>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
              <ControlLabel>Contributor 2 First Name</ControlLabel>
                <FormControl onChange={this.handleTextChange}
                  type="text" 
                  name="contributor2FirstName"
                  value={this.props.state.cacheEdit.topicEditCache.contributor2FirstName}  //<-- VALUE COMES FROM REDUX STATE 
                  />
                <ControlLabel>Contributor 2 Last Name</ControlLabel>
                <FormControl onChange={this.handleTextChange}
                  type="text" 
                  name="contributor2LastName"
                  value={this.props.state.cacheEdit.topicEditCache.contributor2LastName}  //<-- VALUE COMES FROM REDUX STATE 
                  />
                <ControlLabel>Contributor 2 Bio</ControlLabel>
                <FormControl onChange={this.handleTextChange}
                  name="bio2"
                  value={this.props.state.cacheEdit.topicEditCache.bio2}  //<-- VALUE COMES FROM REDUX STATE 
                  type="text" />
                <ControlLabel>Contributor 2 Proposal Summary</ControlLabel>
                <FormControl onChange={this.handleTextChange}
                  name="proposal2"
                  value={this.props.state.cacheEdit.topicEditCache.proposal2}  //<-- VALUE COMES FROM REDUX STATE 
                  type="text" />
                  <Images/>
              </Panel.Body>
            </Panel>

            <Button bsStyle="primary" onClick={this.addKeyClaim}>Add Key Claim</Button>

            {/* Mapped array of number of key claims in this.props.state.keyClaims */}
            {keyClaimForms}


{/* Conditionally render a success/failure message based on result of submit */}
          <div>
            {this.state.submitAlert &&
              <SubmitAlert handleDismiss={this.handleDismiss}/>
            }
          </div>


            <Button type="submit" bsStyle="primary">Submit!</Button>
          </form>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  keyClaims: state.cacheEdit.topicEditCache.keyClaims,
  state
})


export default connect(mapStateToProps)(TopicEdit);
