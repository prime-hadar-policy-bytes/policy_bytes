import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Glyphicon, Button, ButtonGroup } from 'react-bootstrap';


class StreamItem extends Component {

  handleCommentStream = (streamItemInput) => {
    console.log('clicked!');
    this.props.dispatch({
      type: 'SET_STREAM_COMMENT',
      payload: streamItemInput,
    })
    this.props.dispatch({
      type: 'CLEAR_PROPOSAL_COMMENT'
  });
  this.props.dispatch({
      type: 'CLEAR_KEY_CLAIM_COMMENT'
  });
  }


  render() {

    let streamItemClass = "streamItemPanel"
    if (this.props.streamItem.streamContributor === 'contributor1') {
      streamItemClass += " contrib1Stream"
    }
    if (this.props.streamItem.streamContributor === 'contributor2') {
      streamItemClass += " contrib2Stream"
    }

    // console.log(this.props.streamItem);

    return (
      <div>
        {/* <Panel className="streamItem"> */}
        {/* <Panel.Body> */}
        <Panel className={streamItemClass}>
          <Panel.Body>
            {/* <pre>{this.props.streamItem}</pre> */}
            {/* <pre>StreamItemId{this.props.streamItemId}</pre> */}
            {/* <pre>{this.props.streamItem.streamContributor}</pre> */}
            <span><strong>Comment:</strong> {this.props.streamItem.streamComment}
              <br />
              <br />
              <strong>Evidence:</strong> {this.props.streamItem.streamEvidence}</span>
          </Panel.Body>
          <Panel.Footer className="keyClaimFooter">
            <ButtonGroup className="keyClaimFooterButtons">
              <Button className="keyClaimFooterItem">
                <Glyphicon glyph="thumbs-up" />
              </Button>
              <Button className="keyClaimFooterItem">
                <Glyphicon glyph="heart" />
              </Button>
              <Button a href="/topicPage#commentPanelMaster" onClick={() => this.handleCommentStream(this.props.streamItem)} className="keyClaimFooterItem">
                <Glyphicon glyph="comment" />
              </Button>
            </ButtonGroup>
            <p className="keyClaimFooterLikes">Likes: 4 </p>

          </Panel.Footer>
        </Panel>
        {/* </Panel.Body> */}
        {/* // </Panel> */}

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps)(StreamItem);
