
'use strict';

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Modules
var config = require('./server/config/config'),
    chalk = require('chalk');

// Initialize the express application
var app = require('./server/config/express')();

//Set environment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// Start the app by listening on <port>
app.listen(config.port);


console.log('--------------------------------------------------------');
console.log(chalk.green(config.app.title + ' application started'));
console.log(chalk.green('Environment:\t\t\t' + process.env.NODE_ENV));
console.log(chalk.green('Port:\t\t\t\t' + config.port));
console.log('--------------------------------------------------------');





//npm install body-parser express method-override
