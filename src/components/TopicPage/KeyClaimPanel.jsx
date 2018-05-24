import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Panel, Button, ButtonGroup } from 'react-bootstrap';


export class KeyClaimPanel extends Component {


  render() {

    console.log('Panel component:',this.props.keyClaim);
    

    return (
      <div>
        <Panel className="keyClaimPanel">
          <Panel.Body>
            <p>{this.props.keyClaim.keyClaim}</p>
            <pre>{this.props.keyClaim.claimContributor}</pre>
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
