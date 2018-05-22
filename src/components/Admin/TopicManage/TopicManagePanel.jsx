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

//toggle published status in db and reset all topics
  togglePublished = () => {
    console.log('in Panel togglePublished');
    this.props.dispatch({
      type: 'TOGGLE_PUBLISHED',
      payload: this.props.topic
    })
  }

//toggle featured status in db and reset all topics
  toggleFeatured = () => {
    console.log('in Panel toggleFeatured');
    this.props.dispatch({
      type: 'TOGGLE_FEATURED',
      payload: this.props.topic
    })
  }



  render() {

//color/text of publish button based on topic.published status
    let publishStyle = 'default';
    if (this.props.topic.published) {
      publishStyle = 'success'
    }
    let publishText = 'Unpublished';
    if (this.props.topic.published) {
      publishText = 'Published'
    }
//color/text of publish button based on topic.featured status
    let featuredStyle = 'default';
    if (this.props.topic.featured) {
      featuredStyle = 'primary'
    }
    let featuredText = 'Set Featured';
    if (this.props.topic.featured) {
      featuredText = 'Featured Topic'
    }
 

    return (
      <div>
               
            <Panel className="topicManagePanel">
              <Panel.Heading>
                {this.props.topic.topic_title}
                <Button bsStyle={publishStyle} onClick={this.togglePublished}>{publishText}</Button>
                <Button bsStyle={featuredStyle} onClick={this.toggleFeatured}>{featuredText}</Button>
              </Panel.Heading>
              <Panel.Body>
                <p>
                {this.props.topic.archive_summary}

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
