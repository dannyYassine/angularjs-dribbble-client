/**
 * Created by dannyyassine on 2017-11-30.
 */

let ShotDetailViewModel = require('./viewModels/shotDetailViewModel');

function ShotDetailController ($scope, shot, shotCommentsService) {
    $scope.shotVM = ShotDetailViewModel(shot);
    $scope.comments = [];

    shotCommentsService.getCommentWithId(shot.id)
        .then(comments => {
            $scope.comments = comments;
            $scope.$apply();
        });
}

module.exports = ShotDetailController;