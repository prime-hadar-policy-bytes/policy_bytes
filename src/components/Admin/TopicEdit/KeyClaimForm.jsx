import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Panel, Tab, Tabs, Button, ButtonGroup, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'; 


export class KeyClaimForm extends Component {
    constructor (props) {
        super(props) 

        this.state = {
            claimContributor: '',
            keyClaim: '',
            keyClaimEvidence: '', 


        }
    }



//currying function to setState on change of form fields
handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })    
    
  }



  render() {
    return (
      <div>
{/* KEY CLAIM INPUTS */}

{/* SHOW STATE ON DOM */}
          <pre>state: {JSON.stringify(this.state, null, 2)}</pre>

          <Panel bsStyle="primary">

            <Panel.Heading>
                <FormControl componentClass="select" placeholder="select" name="claimContributor" onChange={this.handleChange}>
                    <option value="">-- Select Contributor --</option>
                    <option value="contributor1">Contributor 1</option>
                    <option value="contributor2">Contributor 2</option>
                </FormControl>
            </Panel.Heading>

              <Panel.Body>
                <ControlLabel>Key Claim</ControlLabel>
                <FormControl onChange={this.handleChange} name="keyClaim" value={this.state.keyClaim} type="text"/>
                <ControlLabel>Key Claim Evidence</ControlLabel>
                <FormControl onChange={this.handleChange} name="keyClaimEvidence" value={this.state.keyClaimEvidence} type="text"/>
             
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

              <ButtonGroup className="wireCommentButtons">
                <Button bsStyle="danger">[trash can]</Button>
                <Button>[arrow up]</Button>
                <Button>[arrow down]</Button>
                <Button className="wireCommentButtons">+</Button>
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
