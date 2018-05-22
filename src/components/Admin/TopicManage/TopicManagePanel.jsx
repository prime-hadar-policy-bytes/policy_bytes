import React, { Component } from 'react'
import { connect } from 'react-redux'


import { Panel, Button, ButtonGroup, ButtonToolbar, FormGroup, ControlLabel, FormControl, Checkbox, Glyphicon, Alert } from 'react-bootstrap'; 

class TopicManagePanel extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      show: false,  
    }
  }

  deleteTopic = () => {
    console.log('in deleteTopic, id:', this.props.topic.id);
    this.handleShow();
    this.props.dispatch({
      type: 'DELETE_TOPIC', 
      payload: this.props.topic.id
    })
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

  handleDismiss = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
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

    let alertContent;
    if (this.state.show) {
      alertContent = (
        <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
          <h4>Are you sure you want to delete this topic?</h4>
          <i>
            This cannot be undone and you will lose all associated data
          </i>
          <p>
            <Button onClick={this.deleteTopic} bsStyle="danger">Delete Topic</Button>
            <span> or </span>
            <Button onClick={this.handleDismiss}>Nevermind</Button>
          </p>
        </Alert>
      )
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

              {alertContent}

                <ButtonToolbar>
                  <ButtonGroup>
                    <Button onClick={this.handleShow}>
                      <Glyphicon glyph="trash"/>
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
