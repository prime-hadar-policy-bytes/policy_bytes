import React, { Component } from 'react'
import { connect } from 'react-redux'

import Footer from '../../Footer/Footer.jsx'
import TopicManagePanel from './TopicManagePanel.jsx'
import TopicManageModal from './TopicManageModal.jsx'
import RegisterModal from '../RegisterModal/RegisterModal.js'

import './TopicManage.css'; 

import { Link } from 'react-router-dom';
import { Panel, Button, ButtonGroup, ButtonToolbar, FormGroup, ControlLabel, FormControl, Checkbox, Glyphicon, Modal } from 'react-bootstrap'; 

class TopicManage extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      showModal: false,  
    }
  }

  componentDidMount () {
    this.fetchAllTopics(); 
    if (!this.props.user.userInfo) {
      this.props.history.push('login');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user.userInfo) {
      this.props.history.push('login');
    }
  }

  fetchAllTopics = () => {
    console.log('in FETCH_ALL_TOPICS');
    this.props.dispatch({
      type: 'FETCH_ALL_TOPICS'
    })
  }


  handleDismiss = () => {
    this.setState({ showModal: false });
  }

  handleShowDelete = () => {
    this.setState({ showModal: true });
  }




  render() {
    

    let topicsArray = this.props.state.topics.allTopics;
    let topicPanels = topicsArray.map((topic) => {
      return <TopicManagePanel key={topic.id}
                              topic={topic}
                              handleShowDelete={this.handleShowDelete}/>
    })

    let modalContent;
    if (this.state.showModal) {
      modalContent = (
        <TopicManageModal handleDismiss={this.handleDismiss}
                          handleDelete={this.handleDelete}/>
      )
    }


    return (
      <div>
        <div className="wrapper">

        <h1>
          Topic Manage Page
          <Button className="newTopicButton" bsStyle="success">
            <Link to='/topicEdit'>Create A New Topic</Link>
          </Button>
          <RegisterModal/>
        </h1>             

          
          {modalContent}
          {topicPanels}

        </div>
        {/* <Footer /> */}

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state,
  user: state.user
})


export default connect(mapStateToProps)(TopicManage);
