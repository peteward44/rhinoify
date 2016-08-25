# rhinoify
Browserify transform to (attempt) to support the java Rhino / Nashorn engines

This doesn't guarantee compatibility with Rhino, but might give you a better chance!

## What it does
* It replaces any future reserved keywords (as described in Ecma-262, section 7.5.3) with string literals
* It replaces the 'global' identifier with a function that returns Rhino's global object

Note: The work done by this transform may be undone by uglifiers. Try to make it the last transform in the list.
