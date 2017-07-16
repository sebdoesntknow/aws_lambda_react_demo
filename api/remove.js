'use strict';

module.exports.action = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('You invoked the REMOVE TODO action!')
  };

  callback(null, response);
};
