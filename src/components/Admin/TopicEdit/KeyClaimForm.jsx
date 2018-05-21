import React, { Component } from 'react'
import { connect } from 'react-redux'

import StreamItemForm from './StreamItemForm.jsx'

import { Panel, Tab, Tabs, Button, ButtonGroup, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'; 
import { Stream } from 'stream';


class KeyClaimForm extends Component {
    constructor (props) {
        super(props) 

        this.state = {
            streamData: {
                0: {
                    streamContributor: '', 
                    streamComment: '',
                    streamEvidence: '', 
                },
            }
        }
    }

//currying function to setState on change of form fields
    handleChange = (event) => {
        this.props.handleKeyClaimChange(event); 
        this.setState({
        [event.target.name]: event.target.value,
        })
    }


//adding a new value to this.state.streamData object that will be the ID of the new key claim 
    addStreamItem = () => {
        let streamItemId = Object.keys(this.state.streamData).length;
        console.log('addin a stream Item, key claim id:', this.props.claimId, 'streamItemId: ',streamItemId);
        console.log('props', this.props, 'state:', this.state)
        this.setState({
            streamData: {
              ...this.state.streamData, 
              [streamItemId]: {
                streamContributor: '', 
                streamComment: '',
                streamEvidence: '',
              }, 
            }
          })
    }


  render() {

//looping over the local streamData object to create the correct number of streamItemForms
//using a For Of loop insteand of a .map (because this is an object, not an array)
    let streamDataObject = this.state.streamData;
    let streamItemForms = []
    for (const streamItem in streamDataObject) {      
        streamItemForms.push(
        <StreamItemForm key={streamItem}
                      claimId ={this.props.claimId}
                      streamId={streamItem}
                      handleKeyClaimChange={this.handleKeyClaimChange}
                      handleStreamChange={this.props.handleStreamChange}/>
      )
    }

    return (
      <div>
{/* SHOW STATE ON DOM */}
          <pre>claim Id: {JSON.stringify(this.props.claimId, null, 2)}</pre>
          {/* <pre>state: {JSON.stringify(this.state, null, 2)}</pre> */}

          <Panel bsStyle="primary">

            <Panel.Heading>
                <FormControl componentClass="select" 
                                placeholder="select" 
                                name="claimContributor" 
                                onChange={this.handleChange}
                                id={this.props.claimId} >
                    <option value="">-- Select Contributor --</option>
                    <option value="contributor1">Contributor 1</option>
                    <option value="contributor2">Contributor 2</option>
                </FormControl>
            </Panel.Heading>

              <Panel.Body>
                <ControlLabel>Key Claim</ControlLabel>
                <FormControl onChange={this.handleChange} 
                            id={this.props.claimId} 
                            name="keyClaim" 
                            value={this.state.keyClaim} 
                            type="text"/>
                <ControlLabel>Key Claim Evidence</ControlLabel>
                <FormControl onChange={this.handleChange} 
                                id={this.props.claimId} 
                                name="keyClaimEvidence" 
                                value={this.state.keyClaimEvidence} 
                                type="text"/>

{/* Variable holding .map of <StreamItemForm>  */}
            {streamItemForms}

              <ButtonGroup className="wireCommentButtons">
                <Button bsStyle="danger">Delete Key Claim</Button>
                <Button>[arrow up]</Button>
                <Button>[arrow down]</Button>
                <Button onClick={this.addStreamItem}>Add Stream Item</Button>
              </ButtonGroup>

            </Panel.Body>

        </Panel>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps)(KeyClaimForm); 
