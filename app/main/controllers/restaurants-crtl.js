'use strict';
angular.module('main')
  .controller('RestaurantsCtrl', function ($log, Config, $localstorage) {

    $log.log('Hello from your Controller: RestaurantsCtrl in module main:. This is your controller:', this);

    var post = $localstorage.getObject('config');
    if (post !== null) {
      $log.log('Loaded configuration. Length: ' + post.length);
      this.restaurants = post;
    }
    else {
      $log.log('Creating new configuration');
      this.restaurants = [];
      $localstorage.setObject('config', this.restaurants);
    }

    this.ENV = Config.ENV;
    this.BUILD = Config.BUILD;

  });
