/** @jsx React.DOM */
// You need this to create html views.
var React = require('react');
var NavigationView = require('./navigationview.js');
var AboutView = require('./about.js');
var HomeView = require('./home.js');
var RSVPView = require('./rsvp.js');

// This is your main class
var AppViewController = React.createClass({
  getInitialState: function() {
    return {hash: window.location.hash};
  },

  // Navbar Delegate
  navDidClick: function(tag) {
    document.location.hash = tag;
    this.setState({hash: tag});
  },

  route: function(hash) {
    /*jshint ignore:start */
    if(hash == '#rsvp') {
      return <RSVPView />
    } else if (hash == '#about') {
      return <AboutView />
    } else {
      return <HomeView />
    }
    /*jshint ignore:end */
  },

  render: function() {
    /*jshint ignore:start */
    return (
      <div className="appViewController">
        <NavigationView delegate={this}/> 
        {this.route(this.state.hash)}
      </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
    var self = this;
    var history = [];

    window.onhashchange = function() {
      var hash = document.location.hash;

      if (self.state.hash != hash) {
        self.setState({hash: hash});
      }
    };
  }
});

// This exports AppViewController so other classes can see it.
module.exports = AppViewController;
