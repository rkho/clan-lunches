var Router = require ('react-router');
var Route = Router.Route;

var App = require('./App');

var routes = (
    <Route name="app" path="/" handler={ App }>
    </Route>
)

module.exports = routes;
