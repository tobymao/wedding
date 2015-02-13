  /** @jsx React.DOM */
// You need this to create html views.

var React = require('react');

var ScheduleView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
      <div>
        <h1>Schedule</h1>
        <h2>Friday, July 17</h2>
        <p className="centerText">
          <b>Rehearsal Dinner - TBD</b><br/>
          TBD
        </p>
        <h2>Saturday, July 18</h2>
        <p className="centerText">
          <b>Wedding ceremony - 4:30 pm </b><br/>
          Beresford Recreation Center<br/>
          2720 Alameda de las Pulgas<br/>
          San Mateo, CA 94403<br/>
        </p>
        <p className="centerText">
          <b>Reception - afterwards</b><br/>
          Beresford Recreation Center (same place)
        </p>

      </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = ScheduleView;

