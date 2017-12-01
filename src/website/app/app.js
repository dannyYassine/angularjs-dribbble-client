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
    const homeState = {
        name: 'home',
        url: '/',
        template: '<h3>Home</h3>'
    };

    const defaultShotsState = {
        name: 'shots',
        url: '/shots',
        template: '<div shots-list></div>'
    };

    const profileState = {
        name: 'profile',
        url: '/profile',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(defaultShotsState);
    $stateProvider.state(profileState);
});


