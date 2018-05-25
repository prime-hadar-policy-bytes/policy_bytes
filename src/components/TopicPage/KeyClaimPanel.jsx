import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Panel, Button, ButtonGroup } from 'react-bootstrap';

import './TopicPage.css'



export class KeyClaimPanel extends Component {


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
                onClick={this.toggleLockKeyClaim}
                >
          <Panel.Body>
            <p>{this.props.keyClaim.keyClaim}</p>
            <pre>{this.props.keyClaim.claimContributor}</pre>
            <pre>{this.props.keyClaimId}</pre>
            <pre>{this.props.showStreamForClaim}</pre>
          </Panel.Body>
        </Panel>




      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps)(KeyClaimPanel)
