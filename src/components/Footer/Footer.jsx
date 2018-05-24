import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';
import { Button } from 'react-bootstrap';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import './Footer.css';
import FacebookLogin from '../FacebookLogin/FacebookLogin.jsx';

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
                <span style={{'padding' :'10px'}}>Welcome, {this.props.user.userInfo.firstName}!</span>
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
                    <FacebookLogin/>
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
