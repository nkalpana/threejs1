var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var index = require('./routes/index');
var example1 = require('./routes/example1');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(express.static(path.join(__dirname, "js")));
app.use('/', index);
app.use('/example1', example1);

app.listen(8080, function() {
    console.log("Have fun with ThreeJS!!!");
});