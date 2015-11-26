'use strict';

angular.module('ionic.utils', [])
  .service('$userConfig', function ($window, $log, $localstorage) {
    return {
      loadRestaurants: function (params) {
        var config = $localstorage.getObject('config');
        if (config.restaurants !== null) {
          $log.log('Loaded configuration. Length: ' + config.restaurants.length);
        }
        else {
          $log.log('Creating new configuration');
          this.restaurants = [];
          config.restaurants = this.restaurants;
          $localstorage.setObject('config', config);
        }
        return config.restaurants;
      }
    };
  });
