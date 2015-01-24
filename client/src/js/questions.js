/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');

var QuestionsView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
      <div>
      <p>Please visit the FAQ for frequently asked questions. If you have other questions or comments, please fill out the form below.</p>
      </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = QuestionsView;
