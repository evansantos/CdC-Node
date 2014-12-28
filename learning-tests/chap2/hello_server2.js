var http = require('http');
var server = http.createServer(function(req,res){
      res.writeHead(200,{'Content-type':'text/html'});
      if(req.url == '/'){
        res.write('<h1>Index</h1>');
      } else if(req.url == '/welcome'){
        res.write('<h1>Welcome</h1>');
      } else {
        res.write('<h1>Page not found</h1>');
      }
      res.end();
});

server.listen(3000, function(){
  console.log('Server started!');
});

