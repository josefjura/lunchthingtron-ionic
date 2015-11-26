'use strict';
angular.module('main')
.controller('DashboardCtrl', function ($log, Zomato, Config, $localstorage) {

  $log.log('Hello from your Controller: DashboardCtrl in module main:. This is your controller:', this);

    var config = $localstorage.getObject('config');
    if (config.restaurants !== null) {
      $log.log('Loaded configuration. Length: ' + config.restaurants.length);
      this.restaurants = config.restaurants;
    }
    else {
      $log.log('Creating new configuration');
      this.restaurants = [];
      config.restaurants = this.restaurants;
      $localstorage.setObject('config', config);
    }

  // bind data from services
  this.someData = Zomato.someData;
  this.ENV = Config.ENV;
  this.BUILD = Config.BUILD;

});
