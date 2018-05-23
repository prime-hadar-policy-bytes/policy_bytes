import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';
import { Button } from 'react-bootstrap';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import './Footer.css';

const mapStateToProps = state => ({
    user: state.user,
    login: state.login,
});

class Footer extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    logout = () => {
        this.props.dispatch(triggerLogout());
    }

    loginFacebook = () => {
        this.props.dispatch({
          type: 'LOGIN_FACEBOOK'
        });
      }



    renderGreetingAdmin() {
        if (this.props.user.userInfo.status === 2) {
            return (
                <span>Hello Admin!</span>
            )
        } else {
            return (
                <div>
                <span style={{'padding' :'10px'}}>Hello {this.props.user.userInfo.firstName}</span>
                <span className="fbImage"><img src={this.props.user.userInfo.fbPicture}/></span>
                </div>
            )
        }
    }



    renderLoginItems() {

        if (!this.props.user.userInfo) {
            return (
                <div className="footer" id="footerButtons">
                    <div style={{'padding' :'10px'}}> <RegisterModal /></div>
                    <div style={{'padding' :'10px'}}> <LoginModal /></div>
                    <div style={{'padding' :'10px'}}> <a href="https://localhost:5000/api/facebook/send" className="btn btn-lg btn-social btn-facebook">
                        <i class="fa fa-facebook fa-fw"></i> Sign in with Facebook</a></div>
                </div>

            )
        }
        return (
            <div className="footer" id="footerButtons">
            <div style={{'padding' :'10px'}}> {this.renderGreetingAdmin()} </div>
            <div style={{'padding' :'10px'}}> <Button bsSize="small" onClick={this.logout}>Log Out</Button></div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderLoginItems()}
            </div>
        );
    }
}


export default connect(mapStateToProps)(Footer);
