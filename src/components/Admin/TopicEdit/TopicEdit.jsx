import React, { Component } from 'react'
import { connect } from 'react-redux'

import Footer from '../../Footer/Footer.jsx'
import KeyClaimForm from './KeyClaimForm.jsx'

import { Panel, Tab, Tabs, Button, ButtonGroup, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'; 

class TopicEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      keyClaimNumber: 0,
      topicTitle: '', 
      topicSummary: '', 
      topicPremise: '', 
      topicReadMore: '', 
      topicCommonGround: '', 
      bio1: '', 
      proposal1: '',
      bio2: '', 
      proposal2: '',
      keyClaims: {
        0: {
          claimId: 0,
          claimContributor: '',
            keyClaim: '',
            keyClaimEvidence: '', 
            streamData: {
                0: {
                    streamContributor: '', 
                    streamComment: '',
                    streamEvidence: '', 
                },
            }
        },
      },

    }
  }

handleKeyClaimChange = (event) => {
  // console.log('event.target: ',event.target.id);
  this.setState({
    keyClaims: {
      ...this.state.keyClaims,
      [event.target.id]: {
        ...this.state.keyClaims[event.target.id], 
              [event.target.name]: event.target.value
      }
    }
  })
}

handleStreamChange = (event, claimId, streamId) => {
  console.log('in topicEdit handle stream change, claim id:', claimId, 'streamId:', streamId);
  console.log('event.target: ',event.target);
  this.setState({
    keyClaims: {
      ...this.state.keyClaims,
      [claimId]: {
            streamData: {
              ...this.state.keyClaims[claimId].streamData, 
              [streamId]: {
                ...this.state.keyClaims[claimId].streamData[streamId],
                [event.target.name]: event.target.value
              }
            }
      }
    }
  })
}




//Send local state object to Redux
  handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('form submit clicked');
  }

//currying function to setState on change of input fields
handleTextChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  })    
}

//adding a new value to this.state.keyclaims that will be the ID of the new key claim 
addKeyClaim = () => {
  const claimAddId = Object.keys(this.state.keyClaims).length;
  console.log(claimAddId);
  this.setState({
    keyClaims: {
      ...this.state.keyClaims, 
      [claimAddId]: {
          claimId: claimAddId, 
          claimContributor: '',
          keyClaim: '',
          keyClaimEvidence: '', 
          streamData: {
              0: {
                  streamContributor: '', 
                  streamComment: '',
                  streamEvidence: '', 
              },
          }
      }, 
    }
  })
}


  render() {

    let keyClaimIdObject = this.state.keyClaims;
    let keyClaimForms = []
    for (const keyClaim in keyClaimIdObject) {      
      keyClaimForms.push(
        <KeyClaimForm key={keyClaim}
                      claimId ={keyClaim}
                      handleKeyClaimChange={this.handleKeyClaimChange}
                      handleStreamChange={this.handleStreamChange}/>
      )
    }

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
                <FormControl onChange={this.handleTextChange} name="topicTitle" value={this.state.topicTitle} type="text"/>
                <Button bsSize="large" bsStyle="primary">Icon Upload</Button>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Topic Summary (for archive)</ControlLabel>
                <FormControl onChange={this.handleTextChange} name="topicSummary" value={this.state.topicSummary} type="text"/>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Topic Premise</ControlLabel>
                <FormControl onChange={this.handleTextChange} name="topicPremise" value={this.state.topicPremise} type="text"/>
                <ControlLabel>Link to read more?</ControlLabel>
                <FormControl onChange={this.handleTextChange} name="topicReadMore" value={this.state.topicReadMore} type="text"/>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Common Ground</ControlLabel>
                <FormControl onChange={this.handleTextChange} name="topicCommonGround" value={this.state.commonGround} type="text"/>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Contributor 1 Bio</ControlLabel>
                <FormControl onChange={this.handleTextChange} name="bio1" value={this.state.bio1} type="text"/>
                <ControlLabel>Contributor 1 Proposal Summary</ControlLabel>
                <FormControl onChange={this.handleTextChange} name="proposal1" value={this.state.proposal1} type="text"/>
                <Button bsSize="large" bsStyle="primary">Icon Upload</Button>
              </Panel.Body>
            </Panel>
            <Panel>
              <Panel.Body>
                <ControlLabel>Contributor 2 Bio</ControlLabel>
                <FormControl onChange={this.handleTextChange} name="bio2" value={this.state.bio2} type="text"/>
                <ControlLabel>Contributor 2 Proposal Summary</ControlLabel>
                <FormControl onChange={this.handleTextChange} name="proposal2" value={this.state.proposal2} type="text"/>
                <Button bsSize="large" bsStyle="primary">Icon Upload</Button>
              </Panel.Body>
            </Panel>

          <Button bsStyle="primary" onClick={this.addKeyClaim}>Add Key Claim</Button>

{/* Mapped array of number of key claims in this.state */}
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
