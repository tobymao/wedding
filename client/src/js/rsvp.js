/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');
require('./libs/js-image-slider.js');

var RSVPView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
        <div>
          <iframe src="https://docs.google.com/forms/d/1E2-QrFkcvv303ABq_9371KOaL-rqSQ3RW1eDubSm9kI/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = RSVPView;
