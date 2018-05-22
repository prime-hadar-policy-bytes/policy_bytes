import React, { Component } from 'react'
import { connect } from 'react-redux'

import Footer from '../../Footer/Footer.jsx'
import TopicManagePanel from './TopicManagePanel.jsx'

import { Link } from 'react-router-dom';
import { Panel, Button, ButtonGroup, ButtonToolbar, FormGroup, ControlLabel, FormControl, Checkbox, Glyphicon } from 'react-bootstrap'; 

class TopicManage extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      topics: [
        1, 2, 3, 4
      ]
    }
  }


  render() {

    let topicsArray = this.state.topics;
    let topicPanels = topicsArray.map((topic) => {
      return <TopicManagePanel/>
    })

    return (
      <div>
                    
        <h1>Topic Manage Page</h1>

        <Panel className="topicManagePanel">
            <Panel.Heading>Create a New Topic</Panel.Heading>
            <Panel.Body>
            <Button bsStyle="success"><Link to='/topicEdit'>Create New Topic Button</Link></Button>
            </Panel.Body>
        </Panel>
          
          
          {topicPanels}

        <Footer />

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps)(TopicManage);
