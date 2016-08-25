var rhinoify = require( '../index.js' );
var fs = require( 'fs' );
var path = require( 'path' );
var assert = require( 'assert' );
var transformTools = require( 'browserify-transform-tools' );

function assertTransform( preFile, postFile, done ) {
	var jsFile = path.resolve( __dirname, "./fixtures/" + preFile );
	var jsFileCorrect = path.resolve( __dirname, "./fixtures/" + postFile );
	var content = fs.readFileSync( jsFile, 'utf8' );
	var correct = fs.readFileSync( jsFileCorrect, 'utf8' );
	transformTools.runTransform(
		rhinoify,
		jsFile,
		{
			content: content
		},
		function( err, transformed ) {
			if ( err ) {
				done( err );
			} else {
				assert.equal( correct, transformed, "Correctly transformed" );
				done();
			}
		}
	);
}

describe( "rhinoify", function() {
	it( "Replaces object properties with string literals", function( done ) {
		assertTransform( "objectProperty.js", "objectProperty_Correct.js", done );
	} );
	
	it( "Replaces object properties when defined inside object expression", function( done ) {
		assertTransform( "objectExpression.js", "objectExpression_Correct.js", done );
	} );
} );