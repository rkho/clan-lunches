import React from 'react';

class AlertBanner extends React.Component{
  render: function() {
    return (
      <div className="alert alert-info">
          <div className="container text-center">
            Hey HRX! We are migrating over from Google Apps Script over to our own service.
          </div>
      </div>
    )
  }
}

export default AlertBanner;
