/**
 * Created by dannyyassine on 2017-12-01.
 */
const angular = require('angular');

const FadeDirective = require('./fade.directive');

angular.module('drabbble')
    .directive('dyFade', FadeDirective);
