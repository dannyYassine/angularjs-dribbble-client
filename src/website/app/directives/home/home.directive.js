/**
 * Created by dannyyassine on 2017-12-01.
 */
const HomeDirective = (function () {
    return {
        restrict: 'EA',
        scope: {
        },
        template: require('../../templates/home.html'),
        controller: 'homeController'
    };
});

module.exports = HomeDirective;