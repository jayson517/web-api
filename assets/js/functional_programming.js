/**
 * Functional Programming
 *
 * 
 * ================================================================================
 * Map Function
 * @type {Array}
 */
var rooms = ["h1", "h2", "h3"];
var newRooms = rooms.map(functionMap);

function functionMap(rm)
{
	if(rm == "h3")
	{
		return "h4";
	}
	else
	{
		return rm;
	}
}

console.log(rooms);
console.log(newRooms);

/**
 * ================================================================================
 * Immutable Data Structure 
 * Trees and Sharing
 * Structural Sharing
 */


