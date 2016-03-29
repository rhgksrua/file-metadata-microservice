'use strict';

var express = require('express');
var morgan = require('morgan');

var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

var port = process.env.PORT || 8000;

app.use(morgan('combined'));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');

//app.use('/', index);
app.use('/api', api);

app.listen(port, function() {
    console.log('listening on port: ' + port);
})