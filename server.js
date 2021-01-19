var mockable = require('mockable');
var server = new mockable.Server(process.env.PORT || 80, '.');
server.run();
