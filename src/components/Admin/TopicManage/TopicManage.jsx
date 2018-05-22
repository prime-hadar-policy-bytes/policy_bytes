import React, { Component } from 'react'
import { connect } from 'react-redux'

import Footer from '../../Footer/Footer.jsx'
import TopicManagePanel from './TopicManagePanel.jsx'
import TopicManageModal from './TopicManageModal.jsx'

import './TopicManage.css'; 

import { Link } from 'react-router-dom';
import { Panel, Button, ButtonGroup, ButtonToolbar, FormGroup, ControlLabel, FormControl, Checkbox, Glyphicon, Modal } from 'react-bootstrap'; 

class TopicManage extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      topics: [
        1, 2, 3, 4
      ],
      showModal: false,  
    }
  }

  componentDidMount () {
    this.fetchAllTopics(); 
  }

  fetchAllTopics = () => {
    console.log('in FETCH_ALL_TOPICS');
    this.props.dispatch({
      type: 'FETCH_ALL_TOPICS'
    })
  }

  handleDelete = () => {
    console.log('in TopicManage handleDelete');
    this.handleShow(); 
    
  }


  handleDismiss = () => {
    this.setState({ showModal: false });
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }




  render() {
    

    let topicsArray = this.state.topics;
    let topicPanels = topicsArray.map((topic) => {
      return <TopicManagePanel key={topic}
                              topic={topic}
                              handleDelete={this.handleDelete}/>
    })

    let modalContent;
    if (this.state.showModal) {
      modalContent = (
        <TopicManageModal handleDismiss={this.handleDismiss}/>
      )
    }
    return (
      <div>
        <div className="wrapper">


        {JSON.stringify(this.state, null, 2)}

        <h1>
          Topic Manage Page
          <Button className="newTopicButton" bsStyle="success"><Link to='/topicEdit'>Create A New Topic</Link></Button>
        </h1>             

          
          {modalContent}
          {topicPanels}

        </div>
        <Footer />

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps)(TopicManage);
