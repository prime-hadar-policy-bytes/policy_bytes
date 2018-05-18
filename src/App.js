import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LandingPage from './components/LandingPage/LandingPage.jsx'
import TopicPage from './components/TopicPage/TopicPage.jsx'
import TopicManage from './components/Admin/TopicManage/TopicManage.jsx'
import TopicEdit from './components/Admin/TopicEdit/TopicEdit.jsx';
import CommentManage from './components/Admin/CommentManage/CommentManage.jsx';

import Nav from './components/Nav/Nav.jsx'

import './styles/main.css';

const App = () => (
  <div>
    <Header title="Policy Bytes" />
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route
            path="/home"
            component={LandingPage}
          />
          <Route
            path="/topicPage"
            component={TopicPage}
          />
          <Route
            path="/topicManage"
            component={TopicManage}
          />
          <Route
            path="/commentManage"
            component={CommentManage}
          />
          <Route
            path="/topicEdit"
            component={TopicEdit}
          />

  {/* predefined routes */}
          <Route
            path="/login"
            component={LoginPage}
          />
          <Route
            path="/register"
            component={RegisterPage}
          />
          {/* OTHERWISE (no path!) */}
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>

    </Router>
  </div>
);

export default App;
