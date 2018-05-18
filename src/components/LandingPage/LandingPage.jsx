import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../Footer/Footer.jsx'

import Panel from 'react-bootstrap/lib/Panel'

export class LandingPage extends Component {

  render() {
    return (
      <div>
        <div className="wrapper">
          <h1>Landing Page</h1>
            <Panel>
              <Panel.Body>
              <h4>Our Format</h4>
              <p>
                Designed to facilitate better debate. 
                You can scan arguments and cut to the chase examining evidence in 
                these curated conversations. 
                Creating intentional dialogue that focuses on individual argumentation.
              </p>
              </Panel.Body>
            </Panel>

            <Panel> 
              <Panel.Heading>- Current Conversation -</Panel.Heading>
              <Panel.Body>
               <strong> Minimum Wage in MPLS/STP</strong>
               <p>Published: April 18, 2010</p>
               <div className="wirePhoto"></div>
               <div className="wirePhoto"></div>
               <h3>Eli Harrison</h3>
                <i>A local, small restaurant owner in Minneapolis. 
                  Already raised the wage for their employees successfully.
                   Has first hand experience handling retaurant finances.
                </i>
               <br/>
               <br/>
               <h3>Jennifer Jones</h3>
               <i>
                  A restaurant worker union representative. 
                  Works with large corporations to slowly implement wage raises.
               </i>
              </Panel.Body>
            </Panel>

            <Panel> 
              <Panel.Heading>- Archive -</Panel.Heading>
              <Panel.Body>
                <Panel className="wireArchive">Guns</Panel>
                <Panel className="wireArchive">Pot</Panel>
                <Panel className="wireArchive">Iran</Panel>
                <Panel className="wireArchive">Traffic</Panel>
                <Panel className="wireArchive">Taxes</Panel>
                <Panel className="wireArchive">Rolling Stones/Beatles</Panel>
              </Panel.Body>
            </Panel>

          </div>

          <Footer/>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps)(LandingPage);
