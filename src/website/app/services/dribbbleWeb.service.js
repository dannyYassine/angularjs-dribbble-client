/**
 * Created by dannyyassine on 2017-11-30.
 */

let DribbbleRequest = require('../helpers/dribbbleRequest');

const DribbbleWebService = (function ($http) {

    let cachedShots = [];

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
            cachedShots = [response.data];
            callback(response.data);
        });
    };

    const getShotsWithId = (id, callback) => {
        const shot = cachedShots.filter((shot) => {
            return shot.identifier === id;
        })[0];
        if (shot) {
            callback(shot);
        }
        // fetch shot

    };

    return {
        getShots,
        getShotsWithId
    }

});

module.exports = DribbbleWebService;