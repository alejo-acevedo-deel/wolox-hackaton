const angular = require('angular');

angular.module('app-bootstrap').component('home', {
  template: require('./home.pug')(),
  controller: [function () {
    this.logo = require('./../../assets/wolox_logo.svg');
    this.title = 'Welcome to AngularJS Bootstrap!';
    this.name = 'AngularJS component';
  }]
});
