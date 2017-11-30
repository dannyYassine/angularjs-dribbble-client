/**
 * Created by dannyyassine on 2017-11-29.
 */

function ApplicationController ($scope, dribbbleWebService) {
    $scope.title = "Hello world";

    dribbbleWebService.execute({}, (data) => {
       console.log(data);
    });
};

module.exports = ApplicationController;