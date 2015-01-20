/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');

var HomeView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
      <div>
      <p className="centerText">
      <img src = "../wedding/img/save_the_date.png" height="500"/></p>
      <h1>SAVE THE DATE</h1>
      <h2>Saturday, July 18<br />
      San Mateo, CA</h2>

      <p className="centerText">Toby and Ambie are getting married!<br />
      Website coming soon.</p>
      </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = HomeView;
