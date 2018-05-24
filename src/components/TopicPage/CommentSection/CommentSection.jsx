import React, { Component } from 'react'
import { connect } from 'react-redux'
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import CommentAdd from './CommentAdd.jsx';
import FacebookLogin from '../../FacebookLogin/FacebookLogin.jsx';

import { Panel, Button, ButtonGroup, Glyphicon, Image } from 'react-bootstrap';


class CommentSection extends Component {


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

    loginUserInvite = () => {
        return (
            <div>To join the conversation...<FacebookLogin /></div>
        )
    }
    
    render() {

        let status = this.props.user.userInfo && this.props.user.userInfo.status;
        let commentList = this.props.comments.commentsGeneral.map((comment) => {
            return (
                <Panel className="wireComment">
                    <Panel.Heading>{comment.fb_display_name} says:</Panel.Heading>
                    <Panel.Body>
                    <span style={{ 'padding': '10px' }}><Image rounded src={comment.fb_picture} /></span>
                    <span style={{ 'margin': '10px' }} >{comment.comment}</span>
                <ButtonGroup className="wireCommentButtons">
                            <Button bsSize="small"><Glyphicon glyph="thumbs-up" /></Button>
                            <Button bsSize="small"><Glyphicon glyph="heart" /></Button>
                            <Button bsSize="small"><Glyphicon glyph="comment" /></Button>
                            {(status === 2) ? <Button onClick={()=>this.deleteComment(comment.id)} bsSize="small"><Glyphicon 
                            glyph="trash" /></Button> : null}
                        </ButtonGroup>
                    </Panel.Body>
                </Panel>
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
                <pre>{JSON.stringify(this.props.user.userInfo , null, 2)}</pre>
                <pre>{JSON.stringify(this.props.comments.commentsGeneral, null, 2)}</pre>
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
