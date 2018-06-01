import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { USER_ACTIONS } from '../../redux/actions/userActions';

import { triggerLogout } from '../../redux/actions/loginActions';

import { Button } from 'react-bootstrap';



import Header from '../Header/Header';

import './Nav.css';

const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

// console.log(process.env.LOCALHOST_SUCCESS_URL)

class Nav extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
  }

  renderGreetingAdmin() {
    if (this.props.user.userInfo.status === 2) {
      return (
        <span>Hello Admin!</span>
      )
    } else {
      return (
        <div>
          <span>Welcome, {this.props.user.userInfo.firstName}!</span>
        </div>
      )
    }
  }

  renderLoginItems() {
    if (this.props.user.userInfo) {
      return (
        <div className="footer" id="footerButtons">
          <div> {this.renderGreetingAdmin()} </div>
          <div> <Button bsSize="small" onClick={this.logout}>Log Out</Button></div>
        </div>
      )
    }
  }


  render() {





    return (
      <div className="navbar">
        <div>
          <ul>
            <li>
              <Link to="/home">
                <img src="/assets/policybytes_logo.png" alt="" width="140"/>
              </Link>
            </li>
            <li>
              <Link to="/home">
                Home
              </Link>
            </li>

            <li className="loginButton">
              {this.renderLoginItems()}
            </li>

          </ul>
        </div>
      </div>
    );

  }
}

export default connect(mapStateToProps)(Nav);

