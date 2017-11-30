/**
 * Created by dannyyassine on 2017-11-29.
 */

const angular = require('angular');

angular.module('drabbble')
    .component('myApp', {
        template: require('../templates/application.html'),
        $routeConfig: [
            {path: '/',    name: 'HeroList',   component: 'heroList', useAsDefault: true},
            {path: '/:id', name: 'HeroDetail', component: 'heroDetail'}
        ]
    });