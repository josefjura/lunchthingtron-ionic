'use strict';
angular.module('main')
  .controller('RestaurantsCtrl', function ($log, $scope, Config, UserConfig) {
    var self = this;    
    $log.log('Hello from your Controller: RestaurantsCtrl in module main:. This is your controller:', this);

    this.restaurants = UserConfig.getRestaurantList();

    this.ENV = Config.ENV;
    this.BUILD = Config.BUILD;

    this.refresh = function () {
      self.restaurants = UserConfig.getRestaurantList();
      $scope.$broadcast('scroll.refreshComplete');
    }

  });
