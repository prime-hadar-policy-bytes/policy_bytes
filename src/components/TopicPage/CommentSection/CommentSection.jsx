import React, { Component } from 'react'
import { connect } from 'react-redux'
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import CommentAdd from './CommentAdd.jsx';
import CommentSectionItem from './CommentSectionItem.jsx';
import FacebookLogin from '../../FacebookLogin/FacebookLogin.jsx';

import { Panel, Button, ButtonGroup, Glyphicon, Image } from 'react-bootstrap';

import './CommentSection.css'



class CommentSection extends Component {

    constructor () {
        super();

    }

    componentDidMount() {
        // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({ 
            type: 'FETCH_GENERAL_COMMENTS',
            payload: {topic_id: this.props.topic_id}
        });
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

    //if user is logged out, facebook login appears
    loginUserInvite = () => {
        return (
            <div>To join the conversation...<FacebookLogin /></div>
        )
    }

    //EXAMPLE JSON Stringify w null
    // <pre>{JSON.stringify(this.props.user.userInfo , null, 2)}</pre>

    render() {

        let commentList = this.props.comments.commentsGeneral.map((comment) => {
            return (
                <CommentSectionItem  topic_id={this.props.topic_id} key={comment.id} comment={comment}/>
            )
        })

        return (
            <div>
                <Panel className="commentPanel">
                    <Panel.Heading>Comment Section</Panel.Heading>
                    <Panel.Body>
                        {(this.props.user.userInfo) ? <CommentAdd topic_id={this.props.topic_id} /> : this.loginUserInvite()}
                        <div className="commentPanelWrapper">
                        {commentList}</div>
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
