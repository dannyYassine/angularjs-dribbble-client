/**
 * Created by dannyyassine on 2017-12-02.
 */

const ShotDetailDirective = (function () {
    return {
        restrict: 'EA',
        replace: true,
        template: require('../../templates/shotDetail.html')
    };
});

module.exports = ShotDetailDirective;