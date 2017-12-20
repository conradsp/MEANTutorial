var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var config = require('./config');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

mongoose.connect(config.dburl, {useMongoClient:true}, (err) => {
    if (err) {
        console.log('Error connecting to db');
        console.log(`${err}`);
    } else {
        console.log('Connected to db');
    }
});

require('./routes')(app);

app.listen(port);
console.log("MEAN Tutorial is running on port "+port);
