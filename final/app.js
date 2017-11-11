var restify = require('restify');
var builder = require('botbuilder');

var server = restify.createServer();

server.listen(3978, function() {
  console.log('bot server is running');
});

connector = new builder.ChatConnector({
  appId: 'f3151b11-609e-42fe-9d70-7d2005ad40d8',
  appPassword: 'we8xGd0hk6Yt8sHUTRe1fpP'
});

server.post('api/messages', connector.listen());

bot = new builder.UniversalBot(connector, [
  function(session) {
    session.endDialog('bye')
  }
]);