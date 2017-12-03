/**
 * Created by dannyyassine on 2017-11-30.
 */

let DribbbleRequest = require('../helpers/dribbbleRequest');

const DribbbleWebService = (function ($http) {

    const GET = (request) => {
        return $http.get(request.query());
    };

    const POST = (request) => {
        return $http.post(request.query());
    };

    const getShots = (callback) => {
        let request = new DribbbleRequest();
        request.setEnpoint('shots');
        GET(request).then(response => {
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
    };

    return {
        getShots,
        getShotsWithId,
        GET,
        POST
    }

});

module.exports = DribbbleWebService;