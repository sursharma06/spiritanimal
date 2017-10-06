var express = require('express');
var app = express();

app.get('/user/:name', function (req, res) {
  res.send(req.params.name);
});

app.use(express.static('public'));

app.get('/', function (req, res) {
  console.log('hello');
  //res.send('hello');
});

app.listen(5000, function () {
  console.log('listening to port 5000..');
});
