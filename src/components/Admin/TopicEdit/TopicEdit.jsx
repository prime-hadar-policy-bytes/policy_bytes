import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Footer from '../../Footer/Footer.jsx'

import { Panel, Tab, Tabs, Button, ButtonGroup, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'; 

export class TopicEdit extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <h1>Topic Edit</h1>


            <Panel>
              <Panel.Body>
                <ControlLabel>Topic Title</ControlLabel>
                <FormControl type="text"/>
                <Button bsSize="large" bsStyle="primary">Icon Upload</Button>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Topic Summary (for archive)</ControlLabel>
                <FormControl type="text"/>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Topic Premise</ControlLabel>
                <FormControl type="text"/>
                <ControlLabel>Link to read more?</ControlLabel>
                <FormControl type="text"/>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Common Ground</ControlLabel>
                <FormControl type="text"/>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Body>
                <ControlLabel>Contributor 1 Bio</ControlLabel>
                <FormControl type="text"/>
                <ControlLabel>Contributor 1 Proposal Summary</ControlLabel>
                <FormControl type="text"/>
                <Button bsSize="large" bsStyle="primary">Icon Upload</Button>
              </Panel.Body>
            </Panel>
            <Panel>
              <Panel.Body>
                <ControlLabel>Contributor 2 Bio</ControlLabel>
                <FormControl type="text"/>
                <ControlLabel>Contributor 2 Proposal Summary</ControlLabel>
                <FormControl type="text"/>
                <Button bsSize="large" bsStyle="primary">Icon Upload</Button>
              </Panel.Body>
            </Panel>

          



{/* KEY CLAIM INPUTS */}
{/* CONTRIB 1 */}

          <Panel bsStyle="primary">
            <Panel.Heading>
              Contributor 1 
            </Panel.Heading>

              <Panel.Body>
                <ControlLabel>Key Claim</ControlLabel>
                <FormControl type="text"/>
                <ControlLabel>Key Claim Evidence</ControlLabel>
                <FormControl type="text"/>
             
{/* STREAM INPUTS */}
              <Panel className="wireStreamInput">
                <Panel.Body>
                  <select name="" id="">Contrib Select</select>
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

{/* CONTRIB 2 */}

          <Panel bsStyle="warning">
            <Panel.Heading>
              Contributor 2 
            </Panel.Heading>

              <Panel.Body>
                <ControlLabel>Key Claim</ControlLabel>
                <FormControl type="text"/>
                <ControlLabel>Key Claim Evidence</ControlLabel>
                <FormControl type="text"/>
             
{/* STREAM INPUTS */}
              <Panel className="wireStreamInput">
                <Panel.Body>
                  <select name="" id="">Contrib Select</select>
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

          <Footer/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})


export default connect(mapStateToProps)(TopicEdit);
