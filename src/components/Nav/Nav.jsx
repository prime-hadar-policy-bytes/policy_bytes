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

// console.log(process.env.LOCALHOST_SUCCESS_URL)

class Nav extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
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
          </ul>
        </div>
      </div>
    );

  }
}

export default connect(mapStateToProps)(Nav);

