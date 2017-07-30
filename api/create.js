'use strict';

console.log('Running SQL /create');
const pg = require('pg');
const createResponse = require('./lib/utils').createResponse;

module.exports.action = (event, context, callback) => {
    let response = {};
    // let todoId = event.queryStringParameters.id;
    // let task = event.queryStringParameters.task;

    let data = JSON.parse(event.body);
    let { todoId, task } = data;

    const config = {
        user: event.stageVariables.dbuser,
        database: event.stageVariables.dbname,
        password: event.stageVariables.dbpasswd,
        host: event.stageVariables.dbhost,
        port: event.stageVariables.dbport,
        max: event.stageVariables.dbclients,
        idleTimeoutMillis: event.stageVariables.dbtimeout
    };

    const client = new pg.Client(config);
    client.connect((err) => {
        if (err) {
            response = createResponse(500, 'Something went wrong while connecting to the database!');
            callback(null, response);            
        }

        client.query('INSERT INTO todos (id, task) VALUES ($1::text, $2::text)', [todoId, task], (err, res) => {
            if (err) {
                response = createResponse(500, 'Something went wrong while querying the database!')
                callback(null, response);
            }

            response = createResponse(200, `Record with id ${todoId} created!`);

            client.end((err) => {
                if (err) {
                    response = createResponse(500, 'Error while disconnecting the PG client!');
                    callback(null, response); 
                }
            });
            callback(null, response);
        });
    });
};
