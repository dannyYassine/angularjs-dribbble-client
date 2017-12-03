/**
 * Created by dannyyassine on 2017-12-03.
 */

const ShotDetailViewModel = (function (shot) {

    let _shot = shot;

    const highRes = function () {
        if (_shot.images.hidpi !== null) {
            return _shot.images.hidpi;
        }
        return _shot.images.normal;
    };
    
    let vm = {
        highRes
    };

    Object.defineProperty(vm, 'title', {
        get: function () {
            return _shot.title;
        }
    });

    Object.defineProperty(vm, 'rightHeaderImg', {
        get: function () {
            return _shot.user.avatar_url;
        }
    });

    return vm;

});

module.exports = ShotDetailViewModel;