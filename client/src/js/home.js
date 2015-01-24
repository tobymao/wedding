/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');

var HomeView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
      <div>
        <p className="centerText">
          <img src= "../wedding/img/save_the_date.jpg" height="500"/>
        </p>
        <p className="centerText">
          <a target="_blank" href={"https://docs.google.com/forms/d/1E2-QrFkcvv303ABq_9371KOaL-rqSQ3RW1eDubSm9kI/viewform?c=0&w=1"}>
            Please fill out the questionnaire if you have not done so already.
          </a>
        </p>
      </div>
    );
    /*jshint ignore:end */
  },
});

module.exports = HomeView;
