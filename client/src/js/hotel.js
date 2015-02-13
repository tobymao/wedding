/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');

var HotelView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
      <div>
        <h1>Hotel Information</h1>
        <p>We have a block of rooms with the <a href={"http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Valdes%20Mao%20Wedding%5Esfosa%60vamvama%60144%60USD%60false%607/17/15%607/19/15%607/3/15&app=resvlink&stop_mobi=yes"} target="_blank">San Mateo Marriott</a> for Friday and Saturday night.</p>
        <p> Rooms are either a king bed or two queens. $144 a night - including complimentary internet and $5 self parking. The hotel also has a free airport shuttle (to/from SFO).</p>
        <p>Please make your reservation <a href={"http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Valdes%20Mao%20Wedding%5Esfosa%60vamvama%60144%60USD%60false%607/17/15%607/19/15%607/3/15&app=resvlink&stop_mobi=yes"} target="_blank">here</a>. If you would like to extend your stay, please call the hotel directly at 1-800-627-7468 and tell them you are booking with the Valdes and Mao wedding. The rooms are only available until July 3, so book soon!</p>
        <table>
          <tr>
            <td><ul>
              <li><b>Rooms Manager:</b> Lorena Ochoa</li>
              <li><b>Direct Phone #:</b> 650-653-6040</li>
              <li><b>Email:</b> lorenao@marriott-sanmateo.com</li>
            </ul></td>
            <td><ul>
              <li><b>Name of Event:</b> Valdes and Mao Wedding</li>
              <li><b>Arrival Date:</b> Friday, July 17, 2015</li>
              <li><b>Departure Date:</b> Sunday, July 19, 2015</li>
              <li><b>Cut-Off Date:</b> Friday, July 3, 2015</li>
              <li><b>Cancellation Policy:</b> 24 Hours prior to arrival</li>
              <li><b>Group Rate:</b> $144.00</li>
              <li><b>Included in your Rate:</b> Complimentary guestroom internet and $5.00 parking fee per car for all guests and attendees</li>
              <li><b>Reservation Link:</b> <a href={"http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Valdes%20Mao%20Wedding%5Esfosa%60vamvama%60144%60USD%60false%607/17/15%607/19/15%607/3/15&app=resvlink&stop_mobi=yes"} target="_blank">Valdes Mao Wedding</a></li>
            </ul></td>   
          </tr>
        </table>
        <table>
          <tr>
            <th>San Mateo Marriott</th>
          </tr>
          <tr>
            <td><ul>
              <li>1770 South Amphlett Blvd</li>
              <li>San Mateo, CA 94402</li>
              <li>650-653-6000</li>
            </ul></td>
          </tr>
        </table>
        <ul>
          <li><b>San Francisco Airport Shuttle</b>: Departs hotel on the hour every hour from 5:00 am - 9:00 pm</li>
          <li><b>California Grill Restaurant:</b> Serves Breakfast, Lunch, Dinner and Room Service</li>
          <li><b>The Marketplace:</b> Open Daily 6:30 am - 10:00 pm</li>
          <li><b>Fitness Center:</b> Open 24 Hours</li>
          <li><b>Outdoor Pool:</b> Open 6:00 am - 10:00 pm - NO Lifeguard on Duty</li>
          <li><b>Business Center:</b> Open 24 Hours, Complimentary services offered include: receiving faxes, sending faxes, computer usage, internet usage and copies up to first 20 pages.</li>
          <li><b>Hertz Rental Car Desk:</b> Hours of Operation are based on appointments made in advance please call 650-342-8259</li>
          <li><b>Parking:</b> Self Parking: $5.00 (with hotel block), normally $1.50 per hour up to $22.00 per day<br/>
          Valet Parking: $25.00</li>
        </ul>
      </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = HotelView;
