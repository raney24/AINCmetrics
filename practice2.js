
// This page uses JQuery, I recommend doing a few CodeAcademy lessons with it


// this function gets called when the page is done loading
$( document ).ready(function() {
	
	// prompt user for name:
	var promptName = window.prompt("Please enter your name!");
	
		// send name to our server page SubmitName.php so it can do the work to save the name to our file
		
		// everything below is a single command to send our name to the SubmitName.php page
		//  (this happens in the background without the user seeing anything)
		$.post( "phpPractice.php", // this is the parameter that tells the .post() function what page to post to
				{"name": promptName} // this is the POST we want to send to the page (name=PromptName)
		).done(	function( data ) { // this is a function that we want to get called when the post is finished... "data" is whatever SubmitName.php outputs
				// parse the return json into an array
				var namesArray = JSON.parse(data);
				// safety check that the array parsed correctly
				if (namesArray) {
					// .join("something")  will take the items in the array and make them into a string separated by "something"...
					// example: array["one", "two", "three"].join(",") ===> "one,two,three"
					var namesHtml = namesArray.join("<br />\n");
					// this tells the page to find an element with an id="names" and replace its contents with namesHtml
					$("#names").html(namesHtml);
				}
			}
		);
		
});
