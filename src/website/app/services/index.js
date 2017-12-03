/**
 * Created by dannyyassine on 2017-11-30.
 */

const angular = require('angular');
const DribbbleWebService = require('./dribbbleWeb.service');
const ShotsService = require('./shots.service');

angular.module('drabbble')
    .service('dribbbleWebService', DribbbleWebService)
    .service('shotsService', ShotsService);