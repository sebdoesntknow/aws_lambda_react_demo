'use strict';

console.log('Running SQL /read');
const pg = require('pg');

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
            response = {
                statusCode: 500,
                body: JSON.stringify('Something went wrong while connecting to the database!')
            };
            callback(null, response);            
        }

        client.query('SELECT * FROM todos', [], (err, res) => {
            if (err) {
                response = {
                    statusCode: 500,
                    body: JSON.stringify('Something went wrong while querying the database!')
                };
                callback(null, response);
            }

            const data = res.rows.map(({id, task}) => {
                return {
                    id,
                    task
                };
            });

            response = {
                statusCode: 200,
                body: JSON.stringify(data)
            };

            client.end((err) => {
                if (err) {
                    response = {
                        statusCode: 500,
                        body: JSON.stringify('Error while disconnecting the PG client!')
                    };
                    callback(null, response); 
                }
            });
            callback(null, response);
        });
    });
}
