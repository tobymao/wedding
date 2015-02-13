/** @jsx React.DOM */
// You need this to create html views.

var React = require('react');

var ToDoView = React.createClass({
  render: function() {
    /*jshint ignore:start */
    return (
      <div>
        <p className="centerText">Here are some places we like to go. Distances are from the San Mateo Marriott hotel.</p>
        <h2>Things to Eat</h2>
        <table>
          <tr>
            <th>Within 5 miles</th>
            <th>5+ miles</th>
            <th>Across a Bridge</th>
          </tr>
          <tr>
            <td><ul>
              <li><a href={"http://www.yelp.com/biz/ramen-dojo-san-mateo"} target="_blank">Ramen Dojo</a></li>
              <li><a href={"http://www.yelp.com/biz/espostos-borel-delicatessen-san-mateo"} target="_blank">Esposto's</a> (Italian Sandwiches)</li>
              <li><a href={"http://www.yelp.com/biz/espetus-churrascaria-san-mateo"} target="_blank">Espetus</a> (Brazilian BBQ)</li>
            </ul></td>
            <td><ul>
              <li><a href={"http://www.yelp.com/biz/cafe-grillades-san-bruno"} target="_blank">Cafe Grillades</a></li>
            </ul></td>
            <td><ul>
              <li><a href={"http://www.yelp.com/biz/ohgane-korean-restaurant-oakland"} target="_blank">Ohgane</a> (Korean BBQ)</li>
            </ul></td>
          </tr>
        </table>
        <h2>Desserts and Sweets</h2>
        <table>
          <tr>
            <th>Within 5 miles</th>
            <th>5+ miles</th>
            <th>Across a Bridge</th>
          </tr>
          <tr>
            <td><ul>
              <li><a href={"http://www.yelp.com/biz/cream-san-mateo"} target="_blank">Cream</a></li>
              <li><a href={"http://www.yelp.com/biz/yumi-yogurt-san-mateo"} target="_blank">Yumi Yogurt</a></li>
              <li><a href={"http://www.yelp.com/biz/bambu-desserts-and-drinks-san-mateo"} target="_blank">Bambu</a></li>
            </ul></td>
            <td><ul>
              <li><a href={"http://www.yelp.com/biz/cafe-grillades-san-bruno"} target="_blank">Cafe Grillades</a></li>
            </ul></td>
            <td><ul>
              <li><a href={"http://www.yelp.com/biz/fentons-creamery-oakland-2"} target="_blank">Fenton's</a></li>
            </ul></td>
          </tr>
        </table>
        <h2>Fun Activities</h2>
        <table>
            <tr>
              <th>Within 5 miles</th>
              <th>5+ miles</th>
              <th>Across a Bridge</th>
            </tr>
            <tr>
            <td><ul>
              <li><a href={"http://www.yelp.com/biz/japanese-gardens-san-mateo?osq=japanese+garden"} target="_blank">Japanese Gardens</a></li>
              <li><a href={"http://www.yelp.com/biz/hillsdale-shopping-center-san-mateo?osq=hillsdale+mall"} target="_blank">Hillsdale Shopping Center</a></li>
              <li><a href={"http://www.yelp.com/biz/gator-games-and-hobby-san-mateo"} target="_blank">Gator Games</a></li>
            </ul></td>
            <td><ul>
              <li><a href={"http://www.yelp.com/biz/gokart-racer-burlingame"} target="_blank">GoKart Racer</a></li>
              <li><a href={"http://www.yelp.com/biz/computer-history-museum-mountain-view"} target="_blank">Computer History Museum</a></li>
              <li><a href={"http://www.yelp.com/biz/exploratorium-san-francisco-2"} target="_blank">Exploratorium</a></li>
            </ul></td>
            <td><ul>
              <li><a href={"http://www.yelp.com/biz/pacific-pinball-museum-alameda"} target="_blank">Pacific Pinball Museum</a></li>
            </ul></td>
          </tr>
        </table> 

      </div>
    );
    /*jshint ignore:end */
  },

  componentDidMount: function() {
  }
});
module.exports = ToDoView;
