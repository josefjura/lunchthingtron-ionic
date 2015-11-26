'use strict';
angular.module('main')
  .controller('DashboardCtrl', function ($log, Zomato, Config, $userConfig) {

    $log.log('Hello from your Controller: DashboardCtrl in module main:. This is your controller:', this);

    this.restaurants = $userConfig.getRestaurants();

    // bind data from services
    this.someData = Zomato.someData;
    this.ENV = Config.ENV;
    this.BUILD = Config.BUILD;

  });
