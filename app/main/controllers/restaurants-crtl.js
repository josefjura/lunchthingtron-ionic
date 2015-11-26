'use strict';
angular.module('main')
  .controller('RestaurantsCtrl', function ($log, Config, UserConfig) {

    $log.log('Hello from your Controller: RestaurantsCtrl in module main:. This is your controller:', this);

    this.restaurants = UserConfig.getRestaurantList();

    this.ENV = Config.ENV;
    this.BUILD = Config.BUILD;

  });
