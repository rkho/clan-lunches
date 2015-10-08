import React from 'react';
import { Router, Link, RouteHandler } from 'react-router';

import LandingModal from './LandingModal';

import { Button } from 'react-bootstrap';

class LandingText extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  _closeModal() {
    this.setState({
      showModal: false
    });
  }

  _openModal() {
    this.setState({
      showModal: true
    })
  }

  render() {
    return (
      <div className="main">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h2>Let's Have Lunch</h2>
              <h5>With 900+ members and growing, the HRX community is full of brilliant, talented engineers and entrepreneurs. It's an amazing network to be a part of. Want to meet some of your fellow peers?</h5>
              <br />
              <Button id="learnMoreButton" bsStyle="default" className="buttonPadding" onClick={this._openModal.bind(this)}>Learn More</Button>
              <Button id="authButton" bsStyle="success" className="buttonPadding"><i className="fa fa-github"></i> Sign in with Github</Button>
              <RouteHandler />
            </div>
          </div>
        </div>
        <LandingModal show={this.state.showModal} _closeModal={ this._closeModal.bind(this) }/>
      </div>
    )
  }
}

export default LandingText;
