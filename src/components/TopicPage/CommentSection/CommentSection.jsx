import React, { Component } from 'react'
import { connect } from 'react-redux'
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import CommentAdd from './CommentAdd.jsx';
import FacebookLogin from '../../FacebookLogin/FacebookLogin.jsx';

import { Panel, Button, ButtonGroup, Glyphicon} from 'react-bootstrap';


class CommentSection extends Component {

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    loginUserInvite = () => {
        return (
            <div>To join the conversation...<FacebookLogin/></div>
        )
    }


    render() {

        return (
            <div>
                <Panel>
                    <Panel.Heading>Comment Section</Panel.Heading>
                    <Panel.Body>

                        {(this.props.user.userInfo) ? <CommentAdd topicId={this.props.topicId}/> : this.loginUserInvite()}

                        <Panel className="wireComment">
                            <Panel.Heading>Christina Perfetti says:</Panel.Heading>
                            <Panel.Body>
                                I agree with Eli
                <ButtonGroup className="wireCommentButtons">
                                    <Button bsSize="small"><Glyphicon glyph="thumbs-up" /></Button>
                                    <Button bsSize="small"><Glyphicon glyph="heart" /></Button>
                                    <Button bsSize="small"><Glyphicon glyph="comment"/></Button>
                                    <Button bsSize="small"><Glyphicon glyph="trash" /></Button>
                                </ButtonGroup>
                            </Panel.Body>
                        </Panel>

                        <Panel className="wireComment">
                            <Panel.Heading>Alex Hanson says:</Panel.Heading>
                            <Panel.Body>
                                Jennifer seems like she know's what's up!
                <ButtonGroup className="wireCommentButtons">
                                    <Button bsStyle="danger">[AdminDelete]</Button>
                                    <Button>Like</Button>
                                    <Button>Love</Button>
                                    <Button>Comment</Button>
                                </ButtonGroup>
                            </Panel.Body>
                        </Panel>

                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    login: state.login,
});

export default connect(mapStateToProps)(CommentSection);
