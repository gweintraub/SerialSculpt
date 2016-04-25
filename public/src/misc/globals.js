 define([], function() {
  	returnValue = function () {
  		var _value = window.serialValue;
  		this.getValue = function () {
  			return _value;
  		};
  	};
  	return returnValue;
  });