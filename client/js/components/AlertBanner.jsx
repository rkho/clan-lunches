var React = require('react');

var AlertBanner = React.createClass({
  render: function() {
    return (
      <div className="alert alert-info">
          <div className="container text-center">
            Hey HRX! We are migrating over from Google Apps Script over to our own service.
          </div>
      </div>
    )
  }
})

module.exports = AlertBanner;
