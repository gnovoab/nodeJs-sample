var path = require('path');
var uuid = require('uuid');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../public'));
    });


    app.get('/resource', function(req, res) {



        var map = new Object(); // or var map = {};
        map["id"] = uuid.v4();
        map["content"] = "Hello World";

        res.status(200).json(map);


    });

};