var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var LandingText = React.createClass({
  render: function() {
    return (
      <div className="main">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h2>Let's Connect</h2>
              <h5>With 900+ members and growing, the HRX community is full of brilliant, talented engineers and entrepreneurs. It's an amazing network to be a part of. Want to meet some of your fellow peers?</h5>
              <br />
              <button type="button" id="authButton" className="btn btn-primary"><i className="fa fa-github"></i> Sign in with Github</button>
              <RouteHandler />
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = LandingText;
