/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');
var imageSlider = require('./libs/js-image-slider.js');

var AboutView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
      <div>
        <h1>About Us</h1>
        <div id="sliderFrame">
          <div id="slider">
            <img src = "../wedding/img/kirby1.jpg" alt="Toby and Ambie met through the Rubik's cube." /> 
            <img src = "../wedding/img/kirby2.jpg" /> 
            <img src = "../wedding/img/kirby3.jpg" /> 
            <img src = "../wedding/img/kirby4.jpg" /> 
          </div>
          <div className="group1-Wrapper">
            <a onClick={imageSlider.previous} className="group1-Prev"></a>
            <a onClick={imageSlider.next} className="group1-Next"></a>
          </div>
        </div>
      </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = AboutView;
