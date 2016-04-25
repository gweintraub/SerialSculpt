define([], function(){
	window.val = null;
	return val;
});



//namestring.js
var nameString = “foobar”;
exports.nameString = nameString;

//anotherfile.js
var myNameString = require(‘./namestring’);
var nameString2 = myNameString.name;

// mymodule.js
define([], function() {
    window.Foo = {someValue: 1};
    return {someValue: 2};
});

// main.js
require(['mymodule'], function (mymodule) {
    console.log(window.Foo); // {someValue: 1}
    console.log(mymodule); // {someValue: 2}
});