var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

//var globals = require('globals');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('public/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});


var serialport = require('serialport');
SerialPort = serialport.SerialPort;
portName = process.argv[2];

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log(myPort.options.baudRate);
});

var myPort = new SerialPort(portName, {
  baudRate: 9600,
  parser: serialport.parsers.readline("\r\n")
})

//myPort.on('open', onOpen);
myPort.on('data', onData);

function onData(data) {
  //console.log(data);
};



module.exports = app;