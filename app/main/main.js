/* global angular */
'use strict';
angular.module('main', [
  'ionic',
  'ionic.utils',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
  .config(function ($stateProvider, $urlRouterProvider) {

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/main/dashboard');
    $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/menu.html',
        controller: 'MenuCtrl as menu'
      })
      .state('main.dashboard', {
        url: '/dashboard',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/dashboard.html',
            controller: 'DashboardCtrl as ctrl'
          }
        }
      })
      .state('main.restaurants', {
        url: '/restaurants',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/restaurants.html',
            controller: 'RestaurantsCtrl as ctrl'
          }
        }
      }).state('main.restaurant-new', {
        url: '/restaurant-new',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/restaurant-new.html',
            controller: 'RestaurantsNewCtrl as ctrl'
          }
        }
      });
  });
