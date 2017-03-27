
drawPyramid(5);


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {
	//so first I must create a container for the <div id> pyramid
	var obtainTheContainer = document.getElementById("pyramid");

	//delete construction p tag sentences programmatically
	var deleteConstructionDiv = document.getElementById("construction");
	obtainTheContainer.removeChild(deleteConstructionDiv);

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "."; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // you can delete this now
        // console.log(rowStr)

				//Add variable rowStr (containing string for current row) to the document


				//var obtainTheContainer = document.getElementById("pyramid");
				//Create a <p> element
				var theParagraphElement = document.createElement("p");

				//set p element's text to be the string
				//restated: and set it's text to be the string of the p element
				theParagraphElement.innerHTML = rowStr;
				obtainTheContainer.appendChild(theParagraphElement);

		}
}
			// 	//Insert the <p> (paragraph element) as a child of the container <div>
			// 	//so first I must create a container for the <div>
			// var obtainTheContainer = document.getElementById("pyramid");
				//obtainTheContainer.appendChild(theParagraphElement);

				//Delete the "under construction" notice from the container <div>
				//from the Mario2 file:
						// <div id="construction">
		        //     <p>Uh oh! the pyramid is still under construction.</p>
		        //     <p>Check back again soon... our developers are hard at wrk as we speak!</p>
		  //       // </div>
			// var deleteConstructionDiv = document.getElementById("construction");
			// obtainTheContainer.removeChild(deleteConstructionDiv);


        // create an element whose inner text is rowStr,
        // and insert it as a child of the container <div id="pyramid">
				//from the Mario2 file:
				// <div id="pyramid">
        // <!-- Our pyramid will go inside here -->
				//</div>

				//create element for housing pyramid
				//var pyramidContainer = document.getElementById("pyramid");
