import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../Footer/Footer.jsx'
import CommentSection from './CommentSection/CommentSection.jsx'
import { USER_ACTIONS } from '../../redux/actions/userActions';

import { Panel, Tab, Tabs, Button, ButtonGroup } from 'react-bootstrap';

import dummyTopicCache from './DummyData.js'

//TO-DO replace hard-coded topic_id in CommentSection component

export class TopicPage extends Component {

  componentDidMount() {
    // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  render() {

    console.log(dummyTopicCache);
    

    return (
      <div>
        <div className="wrapper">
          <h1>Minimum Wage Increase</h1>


          {/* INTRO */}
          <Panel>
            <Panel.Body>
              <p>
                The Restaurant Opportunities Center of Minnesota (ROC MN)
                is a movement led by local restaurant workers, employers,
                and diners striving for higher standards in our industry.
                In St. Paul, for over 30 years, we have had one wage for all workers
                and we have created a thriving restaurant scene predicated on higher wages
                for workers. St. Paul is a leader in the effort to support working
                families and we should be proud of our commitment to an equal pay structure.
              </p>
            </Panel.Body>
          </Panel>

          <Panel>
            <Panel.Body>
              <h4>Common Ground</h4>
              <p>
                "The minimum wage is critical to consider."
              </p>
            </Panel.Body>
          </Panel>

          <Panel className="contributorPanel">
            <Panel.Body>
              <div className="wirePhoto"></div>
              <h3>Eli Harrison</h3>
              <i>Eli has a PhD in Economics from the University of Minnesota,
                and has worked as a Financial Analyst at Ameriprise Financial for 15 years.
                </i>
            </Panel.Body>
          </Panel>

          <Panel className="contributorPanel">
            <Panel.Body>
              <div className="wirePhoto"></div>
              <h3>Jennifer Johnson</h3>
              <i>Jennifer has a PhD in Economics from the University of Minnesota,
                and has worked as a Financial Analyst at Ameriprise Financial for 15 years.
                </i>
            </Panel.Body>
          </Panel>

          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Eli">
              Tab 1 content
              </Tab>
            <Tab eventKey={2} title="Jennifer">
              Tab 2 content
              </Tab>
          </Tabs>


          {/* ARENA */}
          <Panel>
            <Panel.Heading>Arena</Panel.Heading>
            <Panel.Body>
              <div className="wireArenaPhoto">Contrib. Photo</div>
              <Panel className="wireArenaSummary">
                <Panel.Body>
                  What restaurant owners might refer to as a tip credit,
                  is a tip penalty for workers since they must discount tips from their wage.
                  A tip penalty in St. Paul should not be considered; it would roll back 30 years of worker
                  protections and leave tipped workers in a more vulnerable position. I support a $15
                  minimum wage in St. Paul that leaves no worker behind.
                  </Panel.Body>
              </Panel>
              <Panel className="wireArena"></Panel>
              <div className="wireKeyClaim">Guns</div>
              <div className="wireKeyClaim">Pot</div>
              <div className="wireKeyClaim">Iran</div>
              <div className="wireKeyClaim">Traffic</div>
              <div className="wireKeyClaim">Taxes</div>
              <div className="wireKeyClaim">Rolling Stones/Beatles</div>
            </Panel.Body>
          </Panel>

          <CommentSection topicId={5} />

          
          <Panel>
            <Panel.Body>
              <h4>Sponsored by Ameriprise Financial</h4>
            </Panel.Body>
          </Panel>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

export default connect(mapStateToProps)(TopicPage);
