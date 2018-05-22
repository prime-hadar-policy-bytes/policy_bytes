import React, { Component } from 'react'
import { connect } from 'react-redux'


import { Panel, Button, ButtonGroup, ButtonToolbar, FormGroup, ControlLabel, FormControl, Checkbox, Glyphicon } from 'react-bootstrap'; 

class TopicManagePanel extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      showAlert: false,  
    }
  }

  handleDeleteTopic = () => {
    console.log('in handleDeleteTopic', this.props.topic);
    this.props.handleDelete(this.props.topic); 

  }


  handleFeatureTopic = () => {
    console.log('toggleFeatureTopic Clicked:', this.props.topic);
    
  }

  handleEditTopic = () => {
    console.log('handleEditTopic Clicked:', this.props.topic);
  }




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
                    <Button onClick={this.handleDeleteTopic}>
                      <Glyphicon glyph="trash"/>
                    </Button>
                    <Button onClick={this.handleFeatureTopic}>
                      <Glyphicon glyph="star"/>
                    </Button>
                    <Button onClick={this.handleEditTopic}>
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
