/**
 * Created by dannyyassine on 2017-11-30.
 */

function ShotsController ($scope, dribbbleWebService) {
    $scope.isLoaded = false;

    dribbbleWebService.getShots((data) => {
        $scope.shots = data;
        $scope.isLoaded = true;
    });
}

module.exports = ShotsController;