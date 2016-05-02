var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var serialValue = "lol nah";
var dummyData = 0;


//var data = require('./public/src/misc/mymodule');


app.get('/data', function(req, res) {
  res.send({dummyData});
  console.log('rawr data getted');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
  console.log('rawr');
});

io.on('connection', function(socket){
  console.log('a user connected');
});



http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  // console.log(myPort.options.baudRate);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// var serialport = require('serialport');
// SerialPort = serialport.SerialPort;
// portName = process.argv[2];

// var myPort = new SerialPort(portName, {
//   baudRate: 9600,
//   parser: serialport.parsers.readline("\r\n")
// })

// //myPort.on('open', onOpen);
// myPort.on('data', onData);

// function onData(data) {
//   //console.log(data);
//   dummyData = data;
//   global.serialValue = data;
//   //console.log(dummyData);
//   console.log(global.serialValue);
// };

///////////////////////////

// //namestring.js
// var nameString = “foobar”;
// exports.nameString = nameString;

// //anotherfile.js
// var myNameString = require(‘./namestring’);
// var nameString2 = myNameString.name;

module.exports = app;

// //set globalVar to equal serial data
// //app.js and setGlobal module
// var value = serialValue
// globalVar = new setGlobal()
// globalVar.val = value;

// //setGlobal module
// define([], function(){
// })

// //get data in sculptgl