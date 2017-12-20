var express = require('express');
var User = require('./models/users');

module.exports = function(app) {
    var router = express.Router();

    router.get('/', (req, res) => {
        res.json({ message: "You called the / endpoint"});
    });

    router.get('/users', (req, res) => {
        User.find((err, users) => {
            if (err) {
                res.send(err);
            }

            res.json(users);
        })
    });

    app.use('/api', router);
}