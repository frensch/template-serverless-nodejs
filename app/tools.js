'use strict';
const log = require('./logger.js');

var self = module.exports = {
    returnsLambda: (statusCode, message, input) => {
        if(statusCode != 200) {
            log.error(message + " INPUT: " + JSON.stringify(input));
        }
        return {
            statusCode: statusCode,
            body: JSON.stringify(
                {
                    message: message,
                    input: input,
                },
                null,
                2
            ),
        };
    },
    sampleTool: (sample) => {

    }
}