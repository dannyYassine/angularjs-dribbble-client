/**
 * Created by dannyyassine on 2017-11-30.
 */

const ShotsListDirective = (function () {
    return {
        replace: true,
        templateUrl: require('../../templates/shotsList.html'),
        controller: 'shotsController'
    };
});

module.exports = ShotsListDirective;