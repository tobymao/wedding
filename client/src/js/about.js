/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');

var AboutView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
      <p>About Me!</p>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = AboutView;
