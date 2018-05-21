import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class Nav extends Component {


  loginFacebook = () => {
    console.log('made it to login facebook');
    this.props.dispatch({
      type: 'LOGIN_FACEBOOK'
  });
  }

  render() {

    return (
      <div className="navbar">
        <div>
          <ul>
            <li>
              <Link to="/home">
                Home
          </Link>
            </li>
            <li>
              <Link to="/topicPage">
                Topic Page
          </Link>
            </li>
            <li>
              <Link to="/topicManage">
                ADMIN Topic Manage
          </Link>
            </li>
            <li>
              <Link to="/topicEdit">
                Topic Edit
          </Link>
            </li>
            <li>
              <button onClick={this.loginFacebook}>Login with Facebook</button>
            </li>
          </ul>
        </div>
      </div>
    );

  }
}

export default connect(mapStateToProps)(Nav);

