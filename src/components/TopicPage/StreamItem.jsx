import React, { Component } from 'react'
import { Panel, Button, ButtonGroup } from 'react-bootstrap';


export default class StreamItem extends Component {
  render() {


    let streamItemClass = "streamItemPanel"
    if (this.props.streamItem.streamContributor === 'contributor1') {
      streamItemClass += " contrib1Stream"
    }
    if (this.props.streamItem.streamContributor === 'contributor2') {
      streamItemClass += " contrib2Stream"
    }


    return (
      <div>
        {/* <Panel className="streamItem"> */}
          {/* <Panel.Body> */}
              <Panel className={streamItemClass}>
                <Panel.Body>
                  {/* <pre>keyClaimId{this.props.keyClaimId}</pre> */}
                  {/* <pre>StreamItemId{this.props.streamItemId}</pre> */}
                  {/* <pre>{this.props.streamItem.streamContributor}</pre> */}
                  <span><strong>Comment:</strong> {this.props.streamItem.streamComment}
                  <br/>
                  <br/>
                  <strong>Evidence:</strong> {this.props.streamItem.streamEvidence}</span>
                </Panel.Body>
              </Panel>
          {/* </Panel.Body> */}
        {/* // </Panel> */}

      </div>
    )
  }
}
