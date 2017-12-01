/**
 * Created by dannyyassine on 2017-11-30.
 */

function DribbbleRequest () {
    this.baseURL = 'https://api.dribbble.com/v1';
    const accessToken = 'f0f2799e131f9e82942d9c8af209cbcbc176cdd5c12619e5161c7f1fdf4ded55';
    this.params = {
        access_token: accessToken
    };
    this.endpoint = '';
}

DribbbleRequest.prototype.setEnpoint = function (endpoint) {
    this.endpoint = `/${endpoint}`;
};

DribbbleRequest.prototype.query = function () {
    let query = `${this.endpoint}?`;
    let index = 0;
    for (let key in this.params) {
        if (index !== 0) {
            query += '&';
        }
        query += `${key}=${this.params[key]}`;
        index += 1;
    }
    return `${this.baseURL}${query}`;
};

module.exports = DribbbleRequest;