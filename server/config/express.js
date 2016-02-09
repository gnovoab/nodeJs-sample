'use strict';

/**
 * Setting up express server with all configs and middlewares.
 */


// Modules
var express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorhandler = require('errorhandler'),
    morgan = require('morgan');


module.exports = function () {

    // Create app instance
    var app = express();

    //Add middleware necessary for REST-API
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(methodOverride('X-HTTP-Method-Override'));

    //CORS
    app.use(function(req, res, next){
       res.header('Access-Control-Allow-Origin','*');
       res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
       res.header('Access-Control-Allow-Headers','Content-Type');
        next();
    });


    // Setting the app router and static folder
    app.use(express.static(path.resolve('./public')));


    //by convention define error-handling middleware last
    if (process.env.NODE_ENV !== 'prod') {
        // only use in non-prod as it gives stack trace
        app.use(errorhandler());
    }

    app.use(morgan('combined'));

    // Configure our routes
    require('../routes')(app);

    return app;
};