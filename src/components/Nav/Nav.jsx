import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { Button} from 'react-bootstrap'; 
import './Nav.css';

const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class Nav extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  loginFacebook = () => {
    this.props.dispatch({
      type: 'LOGIN_FACEBOOK'
    });
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {

    let faceBookToRender;

      if (!this.props.user.userInfo) {
        faceBookToRender = (
              <a href="https://localhost:5000/api/facebook/send" className="btn btn-lg btn-social btn-facebook">
    <i class="fa fa-facebook fa-fw"></i> Sign in with Facebook
    </a>

        )
      } else {
        faceBookToRender = (
          <div className="helloUser">
            Welcome, {this.props.user.userInfo.firstName}
            <span className="fbImage"><img src={this.props.user.userInfo.fbPicture} alt="facebook pic missing" /></span> 
            <Button bsSize="small" onClick={this.logout}>Log Out</Button>
          </div>
        )
      }

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
              {faceBookToRender}
            </li>
          </ul>
        </div>
      </div>
    );

  }
}

export default connect(mapStateToProps)(Nav);

