/**
 * Created by dannyyassine on 2017-11-30.
 */

let ShotDetailViewModel = require('./viewModels/shotDetailViewModel');

function ShotDetailController ($scope, shot) {
    $scope.vm = new ShotDetailViewModel(shot);
};

module.exports = ShotDetailController;