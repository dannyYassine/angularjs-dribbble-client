/**
 * Created by dannyyassine on 2017-12-01.
 */
const angular = require('angular');

const HomeDirective = require('./home.directive');

angular.module('drabbble')
    .directive('home', HomeDirective);
