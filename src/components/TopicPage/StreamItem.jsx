import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Glyphicon, Button, ButtonGroup } from 'react-bootstrap';


class StreamItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

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

  handleOpen = () => {
    this.setState({
      open: !this.state.open
    })
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
      <div onClick={this.handleOpen}>

        <Panel className={streamItemClass} expanded={this.state.open}>
          <Panel.Body>
            <strong>Comment:</strong> 
            <br/>
            {this.props.streamItem.streamComment}

            <Panel.Collapse>
              <br/>
              <br/>
              <strong>Evidence:</strong> 
              <br/>
              {this.props.streamItem.streamEvidence}
              
              <br/>
              <br/>
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
            </Panel.Collapse>
          </Panel.Body>

        </Panel>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps)(StreamItem);
