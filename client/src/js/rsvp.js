/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');
require('./libs/js-image-slider.js');

var RSVPView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
        <div>
        <p>Please RSVP by Friday, June 26th using the form below or through <a href = "https://docs.google.com/forms/d/12N5GcwdRs0VrOzM-wy3cXIhxNqP-58C6k6MuMsCyr9M/viewform?usp=send_form" target="_blank">this link.</a></p>
        <iframe src="https://docs.google.com/forms/d/12N5GcwdRs0VrOzM-wy3cXIhxNqP-58C6k6MuMsCyr9M/viewform?embedded=true" width="700" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = RSVPView;
