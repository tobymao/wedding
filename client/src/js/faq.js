/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');

var FAQView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
      <div>
      <h1>Frequently Asked Questions</h1>
      <p>Coming soon.</p>
      </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = FAQView;
