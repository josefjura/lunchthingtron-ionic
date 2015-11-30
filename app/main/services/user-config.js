'use strict';

angular.module('main')
  .service('UserConfig', function ($log, $localstorage) {
    var self = this;

    this.getRestaurantList = function () {
      var config = $localstorage.getObject('config');
      if (config.restaurants) {
        $log.log('Loaded configuration. Length: ' + config.restaurants.length);
      }
      else {
        $log.log('Creating new configuration');
        this.restaurants = [];
        config.restaurants = this.restaurants;
        $localstorage.setObject('config', config);
      }
      return config.restaurants;
    };

    this.setRestaurantList = function (restaurants) {
      var config = $localstorage.getObject('config');
      if (restaurants !== null) {
        config.restaurants = restaurants;
        $localstorage.setObject('config', config);
      }
      return config.restaurants;
    };

    this.addRestaurant = function (restaurant) {
      var list = self.getRestaurantList();
      list.push(restaurant);
      self.setRestaurantList(list);
    }

    this.removeRestaurant = function (restaurant) {
      var list = self.getRestaurantList();
      var index = list.indexOf(restaurant);
      list.splice(index,1);
      self.setRestaurantList(list);
    }
    
    
		function markExisting(rests, results) {			
			for (var i in results) {
				if (results.hasOwnProperty(i)) {
					for (var ii in rests) {
						if (rests.hasOwnProperty(ii)) {
							var element = rests[ii];
							results[i].added = results[i].url === element.url;
						}
					}
				}
			}
			return results;
		}
  });
