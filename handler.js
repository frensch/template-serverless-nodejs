'use strict';
var app = require('./app/app.js');

module.exports = {
    sample: (event, context, callback) => {
       return app.sampleApp(event, callback);
    }
}
