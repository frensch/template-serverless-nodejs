'use strict';
const tools = require("./tools.js");
const log = require("./logger.js");

var self = module.exports = {
        
    sampleApp: (event, callback) => {

        // let body = JSON.parse(event.body);
        // let param1 = event.queryStringParameters.param1

        tools.sampleTool("input value");

        return callback(null, tools.returnsLambda(500, "Should create success return", event));
    }
};
