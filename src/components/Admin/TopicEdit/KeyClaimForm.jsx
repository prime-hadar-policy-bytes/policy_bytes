import React, { Component } from 'react'
import { connect } from 'react-redux'

import StreamItemForm from './StreamItemForm.jsx'
// import SelectForm from './SelectForm.jsx'


import { Panel, Tab, Tabs, Button, ButtonGroup, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'; 
import { Stream } from 'stream';


class KeyClaimForm extends Component {


//currying function to setState on change of form fields
    handleChange = (event) => {
        this.props.handleKeyClaimChange(event); 
    }

//adding a new value to this.state.streamData object that will be the ID of the new key claim 
    addStreamItem = () => {
        let streamItemId = Object.keys(this.state.streamData).length;
        let claimId = this.props.claimId; 
        //packaging up the object to send to the reducer
        let payloadObject = {
            streamItemId: streamItemId,
            claimId: claimId
        }
        this.props.dispatch({
            type: 'ADD_STREAM_ITEM',
            payload: payloadObject
        })
    }


  render() {
    //ID of the keyClaim
    let claimId = this.props.claimId;
    console.log('key claim ', claimId);
    
    
    //Object containg all keyClaim information passed down on props
    //individual keyClaim ID used to pick out the streamData object on each keyClaim
    //looping over this unique streamData object to create the correct number of streamInputForms
    let streamDataObject = this.props.keyClaimIdObject[claimId].streamData;
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

    console.log('TESTSETSE',this.props.keyClaimIdObject[claimId].claimContributor);
    

    return (
      <div>
{/* SHOW STATE ON DOM */}
          <pre>claim Id: {JSON.stringify(this.props.claimId, null, 2)}</pre>

          <Panel bsStyle="primary">

            <Panel.Heading>

                {/* <SelectForm type="select"
                            placeholder="Select Contributor"
                            value={this.props.keyClaimIdObject[claimId].claimContributor}
                            onChange={this.handleChange} 
                            name="claimContributor"/> */}


          <pre>claim Id: {JSON.stringify(this.props.keyClaims[this.props.claimId], null, 2)}</pre>

                <FormGroup>
                    <FormControl componentClass="select" 
                                    placeholder="select" 
                                    name="claimContributor" 
                                    onChange={this.handleChange}
                                    id={this.props.claimId} 
                                    // value={this.props.keyClaims[this.props.claimId]}//<-- THIS IS WHERE I'M GOING TO START TOMORROW 
                                    >
                        <option key="0" value="">-- Select Contributor --</option>
                        <option key="1" value="contributor1">Contributor 1</option>
                        <option key="2" value="contributor2">Contributor 2</option>
                    </FormControl>
                </FormGroup>

                {/* <select name="claimContributor"
                        id={this.props.claimId}
                        onChange={this.handleChange}
                        >
                    <option value="">-- Select Contributor --</option>
                    <option value="contributor1">Contributor 1</option>
                    <option selected value="contributor2">Contributor 2</option>
                </select> */}

            </Panel.Heading>

              <Panel.Body>
                <ControlLabel>Key Claim</ControlLabel>
                <FormControl onChange={this.handleChange} 
                            id={this.props.claimId} 
                            name="keyClaim" 
                            // value={this.state.keyClaim} 
                            type="text"/>
                <ControlLabel>Key Claim Evidence</ControlLabel>
                <FormControl onChange={this.handleChange} 
                                id={this.props.claimId} 
                                name="keyClaimEvidence" 
                                // value={this.state.keyClaimEvidence} 
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
    keyClaims: state.cacheEdit.topicEditCache.keyClaims,
  state

})


export default connect(mapStateToProps)(KeyClaimForm); 
