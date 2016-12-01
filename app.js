
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.post('/bot/:uid', routes.bot);

http.createServer(app).listen(app.get('port'), function(){
  if (process.env.BOT_UNIQUE_ID){
      console.log("INFO: Bot is running at: " + 'http://localhost:' + app.get('port') + "/bot/" + process.env.BOT_UNIQUE_ID);
  }else {
      console.log('http://localhost:' + app.get('port'));
  }
});
