/**
 * Created by dannyyassine on 2017-11-30.
 */

const DribbbleWebService = (function ($http) {

    const execute = (request, callback) => {
        $http.get("https://api.dribbble.com/v1/shots?access_token=f0f2799e131f9e82942d9c8af209cbcbc176cdd5c12619e5161c7f1fdf4ded55").then(response => {
           callback(response.data);
        });
    };

    return {
        execute
    }

});

module.exports = DribbbleWebService;