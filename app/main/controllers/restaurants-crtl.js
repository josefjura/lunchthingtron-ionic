'use strict';
angular.module('main')
.controller('RestaurantsCtrl', function ($log, Zomato, Config) {

  $log.log('Hello from your Controller: RestaurantsCtrl in module main:. This is your controller:', this);

  // bind data from services
  this.someData = Zomato.someData;
  this.ENV = Config.ENV;
  this.BUILD = Config.BUILD;

});
