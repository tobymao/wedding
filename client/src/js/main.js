var React = require('react');
var AppViewController = require('./appcontroller.js');

window.onload = function() {
  var appElement = document.getElementById('appViewController');
  React.renderComponent(AppViewController(), appElement);
};
