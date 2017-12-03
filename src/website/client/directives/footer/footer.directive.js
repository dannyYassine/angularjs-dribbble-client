/**
 * Created by dannyyassine on 2017-12-01.
 */
const FooterDirective = (function () {
    return {
        restrict: 'EA',
        template: require('../../templates/footer.html')
    };
});

module.exports = FooterDirective;