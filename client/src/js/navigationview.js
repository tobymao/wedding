/** @jsx React.DOM */
// You need this to create html views.
var React = require('react');

// This is your main class
var NavigationView = React.createClass({
  link: function(tag, text, children) {
    /*jshint ignore:start */
    children = children || [];

    var delegate = this.props.delegate;

    var subMenu = function() {
      if (children.length > 0) {
        return (
          <ul>
            {children.map(function(child, index) {
              return <li key={index} onClick={delegate.navDidClick.bind(delegate, child.tag)}>{child.text}</li>
            })}
          </ul>
        );
      } else {
        return null;
      }
    };

    var liClick = function(event) {
      if (!children.length) {
        delegate.navDidClick(tag);
      }
    };

    return (
      <li onClick={liClick}>
        {text}
        {subMenu()}
      </li>
    );
    /*jshint ignore:end */
  },

  render: function() {
    /*jshint ignore:start */
    return (
        <div className="navigationView">
          <ul className="menu">
            {this.link('#home', 'Home', null)}
            {this.link('#about', 'About', null)}
            {this.link('#schedule', 'Schedule', null)}
            {this.link('#info', 'Guest Information', [{"tag": "#hotel", "text":"Hotel" }, {"tag":"#directions", "text":"Directions"}, {"tag":"#todo", "text":"Things To Do"}])}
            {this.link('#contact', 'Contact', [{"tag": "#rsvp", "text":"RSVP" }, {"tag":"#questions", "text":"Questions/Comments"}])}
          </ul>
        </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});

module.exports = NavigationView;
