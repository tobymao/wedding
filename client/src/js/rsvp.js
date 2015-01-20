/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');

var RSVPView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
      <div>
      <form>
        <label for="Name">Name:</label> <input type="text" name="Name" /><br />
        <label for="Age">Over 21?</label> <select name="Age">
          <option value="Adult">Yes</option>
          <option value="Child">No</option>
          </select><br />
        <label for="Attending">Can you come to the wedding?</label> <select name="Attending">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </select><br />
        <label for="allergies">Food Allergies:</label> <input type="text" name="allergies" /><br />
        <input type="submit" value = "Submit" />
      </form>
      </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = RSVPView;
