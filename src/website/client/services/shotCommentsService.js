/**
 * Created by dannyyassine on 2017-11-30.
 */

let DribbbleRequest = require('../helpers/dribbbleRequest');

const ShotCommentsService = (function ($http) {

    const GET = (request) => {
        return $http.get(request.query());
    };

    const POST = (request) => {
        return $http.post(request.query());
    };

    const getCommentWithId = (id) => {
        return new Promise(function (resolve, reject) {
            let request = new DribbbleRequest();
            request.setEnpoint('shots');
            request.addPath(`${id}`);
            request.addPath('comments');
            GET(request)
                .then(response => {
                    resolve(response.data);
                }).catch(reject);
        });
    };

    return {
        getCommentWithId,
        GET,
        POST
    }

});

module.exports = ShotCommentsService;