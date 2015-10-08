import React from 'react';
import Router from 'react-router';
import routes from './routes';

import '../css/ct-paper.css';
import '../css/styles.css';

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.body);
});
