/**
 * Created by dannyyassine on 2017-11-29.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

let app = angular.module('drabbble',
            [
                uiRouter
            ])
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
    var helloState = {
        name: 'hello',
        url: '/hello',
        template: '<h3>hello world!</h3>'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
});

require('./components');
require('./services');
require('./controllers');

