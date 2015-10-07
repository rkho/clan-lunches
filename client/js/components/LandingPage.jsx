var React = require('react');

var LandingText = require('./LandingText');
var LearnMore = require('./LearnMore');

var LandingPage = React.createClass({
  render: function() {
    return (
      <div>
        <div className="wrapper">
          <div className="landing-header">
            <div className="container">
              <div className="motto">
                <h1 className="title-uppercase">Clan Lunches</h1>
                <h3>Automatic 1-on-1 lunches for Hack Reactor grads</h3>
                <br />
              </div>
            </div>
          </div>
          <LandingText />
        </div>
      </div>
    )
  }
})

module.exports = LandingPage;
