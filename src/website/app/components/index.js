/**
 * Created by dannyyassine on 2017-11-29.
 */

const angular = require('angular');

let ApplicationComponent = require('./application.component');
angular.module('drabbble')
    .component('myApp', ApplicationComponent);