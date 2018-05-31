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
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading) {
      if(!this.props.user.userInfo) {
        // userInfo is null, that means the user isn't logged in
        this.props.history.push('/login');
      } else if(this.props.user.userInfo.status !== 2) {
        // user is not an admin
        this.props.history.push('/login');
      } else {
        // user is an admin, do nothing
      }
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

        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <pre>all topics reducer:::<br/>{JSON.stringify(this.props.state.topics.allTopics, null, 2)}</pre>

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
