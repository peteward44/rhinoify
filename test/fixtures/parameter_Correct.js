
var interface_;
var char_ = 'mychar';
var byte_ = 999;
byte_ = 10;
myfunc( byte_ );

function myfunc( char_ ) {
	console.log( char_ );
}

var myfunc2 = function( char_ ) {
	console.log( char_ );
};

try {
	code();
} catch ( char_ ) {
	throw char_;
}

  function lettersToNumbers(str) {
    return [].concat(_toConsumableArray(str)).map(function (char_) {
      if (/\D/.test(char_)) {
        return String(char_.charCodeAt(0) + IBAN_OFFSET_FROM_ASCIICODE);
      }
      return char_;
    }).join('');
  }
  