'use strict';
angular.module('main')
  .controller('DashboardCtrl', function ($log, Zomato, Config, UserConfig) {

    $log.log('Hello from your Controller: DashboardCtrl in module main:. This is your controller:', this);

    this.restaurants = UserConfig.getRestaurantList();

    // bind data from services
    this.someData = Zomato.someData;
    this.ENV = Config.ENV;
    this.BUILD = Config.BUILD;

  });
