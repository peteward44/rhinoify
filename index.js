var transformTools = require( 'browserify-transform-tools' );

// Taken from Ecma-262, section 7.5.3
// https://msdn.microsoft.com/en-us/library/mt227924(v=vs.85).aspx
var illegalNames = [
	"abstract",
	"enum",
	"int",
	"short",
	"boolean",
	"export",
	"interface",
	"static",
	"byte",
	"extends",
	"long",
	"super",
	"char",
	"final",
	"native",
	"synchronized",
	"class",
	"float",
	"package",
	"throws",
	"const",
	"goto",
	"private",
	"transient",
	"debugger",
	"implements",
	"protected",
	"volatile",
	"double",
	"import",
	"public",
	"default" // not defined in 7.5.3 but causes problems
];


function process( node, transformOptions, done ) {
	// object properties: ie. object.default = "mystring"
	if ( node.type === 'MemberExpression' ) {
		if ( typeof node.property === "object" && typeof node.property.name === "string" && typeof node.property.type === "string" && node.property.type === "Identifier" ) {
			if ( illegalNames.indexOf( node.property.name ) >= 0 ) {
				var code = node.source();
				var newCode = code.replace( /\..*$/, "['" + node.property.name + "']" );
				node.update( newCode );
			}
		}
	}
	
	// object expression: ie. { default: "mystring" }
	if ( node.type === 'Property' ) {
		if ( typeof node.key === "object" && typeof node.key.name === "string" && typeof node.key.type === "string" && node.key.type === "Identifier" ) {
			if ( illegalNames.indexOf( node.key.name ) >= 0 ) {
				var code = node.source();
				var newCode = code.replace( /.*?:/, "'" + node.key.name + "':" );
				node.update( newCode );
			}
		}
	}
	
	done();
}

var rhinoify = transformTools.makeFalafelTransform( "rhinoify", { jsFilesOnly: true }, process );
module.exports = rhinoify;
