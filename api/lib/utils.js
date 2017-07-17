'use strict';

function createResponse(code, message) {
    return {
        statusCode: code,
        headers: {
            "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
        },
        body: JSON.stringify(message)
    };
}

module.exports = {
    createResponse: createResponse
};
