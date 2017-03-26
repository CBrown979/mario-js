
//PrintPyramid(4);

//Whaddup World
//save to git
/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
//function printPyramid(height){
    // console.log("Uh oh... the pyramid is under construction.");
    // console.log("Check back soon, our developers are hard at work as we speak!");

function printPyramid(height){
	for(var row=1; row<=height; row++){
			var firstInnerLoopSpaceCounter = "";
			var secondInnerLoopHashCounter = "";
			var numberOfSpaces = height-row;
			var numberOfHashes = height - numberOfSpaces;
	    for(var i=numberOfSpaces; i>0; i--)
				firstInnerLoopSpaceCounter += " ";
 			for(var j=0; j<=numberOfHashes; j++)
    		secondInnerLoopHashCounter += "#";
    	console.log(firstInnerLoopSpaceCounter + secondInnerLoopHashCounter);
    	}
    }
printPyramid(5);
