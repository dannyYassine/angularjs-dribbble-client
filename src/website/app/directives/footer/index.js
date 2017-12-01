/**
 * Created by dannyyassine on 2017-12-01.
 */
const angular = require('angular');

const FooterDirective = require('./footer.directive');

angular.module('drabbble')
    .directive('footer', FooterDirective);
