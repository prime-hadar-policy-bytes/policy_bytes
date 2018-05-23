import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Panel, Tab, Tabs, Button, ButtonGroup, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'; 


class StreamItemForm extends Component {
  constructor (props) {
    super(props) 

    this.state = {
      streamContributor: '',
      streamComment: '',
      streamEvidence: '',
    }
  }


  packageStreamChange = (event) => {
    console.log('stream id: ',this.props.streamId);
    console.log('claim id: ',this.props.claimId);
    let claimId = this.props.claimId; 
    let streamId = this.props.streamId;
    this.props.handleStreamChange(event, claimId, streamId)
  }

    
  render() {
    return (
      <div>

        {/* STREAM INPUTS */}
        <Panel className="wireStreamInput">
          <Panel.Body>
          <h4>stream item Id: {JSON.stringify(this.props.streamId)}</h4>
          <br/>

            
              <ControlLabel>Select Contributor</ControlLabel>
              <FormControl componentClass="select" 
                            onChange={this.packageStreamChange}
                            placeholder="select" 
                            id={this.props.streamId} 
                            name="streamContributor"
                            // value={this.state.streamContributor}
                            >
                  <option value="">-- Select Contributor --</option>
                  <option value="contributor1">Contributor 1</option>
                  <option value="contributor2">Contributor 2</option>
              </FormControl>                  

              <ControlLabel>Stream Comment</ControlLabel>
              <FormControl onChange={this.packageStreamChange} 
                            id={this.props.claimId} 
                            name="streamComment" 
                            type="text"
                            />

              <ControlLabel>Stream Comment Evidence</ControlLabel>
              <FormControl onChange={this.packageStreamChange} 
                          id={this.props.claimId} 
                          name="streamEvidence" 
                          type="text"/>

              <Button bsStyle="danger">Delete Stream Item</Button>

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


export default connect(mapStateToProps)(StreamItemForm)
