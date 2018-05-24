import React, { Component } from 'react'
import { connect } from 'react-redux'
import { USER_ACTIONS } from '../../../redux/actions/userActions';

import { Panel, Tab, Tabs, Button, ButtonGroup, Glyphicon, Form, FormGroup, ControlLabel, FormControl, Image } from 'react-bootstrap';

class CommentAdd extends Component {

    constructor() {
        super();
        //NOTE: approved is currently hard-coded. If backend validation of topics is implemented, can be responsive.
        //TO-DO typeRef would be a string or int coming from redux that would trigger a conditional in query on server to put in appropriate comment table. itemId would refer to redux to reference appropriate item.
        this.state = {
            referenceText: '',
            typeRef: '',
            itemId: '',
            placeholder: 'Join the conversation...',
            warning: '',
            comment: '',
            personId: '',
            topicId: '',
            approved: true
        }
    }

    componentDidMount = () => {

    }

    handleSubmit = (event) => {
        // event.preventDefault(); 
        if (this.state.comment != '') {
            this.setState({
                personId: this.props.user.userInfo.id,
                topicId: this.props.topicId,
                approved: true
            }, () => {
                this.props.dispatch({
                    type: 'SET_NEW_COMMENT',
                    payload: this.state,
                })
            });
            //TO-DO Correct for reset in react lifecycle
            // this.setState({
            //     comment: ''
            // });
        } else {
            this.setState({
                warning: `Did you want to write something?`,
                placeholder: 'Submitted!'
            });
        }
    }

    // handleTextChange = (event) => {
    //     this.props.dispatch({
    //         type: 'SET_NEW_COMMENT',
    //         payload: this.state,
    //     })
    // }


    handleTextChange = (event) => {
        this.setState({
            warning: '',
            comment: event.target.value
        })
    }

    render() {
        return (
            <Panel className="wireComment">
                <Panel.Body>
                    <Form>
                        <FormGroup controlId="formControlsTextarea">
                            <span style={{ 'padding': '10px' }}><Image rounded src={this.props.user.userInfo.fbPicture} /></span>
                            <div><p>{this.state.warning}</p></div>
                            <FormControl style={{ 'margin': '10px' }} componentClass="textarea" value={this.state.comment} onChange={this.handleTextChange} placeholder={this.state.placeholder} />
                        </FormGroup>
                    </Form>
                    <div><Button onClick={this.handleSubmit}>Submit</Button></div>
                </Panel.Body>
            </Panel>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    login: state.login,
    comments: state.comments
});

export default connect(mapStateToProps)(CommentAdd);
