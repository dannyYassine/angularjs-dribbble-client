/**
 * Created by dannyyassine on 2017-12-01.
 */

const GifPlayer = (function () {
    const directive = {
        link: link,
        restrict: 'A'
    };

    function link (scope, element, attr) {
        if (!scope.shot.images.hidpi.endsWith('gif')) {
            return;
        }

        let raw = element[0];
        raw.addEventListener('mouseover', function () {
            raw.src = scope.shot.images.hidpi;
        });
        raw.addEventListener('mouseleave', function () {
            raw.src = scope.shot.images.normal;
        });
    }

    return directive;
});

module.exports = GifPlayer;