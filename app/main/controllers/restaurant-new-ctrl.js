'use strict';
angular.module('main')
	.controller('RestaurantsNewCtrl', function ($log, $ionicLoading, UserConfig, Zomato) {
		var self = this;
		self.searchTerm = "";
		self.results = [];
		$log.log('Hello from your Controller: RestaurantNewCtrl in module main:. This is your controller:', this);

		self.search = function () {
			$ionicLoading.show({
				template: 'Searching...'
			});
			Zomato.searchAsync(self.searchTerm, function (response) {
				$ionicLoading.hide();
				if (response.success) {
					self.results = response.result;
					self.searchTerm = "";
				}
				else {
					$log.log(response.error);
				}
			});

		};
	});
