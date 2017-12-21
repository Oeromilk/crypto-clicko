// Import Dependecies
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');

// Import React Components
var HomeContainer = require('./components/home.jsx');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function(){
    ReactDom.render(
      React.createElement(HomeContainer),
      document.getElementById('app')
    )
  }
});

var router = new AppRouter();

module.exports = router;
