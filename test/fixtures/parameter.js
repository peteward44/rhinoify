
var interface;
var char = 'mychar';
var byte = 999;
byte = 10;
myfunc( byte );

function myfunc( char ) {
	console.log( char );
}

var myfunc2 = function( char ) {
	console.log( char );
};

try {
	code();
} catch ( char ) {
	throw char;
}

  function lettersToNumbers(str) {
    return [].concat(_toConsumableArray(str)).map(function (char) {
      if (/\D/.test(char)) {
        return String(char.charCodeAt(0) + IBAN_OFFSET_FROM_ASCIICODE);
      }
      return char;
    }).join('');
  }
  