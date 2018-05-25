import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Panel, Button, ButtonGroup } from 'react-bootstrap';

import StreamItem from './StreamItem.jsx'

import './TopicPage.css'



export class KeyClaimPanel extends Component {

  handleHover = (event) => {
    console.log('in handleHover');
    this.props.handleShowStream(this.props.keyClaimId)
  }


  render() {
    


    let streamItemArray = []
    for (let i = 0; i < Object.keys(this.props.keyClaim.streamData).length; i++) {
      let streamItem = this.props.keyClaim.streamData[i]

      streamItemArray.push(
        <Panel className="streamItem">
          <Panel.Body>
            <StreamItem key={i}
                        streamItemId={i}
                        streamItem={streamItem}/>
          </Panel.Body>
        </Panel>
      )     
    }
    
    
    return (
      <div>
        <Panel className="keyClaimPanel" onMouseEnter={this.handleHover}>
          <Panel.Body>
            <p>{this.props.keyClaim.keyClaim}</p>
            <pre>{this.props.keyClaim.claimContributor}</pre>
            <pre>{this.props.keyClaimId}</pre>
          </Panel.Body>
        </Panel>


        {streamItemArray}

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps)(KeyClaimPanel)
