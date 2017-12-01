/**
 * Created by dannyyassine on 2017-11-30.
 */

let DribbbleRequest = require('../helpers/dribbbleRequest');

const DribbbleWebService = (function ($http) {

    const executeGet = (request) => {
        return $http.get(request.query());
    };

    const executePost = (request) => {
        return $http.post(request.query());
    };

    const getShots = (callback) => {
        let request = new DribbbleRequest();
        request.setEnpoint('shots');
        executeGet(request).then(response => {
            callback(response.data);
        });
    };

    return {
        getShots
    }

});

module.exports = DribbbleWebService;