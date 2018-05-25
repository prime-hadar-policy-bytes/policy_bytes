import React, { Component } from 'react'
import { Panel, Button, ButtonGroup } from 'react-bootstrap';


export default class StreamItem extends Component {
  render() {
    return (
      <div>
        <Panel className="streamItemPanel">
          <Panel.Body>
            <pre>keyClaimId{this.props.keyClaimId}</pre>
            <pre>StreamItemId{this.props.streamItemId}</pre>
            <pre>{this.props.streamItem.streamContributor}</pre>
            <span><strong>Comment:</strong> {this.props.streamItem.streamComment}
            <br/>
            <br/>
            <strong>Evidence:</strong> {this.props.streamItem.streamEvidence}</span>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}
