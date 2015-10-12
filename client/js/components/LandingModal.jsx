import React from 'react';

import { Button, Modal } from 'react-bootstrap';

class LandingModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props._closeModal}>
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
    )
  }
}

export default LandingModal;
