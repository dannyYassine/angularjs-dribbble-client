/**
 * Created by dannyyassine on 2017-11-30.
 */

const ShotCardDirective = (function () {
    return {
        restrict: 'EA',
        scope: {
            shot: '=shot'
        },
        template: require('../../templates/shotCard.html'),
        controller: 'shotCardController'
    };
});

module.exports = ShotCardDirective;