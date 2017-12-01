/**
 * Created by dannyyassine on 2017-11-30.
 */

const angular = require('angular');

const ShotCardDirective = require('./shotCard.directive');
const ShotsListDirective = require('./shotsList.directive');

angular.module('drabbble')
    .directive('shotCard', ShotCardDirective);

angular.module('drabbble')
    .directive('shotsList', function () {
        return {
            replace: true,
            template: require('../../templates/shotsList.html'),
            controller: 'shotsController'
        };
    });