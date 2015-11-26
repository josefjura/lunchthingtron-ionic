'use strict';
angular.module('main')
  .controller('RestaurantsCtrl', function ($log, Config, $userConfig, $scope, $ionicModal) {

    $log.log('Hello from your Controller: RestaurantsCtrl in module main:. This is your controller:', this);

    this.restaurants = $userConfig.getRestaurants();
    
    this.ENV = Config.ENV;
    this.BUILD = Config.BUILD;

  });
