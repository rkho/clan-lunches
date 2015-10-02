var React = require('react');
var Router = require ('react-router');

var routes = require('./routes');

require('../css/ct-paper.css');
require('../css/styles.css');

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.body);
});