
(Function('return this')()).value = "mystring";
(Function('return this')())['another'] = new MyClass();
var foo = (Function('return this')()).foo;
var bar = (Function('return this')())['bar'];
(Function('return this')()).functionCall();
