var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
    console.log("in here");
    response.render('example1.html');

});

module.exports = router;