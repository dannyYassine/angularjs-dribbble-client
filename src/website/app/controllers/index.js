/**
 * Created by dannyyassine on 2017-11-29.
 */

const angular = require('angular');

const Controller = require('./application.controller');
Controller.$inject = ['$scope'];

angular.module('drabbble')
    .controller('applicationController', Controller);

const ShotsController = require('./shots.controller');
ShotsController.$inject = ['$scope', 'dribbbleWebService'];

angular.module('drabbble')
    .controller('shotsController', ShotsController);

const ShotCardController = require('./shotCard.controller');
ShotCardController.$inject = ['$scope'];

angular.module('drabbble')
    .controller('shotCardController', ShotCardController);