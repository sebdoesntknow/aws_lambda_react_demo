'use strict';

console.log('Running SQL /remove');
const pg = require('pg');

module.exports.action = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('You invoked the DELETE TODO action!')
  };

  callback(null, response);
};
