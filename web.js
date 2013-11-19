var express = require('express')
  , app = express()
  , fs = requre('fs');

app.use(express.logger());

app.get('/', function(request, response) {
  var data = fs.readFileSync('index.html').toString();
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
