var request = require('request');

app.get('/foo', function(req, res) {
  req.dpd.todos.get(function(todos) {
    res.render('index.ejs', {todos: todos})
  });
});

app.get('/bar', function (req, res) {
  res.send('foobar');
});

app.get('/request', function (req, res) {
  request.get('http://google.com', function (err, resp, body) {
    res.send(body);
  });
});