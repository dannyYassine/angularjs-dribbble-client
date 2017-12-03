/**
 * Created by dannyyassine on 2017-12-02.
 */

import angular from 'angular';

const ShotDetailDirective = require('./shotDetail.directive');

angular.module('drabbble')
    .directive('shotDetail', ShotDetailDirective);
