import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Panel, Tab, Tabs, Button, ButtonGroup, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'; 


class StreamItemForm extends Component {

    
  render() {
    return (
      <div>

        {/* STREAM INPUTS */}
        <Panel className="wireStreamInput">
          <Panel.Body>
          <h4>stream item Id: {JSON.stringify(this.props.streamItemId)}</h4>
          <br/>

            
              <ControlLabel>Select Contributor</ControlLabel>
              <FormControl componentClass="select" 
                            placeholder="select" 
                            id={this.props.streamItemId} 
                            name="streamContributor" 
                            onChange={this.props.handleStreamChange}>
                  <option value="">-- Select Contributor --</option>
                  <option value="contributor1">Contributor 1</option>
                  <option value="contributor2">Contributor 2</option>
              </FormControl>                  

              <ControlLabel>Stream Comment</ControlLabel>
              <FormControl onChange={this.props.handleStreamChange} id={this.props.streamItemId} name="streamComment" type="text"/>

              <ControlLabel>Stream Comment Evidence</ControlLabel>
              <FormControl onChange={this.props.handleStreamChange} id={this.props.streamItemId} name="streamEvidence" type="text"/>

              <Button bsStyle="danger">Delete Stream Item</Button>

          </Panel.Body>
        </Panel>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps)(StreamItemForm)
