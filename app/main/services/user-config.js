'use strict';

angular.module('main')
  .service('UserConfig', function ($log, $localstorage) {
    return {
      getRestaurantList: function () {
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
