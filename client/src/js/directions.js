/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');

var DirectionsView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
      <div>
        <h2>Directions to Venue</h2>
        <p className="centerText">
          <b>Beresford Recreation Center</b><br/>
          2720 Alameda de las Pulgas<br/>
          San Mateo, CA 94403
        </p>
        <p><ul>
          <li>From the hotel, head towards Concar Dr</li>
          <li>S Amphlett Blvd turns right and becomes Concar</li>
          <li>Merge onto Highway 92 West (on left) toward Half Moon Bay</li>
          <li>Take the Alameda de Las Pulgas exit</li>
          <li>Turn left onto Alameda de las Pulgas</li>
          <li>The park will be on the right side at 27th Ave. Turn into the parking lot located on Alameda de Las Pulgas.</li>
          <li>The recreation center is the building at the corner of Alameda de Las Pulgas and 28th Ave.</li>
        </ul></p>
        <h2>Directions to Hotel</h2>
        <p className="centerText">
          <b>San Mateo Marriott</b><br/>
          1770 South Amphlett Blvd<br/>
          San Mateo, CA 94402
        </p>
        <p><ul>
          <li>Take Highway 101 North (if coming from SoCal) or 101 South (if coming from the airport or SF)</li>
          <li>From the 101, take Highway 92 going West</li>
          <li>Take the Delaware Street Exit (located on the right side)</li>
          <li>Veer to your right at the Exit and continue straight ahead onto Concar Drive</li>
          <li>Follow Concar Drive through Delaware and Grant Street (DO NOT TURN ON THESE STREETS)</li>
          <li>Concar Drive turns into South Amphlett Boulevard, the San Mateo Marriott will be on your left</li>
          <li>Do not turn into the first entrance, the next entrance will bring you to the front of the hotel</li>
        </ul></p>
      </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = DirectionsView;
