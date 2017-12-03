/**
 * Created by dannyyassine on 2017-12-01.
 */

const angular = require('angular');

const GifPlayerDirective = require('./gifPlayer.directive');

angular.module('drabbble')
    .directive('gifPlayer', GifPlayerDirective);
