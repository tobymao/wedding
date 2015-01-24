/** @jsx React.DOM */
// You need this to create html views.
var React = require('react');
var NavigationView = require('./navigationview.js');
var AboutView = require('./about.js');
var HomeView = require('./home.js');
var RSVPView = require('./rsvp.js');
var ScheduleView = require('./schedule.js');
var HotelView = require('./hotel.js');
var DirectionsView = require('./directions.js');
var ToDoView = require('./todo.js');
var FAQView = require('./faq.js');

// This is your main class
var AppViewController = React.createClass({
  getInitialState: function() {
    return {hash: window.location.hash};
  },

  route: function(hash) {
    /*jshint ignore:start */
    if(hash == '#rsvp') {
      return <RSVPView />
    } else if (hash == '#about') {
      return <AboutView />
    } else if (hash == '#schedule') {
      return <ScheduleView />
    } else if (hash == '#hotel') {
      return <HotelView />
    } else if (hash == '#directions') {
      return <DirectionsView />
    } else if (hash == '#todo') {
      return <ToDoView />
    } else if (hash == '#faq') {
      return <FAQView />
    } else {
      return <HomeView />
    }
    /*jshint ignore:end */
  },

  render: function() {
    /*jshint ignore:start */
    return (
      <div className="appViewController">
        <NavigationView /> 
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
