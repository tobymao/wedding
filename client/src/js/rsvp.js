/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');
require('./libs/js-image-slider.js');

var RSVPView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
        <div>
        <p>You sure are eager. Unfortunately, we're not ready to accept RSVPs yet. Try again later.</p>
        </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = RSVPView;
