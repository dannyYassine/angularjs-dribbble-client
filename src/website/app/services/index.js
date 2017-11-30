/**
 * Created by dannyyassine on 2017-11-30.
 */

const angular = require('angular');
const DribbbleWebService = require('./dribbbleWeb.service');

angular.module('drabbble').service('dribbbleWebService', DribbbleWebService);