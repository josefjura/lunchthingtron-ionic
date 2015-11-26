'use strict';
angular.module('main')
.controller('DashboardCtrl', function ($log, Zomato, Config) {

  $log.log('Hello from your Controller: DashboardCtrl in module main:. This is your controller:', this);

  // bind data from services
  this.someData = Zomato.someData;
  this.ENV = Config.ENV;
  this.BUILD = Config.BUILD;

});
