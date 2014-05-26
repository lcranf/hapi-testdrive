var Hapi = require('hapi');
var routes = require('./routes');

var server = new Hapi.Server(8080);

server.route(routes());

server.start(function() {
  console.log('Server started at %s on port %s ', server.info.uri, server.info.port);
});

server.on('log', function(event, tags) {
    console.log(event);
});

//console.log(server.table());
