/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');

var HomeView = React.createClass({
  render: function() {
    var linkDidClick = function() {
      document.location.hash = '#rsvp';
    };

    /*jshint ignore:start */
    return (
      <div>
        <p className="centerText">Welcome to our wedding website!</p>
        <p className="centerText">
          <span>If you need to RSVP, please click </span>  
          <span className="link" onClick={linkDidClick}>here</span>
          <span>.</span>
        </p>
        <p className="centerText"><img src= "../wedding/img/save_the_date.jpg" height="500"/></p>
      </div>
    );
    /*jshint ignore:end */
  },
});

module.exports = HomeView;
