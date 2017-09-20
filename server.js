var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "You called the / endpoint"});
})

app.use('/api', router);

app.listen(port);
console.log("MEAN Tutorial is running on port "+port);
