<?php

// get the name from the $_POST array ($_POST array is what is submitted behind the scenes from our javascript)
	$name = $_POST['name'];
	// path to the file (in this same directory)
	$jsonFile = "ainc.json";
	// PHP command for "reading" the file
	$jsonData = file_get_contents($jsonFile);
	// parses the $jsonData variable into an object (in this case, an array - or list)
	$namesArray = json_decode($jsonData, TRUE);
	
	// if not, add it to the array
	array_push($namesArray, $name);
	
	// save the new array to a file...
	// open the file
	$fileObject = fopen('names.json', 'w');
	// write our data (in JSON format) to the file
	fwrite($fileObject, json_encode($namesArray));
	// close the file object when we are done with it to avoid any possible memory leaks
	fclose($fileObject);

	
	// show new array with our added name
	echo json_encode($namesArray);
	


?>