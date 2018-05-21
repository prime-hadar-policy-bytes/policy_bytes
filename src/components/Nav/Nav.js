import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class Nav extends Component {


  // facebookLogin = () {
  //   this.props.dispatch()
  // }

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
              <a href="https://localhost:5000/api/facebook/send">
                Login with Facebook
          </a>
            </li>
          </ul>
        </div>
      </div>
    );

  }
}

export default connect(mapStateToProps)(Nav);

