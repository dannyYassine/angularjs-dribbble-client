/**
 * Created by dannyyassine on 2017-11-29.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

let app = angular.module('drabbble',
            [
                uiRouter
            ]);

require('./components');
require('./services');
require('./directives');
require('./controllers');

    app
        .config(configLocationProvider)
        .config(configRouterProvider);

configLocationProvider.$inject = ['$locationProvider'];
function configLocationProvider ($locationProvider) {
    $locationProvider.html5Mode(true);
}

configRouterProvider.$inject = ['$urlRouterProvider'];
function configRouterProvider($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}

app.config(function($stateProvider) {
    // const homeState = {
    //     name: 'home',
    //     url: '/',
    //     template: '<div home></div>'
    // };

    const defaultShotsState = {
        name: 'shots',
        url: '/',
        template: '<div shots-list></div>'
    };

    const shotDetailState = {
        name: 'shotDetail',
        url: '/shots/{id}',
        template: '<div shot-detail></div>',
        controller: 'shotDetailController',
        resolve: {
            shot: function ($stateParams, shotsService) {
                return shotsService.getShotWithId($stateParams.id)
            }
        }
    };

    const profileState = {
        name: 'profile',
        url: '/profile',
        template: '<div shots-list></div>'
    };

    // $stateProvider.state(homeState);
    $stateProvider.state(defaultShotsState);
    $stateProvider.state(shotDetailState);
    $stateProvider.state(profileState);
});


