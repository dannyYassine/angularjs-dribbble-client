/**
 * Created by dannyyassine on 2017-11-29.
 */

const angular = require('angular');

const Controller = require('./application.controller');
Controller.$inject = ['$scope'];

const ShotsController = require('./shots.controller');
ShotsController.$inject = ['$scope', 'dribbbleWebService'];

const ShotCardController = require('./shotCard.controller');
ShotCardController.$inject = ['$scope'];

const HomeController = require('./home.controller');
HomeController.$inject = ['$scope'];

const ShotDetailController = require('./shotDetail.controller');

angular.module('drabbble')
    .controller('applicationController', Controller)
    .controller('shotsController', ShotsController)
    .controller('shotCardController', ShotCardController)
    .controller('homeController', HomeController)
    .controller('shotDetailController', ShotDetailController);

