var express = require('express');
var router = express.Router();

/* GET users listing. */
router.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/', function(req, res, next) {
    res.send('respond with a tego GET');
});

router.post('/', function(req, res, next) {
    res.send('respond with a tego POST');
});

router.get('/json', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1, b: 2, c: 3 }));
});

module.exports = router;
