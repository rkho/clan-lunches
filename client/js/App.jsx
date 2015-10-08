import React from 'react';
import { Router, RouteHandler } from 'react-router';
import Navigation from './components/Navigation';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <RouteHandler />
      </div>
    )
  }
}

export default App;
