/**
 * Created by dannyyassine on 2017-11-29.
 */

const express       = require('express');
let app             = express();
let bodyParser      = require('body-parser');
let path            = require('path');
let nunjucks        = require('nunjucks');
/**
 * App Configuration
 */
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../..', '/website/presentation/public')));

/**
 * Nunjucks for serving html containers
 */
nunjucks.configure(path.join(__dirname, '..', '/core/templates'), {
    autoescape: true,
    express: app
});

module.exports = app;
