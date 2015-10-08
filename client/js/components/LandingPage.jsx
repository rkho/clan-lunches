import React from 'react';

import LandingText from './LandingText';
import LearnMore from './LearnMore';

class LandingPage extends React.Component{
  render() {
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
}

export default LandingPage;
