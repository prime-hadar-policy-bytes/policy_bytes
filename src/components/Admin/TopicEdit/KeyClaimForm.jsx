import React, { Component } from 'react'
import { connect } from 'react-redux'

import StreamItemForm from './StreamItemForm.jsx'

import { Panel, Tab, Tabs, Button, ButtonGroup, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'; 
import { Stream } from 'stream';


class KeyClaimForm extends Component {
    constructor (props) {
        super(props) 

        this.state = {
            claimId: this.props.claimId, 
            claimContributor: '',
            keyClaim: '',
            keyClaimEvidence: '', 
            streamItems: [0],
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
        this.setState({
        [event.target.name]: event.target.value,
        })
    }


//streamId selects the object to edit
//input field names select the object key to edit
//spread operators maintain old data
    handleStreamChange = (event) => {
        this.setState({
            streamData: {
                ...this.state.streamData,
                [event.target.id]: {
                    ...this.state.streamData[event.target.id], 
                    [event.target.name]: event.target.value
                }
            }
        })
    }

//adding a new value to this.state.keyclaims that will be the ID of the new key claim 
    addStreamItem = () => {
        let streamItemId = this.state.streamItems.length;
        this.setState({
            streamItems: [...this.state.streamItems, streamItemId]
        })
    }



  render() {

//Looping through this.state.streamItems to see how many streamItems forms are needed
    let streamItemIdArray = this.state.streamItems; 
    let streamItemForms = streamItemIdArray.map((streamItemId) => {      
      return <StreamItemForm key={streamItemId}
                            streamItemId ={streamItemId}
                            handleStreamChange={this.handleStreamChange}/>
    })




    return (
      <div>
{/* KEY CLAIM INPUTS */}


{/* SHOW STATE ON DOM */}
          <pre>claim Id: {JSON.stringify(this.props.claimId, null, 2)}</pre>
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
