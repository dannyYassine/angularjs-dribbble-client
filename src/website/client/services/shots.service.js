/**
 * Created by dannyyassine on 2017-12-02.
 */

let DribbbleRequest = require('../helpers/dribbbleRequest');

const ShotsService = (function (dribbbleWebService) {
    let cachedShots = [];

    const getShots = (callback) => {
        let request = new DribbbleRequest();
        request.setEnpoint('shots');
        dribbbleWebService.getShots(callback);
    };

    const getShotWithId = (id) => {
        return new Promise(function (resolve, reject) {
            const shot = cachedShots.filter((shot) => {
                return shot.identifier === id;
            })[0];
            if (shot) {
                resolve(shot);
                return;
            }

            // fetch shot from API
            let request = new DribbbleRequest();
            request.setEnpoint('shots');
            request.addPath(id);

            dribbbleWebService.GET(request)
                .then(response => {
                resolve(response.data);
            })
                .catch(err => {
                    console.log('erro');
                    reject(err);
                });
        });
    };

    return {
        getShots,
        getShotWithId
    }
});

module.exports = ShotsService;