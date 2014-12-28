var http = require('http');

var callRequest = function(req,res) {
  res.writeHead(200, {"Content-Type":"text/html"});
  res.write("<h1>Hello World</h1>");
  res.end();
}

var server = http.createServer(callRequest);

var serverOn = function(){
  console.log('Server Hello World on!');
}

server.listen(3000, serverOn);
