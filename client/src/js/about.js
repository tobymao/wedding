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
            <img src = "../wedding/img/kirby1.jpg" alt="Toby and Ambie met through Rubik's cube competitions." /> 
            <img src = "../wedding/img/kirby2.jpg" alt="They learned Dvorak together and started competing in typing tests."/> 
            <img src = "../wedding/img/kirby3.jpg" alt="They also learned to hypermile together, seeing who could get better mileage."/> 
            <img src = "../wedding/img/kirby4.jpg" alt="Then they got into board games, attending conventions and competitions."/> 
            <img src = "../wedding/img/kirby5.jpg" alt="They went on vacations together. Not everything's a competition."/>
            <img src = "../wedding/img/kirby6.jpg" alt="They eat a lot when they go on vacations."/>
            <img src = "../wedding/img/kirby7.jpg" alt="They also watch anime and TV shows together."/>
            <img src = "../wedding/img/kirby8.jpg" alt="But they try not to be couch potatoes, so they exercise together. Toby beats Ambie up in Brazilian Jiu Jitsu."/>
            <img src = "../wedding/img/kirby9.jpg" alt="And then they go back to eating (well, cooking and then eating)."/>
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
    imageSlider.reload();
  }
});
module.exports = AboutView;
