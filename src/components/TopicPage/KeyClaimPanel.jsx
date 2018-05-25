import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Panel, Button, ButtonGroup } from 'react-bootstrap';

import StreamItem from './StreamItem.jsx'

import './TopicPage.css'



export class KeyClaimPanel extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      keyClaimLocked: false
    }
  }

  handleMouseEnter = (event) => {
    this.props.handleHoverShowStream(this.props.keyClaimId)
  }

  handleMouseLeave = (event) => {
    this.props.handleHoverHideStream(); 
  }

  toggleLockKeyClaim = (event) => {
    console.log('in KeyClaimPanel toggleLockKeyClaim');
    this.props.toggleClickShowStream(this.props.keyClaimId)
  }


  render() {
    
    let streamItemArray = []
    for (let i = 0; i < Object.keys(this.props.keyClaim.streamData).length; i++) {
      let streamItem = this.props.keyClaim.streamData[i]
      // console.log('streamItem passed in:', streamItem);
      // console.log('this.props.keyClaimId passed in:', this.props.keyClaimId);
      streamItemArray.push(
        <Panel className="streamItem">
          <Panel.Body>
            <StreamItem key={i}
                        streamItemId={i}
                        keyClaimId={this.props.keyClaimId}
                        streamItem={streamItem}/>
          </Panel.Body>
        </Panel>
      ) 
    }


//if a keyClaim is locked open, and the keyClaimId === the Id of the stream being shown, change class info
    let keyClaimClass = "keyClaimPanel"
    if (this.props.keyClaimLocked && this.props.keyClaimId === this.props.showStreamForClaim) {
      keyClaimClass += " locked"      
    }


    
    return (
      <div>
        <Panel className={keyClaimClass}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onClick={this.toggleLockKeyClaim}>
          <Panel.Body>
            <p>{this.props.keyClaim.keyClaim}</p>
            <pre>{this.props.keyClaim.claimContributor}</pre>
            <pre>{this.props.keyClaimId}</pre>
            <pre>{this.props.showStreamForClaim}</pre>
          </Panel.Body>
        </Panel>

{/* SHOW STREAM ITEM ARRAY FOR CLAIM SELECTED IN THIS.PROPS.showStreamForClaim */}
        {this.props.showStreamForClaim === this.props.keyClaimId && streamItemArray }


      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps)(KeyClaimPanel)
