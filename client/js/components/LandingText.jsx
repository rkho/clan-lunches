var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;

var LandingText = React.createClass({
  getInitialState: function() {
    return {
      showModal: false
    }
  },

  _closeModal: function() {
    this.setState({
      showModal: false
    });
  },

  _openModal: function() {
    this.setState({
      showModal: true
    })
  },

  render: function() {
    return (
      <div className="main">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h2>Let's Have Lunch</h2>
              <h5>With 900+ members and growing, the HRX community is full of brilliant, talented engineers and entrepreneurs. It's an amazing network to be a part of. Want to meet some of your fellow peers?</h5>
              <br />
              <Button id="learnMoreButton" bsStyle="default" className="buttonPadding" onClick={this._openModal}>Learn More</Button>
              <Button id="authButton" bsStyle="success" className="buttonPadding"><i className="fa fa-github"></i> Sign in with Github</Button>
              <RouteHandler />
            </div>
          </div>
        </div>
        <Modal show={this.state.showModal} onHide={this._closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>How It Works</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>One weekly meeting</h3>
            <p>Once a week, we'll email you to ask if you'd like to meet an HR alum. If you say yes, you'll be asked for your availability for that week.</p>
            <h3>Intelligent Matching</h3>
            <p>Our webworkers will intelligently match you with a fellow alum and connect the two of you. From there, it's up to the two of you to make plans.</p>
            <h3>Ready to get started?</h3>
            <Button id="authButton" bsStyle="success" className="modalButton"><i className="fa fa-github"></i> Sign in with Github</Button>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
})

module.exports = LandingText;
