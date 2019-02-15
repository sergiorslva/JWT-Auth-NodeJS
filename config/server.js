var express = require('express');
var consign = require('consign');
var app = express();

//uses
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//autoload
consign()
    .include('app/routes')
    .then('app/services')
	.into(app);

module.exports = app.verifyJWT;
module.exports = app; 