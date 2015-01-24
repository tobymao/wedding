  /** @jsx React.DOM */
// You need this to create html views.

var React = require('react');

var ScheduleView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
      <div>
      <h1>Schedule</h1>
      <h2>Saturday, July 18<br />
      San Mateo, CA</h2>

      </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = ScheduleView;

