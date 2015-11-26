'use strict';
angular.module('main')
	.controller('RestaurantsNewCtrl' , function ($log, Config) {

		$log.log('Hello from your Controller: RestaurantNewCtrl in module main:. This is your controller:', this);

		this.ENV = Config.ENV;
		this.BUILD = Config.BUILD;

	});
