/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');

var HomeView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
      <div>
      <p className="centerText">
      <img src = "../wedding/img/save_the_date.jpg" height="500"/></p>
      </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = HomeView;
