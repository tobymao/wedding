/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');

var FAQView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
      <div>
        <h1>Frequently Asked Questions</h1>
        <p className="question">What should we wear?</p>
        <p className="answer">The dress code is casual. You can wear whatever you like.</p>
        <p className="question">Is it really casual?</p>
        <p className="answer">Yup!</p>
        <p className="question">So I can wear what I'm wearing now?</p>
        <p className="answer">Yes, as long as it's appropriate to go out in public.</p>
        <p className="question">Will you have a registry?</p>
        <p className="answer">No, we will not.</p>
        <p className="question">Will there be dancing?</p>
        <p className="answer">We will not have dancing at our wedding, but we are planning on having other fun activities for you to do!</p>
        <p className="question">Will there be alcohol?</p>
        <p className="answer">We plan on having food (buffet) and drinks (both alcoholic and non-alcoholic) during the reception after the ceremony.</p>
      </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = FAQView;
