import React, { Component } from 'react'
import { connect } from 'react-redux'
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import CommentAdd from './CommentAdd.jsx';
import FacebookLogin from '../../FacebookLogin/FacebookLogin.jsx';

import { Panel, Button, ButtonGroup, Glyphicon, Image } from 'react-bootstrap';


class CommentSection extends Component {

    constructor () {
        super();

        this.state = {
            addCommentShown: false
        }
    }

    componentDidMount() {
        // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({ type: 'FETCH_GENERAL_COMMENTS' });
    }

    deleteComment = (commentInput) => {
        this.props.dispatch({
            type: 'DELETE_GENERAL_COMMENT',
            payload: commentInput
        });
    }

    likeComment = (commentInput) => {
        this.props.dispatch({
            type: 'LIKE_GENERAL_COMMENT',
            payload: commentInput
        });
    }

    showAddCommentShown = () => {
        this.setState({
            addCommentShown: !this.state.addCommentShown
        }, ()=> {
            console.log(this.state.addCommentShown);
        })

    }

    loginUserInvite = () => {
        return (
            <div>To join the conversation...<FacebookLogin /></div>
        )
    }

    //EXAMPLE JSON Stringify w null
    // <pre>{JSON.stringify(this.props.user.userInfo , null, 2)}</pre>
    // <pre>{JSON.stringify(this.props.comments.commentsGeneral, null, 2)}</pre>
    render() {

        let status = this.props.user.userInfo && this.props.user.userInfo.status;
        let commentList = this.props.comments.commentsGeneral.map((comment) => {
            return (
                <div>
                <Panel className="wireComment">
                    <Panel.Heading>{comment.fb_display_name} says:</Panel.Heading>
                    <Panel.Body>
                        <span style={{ 'padding': '10px' }}><Image rounded src={comment.fb_picture} /></span>
                        <span style={{ 'margin': '10px' }} >{comment.comment}</span>
                        <ButtonGroup className="wireCommentButtons">
                            <Button className="commentButton" onClick={() => this.likeComment(comment.id)} bsSize="small"><Glyphicon glyph="thumbs-up" /></Button>
                            <Button className="commentButton" onClick={this.showAddCommentShown} bsSize="small">Reply</Button>
                            {(status === 2) ? <Button onClick={() => this.deleteComment(comment.id)} className="commentButton" bsSize="small"><Glyphicon
                                glyph="trash" /></Button> : null}
                        </ButtonGroup>
                    </Panel.Body>
                </Panel>
                {(this.state.addCommentShown === true) ? <CommentAdd isReply={true} lastOrder={comment.order}/> : null}
                </div>
            )
        })

        return (
            <div>
                <Panel>
                    <Panel.Heading>Comment Section</Panel.Heading>
                    <Panel.Body>
                        {(this.props.user.userInfo) ? <CommentAdd topicId={this.props.topicId} /> : this.loginUserInvite()}
                        {commentList}
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    login: state.login,
    comments: state.comments
});

export default connect(mapStateToProps)(CommentSection);
