import React, { Component } from 'react'
import { connect } from 'react-redux'


import { Panel, Button, ButtonGroup, ButtonToolbar, FormGroup, ControlLabel, FormControl, Checkbox, Glyphicon } from 'react-bootstrap'; 

class TopicManagePanel extends Component {

  render() {
    return (
      <div>
               
            <Panel className="topicManagePanel">
              <Panel.Heading>
                Raising the Minimum Wage
                <Checkbox>Publish/Unpublish</Checkbox>
              </Panel.Heading>
              <Panel.Body>
                <p>
                  Hector Chavez, Nicole Rodriguez, Josepine Lampone, 
                  propose policy plans surrounding public transit in the 
                  Twin Cities and discuss the implications, (dis)advantages 
                  and solvency of each plan.
                </p>
                
                <img src="./assets/politicsIcon.svg" alt="" width="200"/>

                <ButtonToolbar>
                  <ButtonGroup>
                    <Button>
                      <Glyphicon glyph="trash"/>
                    </Button>
                    <Button>
                      <Glyphicon glyph="star"/>
                    </Button>
                    <Button>
                      <Glyphicon glyph="pencil"/>
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>

              </Panel.Body>
            </Panel>
            
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps)(TopicManagePanel);
