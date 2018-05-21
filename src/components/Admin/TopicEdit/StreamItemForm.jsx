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

              <ControlLabel>Select Contributor</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                  <option value="contributor1">Contributor 1</option>
                  <option value="contributor2">Contributor 2</option>
              </FormControl>                  

              <ControlLabel>Stream Comment</ControlLabel>
              <FormControl type="text"/>
              <ControlLabel>Stream Comment Evidence</ControlLabel>
              <FormControl type="text"/>
              <Button className="wireCommentButtons">Add Stream Comment</Button>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps)(StreamItemForm)
