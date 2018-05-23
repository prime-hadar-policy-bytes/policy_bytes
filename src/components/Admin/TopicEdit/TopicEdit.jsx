import React, { Component } from 'react'
import { connect } from 'react-redux'

import Footer from '../../Footer/Footer.jsx'
import KeyClaimForm from './KeyClaimForm.jsx'

import { Panel, Tab, Tabs, Button, ButtonGroup, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'; 

class TopicEdit extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.fetchEditCache (); 
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
  console.log('in topicEdit handle stream change, claim id:', claimId, 'streamId:', streamId);
  console.log('event.target: ',event.target);
  let payloadPackage = {
    claimId: claimId, 
    streamId: streamId,
    eventTarget: event.target
  }

  this.props.dispatch({
    type: 'CHANGE_STREAM_ITEM_INFO',
    payload: payloadPackage
  })



  // this.setState({
  //   keyClaims: {
  //     ...this.state.keyClaims,
  //     [claimId]: {
  //       ...this.state.keyClaims[claimId],
  //           streamData: {
  //             ...this.state.keyClaims[claimId].streamData, 
  //             [streamId]: {
  //               ...this.state.keyClaims[claimId].streamData[streamId],
  //               [event.target.name]: event.target.value
  //             }
  //           }
  //     }
  //   }
  // })
}

//Send local state object to Redux
  handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('form submit clicked, contents:', this.state);
    this.props.dispatch({
      type: 'SET_NEW_TOPIC',
      payload: this.state, 
    })

    ///SOME INDICATOR HERE

  }

//currying function TO CHANGE REDUX STATE
handleTextChange = (event) => {
  console.log('in handleTextChange, event.target: ', event.target.value);
  this.props.dispatch({
    type: 'CHANGE_TOPIC_INFO',
    payload: event.target
  })
}

//ADDING A NEW KEY CLAIM OBJECT TO THE EDITTOPICCACHE
addKeyClaim = () => {
  const claimAddId = Object.keys(this.props.state.cacheEdit.topicEditCache.keyClaims).length;
  console.log(claimAddId);
  this.props.dispatch({
    type: 'ADD_KEY_CLAIM', 
    payload: claimAddId
  })
}


  render() {



    let keyClaimIdObject = this.props.state.cacheEdit.topicEditCache.keyClaims;

    console.log('keyClaimIdObject', keyClaimIdObject);
    

    let keyClaimForms = []
    for (const keyClaim in keyClaimIdObject) {      
      keyClaimForms.push(
        <KeyClaimForm key={keyClaim}
                      claimId ={keyClaim}
                      keyClaimIdObject={keyClaimIdObject}
                      handleKeyClaimChange={this.handleKeyClaimChange}
                      handleStreamChange={this.handleStreamChange}/>
      )
    } 

    console.log(keyClaimForms);
    

    return (
      <div>
        <div className="wrapper">
          <h1>Topic Edit</h1>

{/* SHOW STATE ON DOM */}
          <pre>state: {JSON.stringify(this.state, null, 3)}</pre>

          <form action="" onSubmit={this.handleSubmit}>


            <Panel>
              <Panel.Body>
                <ControlLabel>Topic Title</ControlLabel>
                <FormControl onChange={this.handleTextChange} 
                              name="topicTitle" 
                              value={this.props.state.cacheEdit.topicTitle}  //<-- VALUE COMES FROM REDUX STATE 
                              type="text"/>
                <Button bsSize="large" bsStyle="primary">Icon Upload</Button>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Topic Summary (for archive)</ControlLabel>
                <FormControl onChange={this.handleTextChange} 
                              name="topicSummary" 
                              value={this.props.state.cacheEdit.topicSummary}  //<-- VALUE COMES FROM REDUX STATE 
                              type="text"/>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Topic Premise</ControlLabel>
                <FormControl onChange={this.handleTextChange} 
                              name="topicPremise" 
                              value={this.props.state.cacheEdit.topicPremise}  //<-- VALUE COMES FROM REDUX STATE 
                              type="text"/>
                <ControlLabel>Link to read more?</ControlLabel>
                <FormControl onChange={this.handleTextChange} 
                              name="topicReadMore" 
                              value={this.props.state.cacheEdit.topicReadMore}  //<-- VALUE COMES FROM REDUX STATE 
                              type="text"/>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Common Ground</ControlLabel>
                <FormControl onChange={this.handleTextChange} 
                              name="topicCommonGround" 
                              value={this.props.state.cacheEdit.topicCommonGround}  //<-- VALUE COMES FROM REDUX STATE 
                              type="text"/>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Contributor 1 Bio</ControlLabel>
                <FormControl onChange={this.handleTextChange} 
                              name="bio1" 
                              value={this.props.state.cacheEdit.bio1}  //<-- VALUE COMES FROM REDUX STATE 
                              type="text"/>
                <ControlLabel>Contributor 1 Proposal Summary</ControlLabel>
                <FormControl onChange={this.handleTextChange} 
                              name="proposal1" 
                              value={this.props.state.cacheEdit.proposal1}  //<-- VALUE COMES FROM REDUX STATE 
                              type="text"/>
                <Button bsSize="large" bsStyle="primary">Icon Upload</Button>
              </Panel.Body>
            </Panel>
            <Panel>
              <Panel.Body>
                <ControlLabel>Contributor 2 Bio</ControlLabel>
                <FormControl onChange={this.handleTextChange} 
                              name="bio2" 
                              value={this.props.state.cacheEdit.bio2}  //<-- VALUE COMES FROM REDUX STATE 
                              type="text"/>
                <ControlLabel>Contributor 2 Proposal Summary</ControlLabel>
                <FormControl onChange={this.handleTextChange} 
                              name="proposal2" 
                              value={this.props.state.cacheEdit.proposal2}  //<-- VALUE COMES FROM REDUX STATE 
                              type="text"/>
                <Button bsSize="large" bsStyle="primary">Icon Upload</Button>
              </Panel.Body>
            </Panel>

          <Button bsStyle="primary" onClick={this.addKeyClaim}>Add Key Claim</Button>


{/* Mapped array of number of key claims in this.props.state.keyClaims */}
          {keyClaimForms}



          <Button type="submit" bsStyle="primary">Submit!</Button>
          </form>
          </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})


export default connect(mapStateToProps)(TopicEdit);
