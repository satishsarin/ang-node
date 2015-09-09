 // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
// Cross-origin resource sharing (CORS) =================================
	var cors = require('./app/core');
	app.use(cors());

//routes =========================
	require('./app/routes')(app);

// listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("i m listing")