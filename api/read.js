'use strict';

console.log('Running SQL /read');
const pg = require('pg');
const createResponse = require('./lib/utils').createResponse;

module.exports.action = function(event, context, callback) {
    let response = {};
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

        client.query('SELECT * FROM todos', [], (err, res) => {
            if (err) {
                response = createResponse(500, 'Something went wrong while querying the database!')
                callback(null, response);
            }

            const data = res.rows.map(({id, task}) => {
                return {
                    id,
                    task
                };
            });

            response = createResponse(200, data);

            client.end((err) => {
                if (err) {
                    response = createResponse(500, 'Error while disconnecting the PG client!');
                    callback(null, response); 
                }
            });
            callback(null, response);
        });
    });
}
