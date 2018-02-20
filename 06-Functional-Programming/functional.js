function doubler (aNum) {
	return aNum * 2;
}



function map (anArray, aFunc) {
	// performs func on ea. element of anArray
	// returns array w/ each transformed elem
	var outputArray = []; // store transformed elems...
	for (var i = 0; i < anArray.length; i++) {
		var currentElem = anArray[i];
		outputArray.push(aFunc(currentElem)); // operate on each elem with func.
	}
	return outputArray;
}

function filter (anArray, aFunc) {
	// create output array...
	var output = [];
	for (var i = 0; i < anArray.length; i++) {
		var currentElem = anArray[i];
		if (aFunc(currentElem)) { // if this evaluates as true...
			output.push(currentElem);
		}
	}
	return output;
}

function contains (collection, item) {
	// does collection contain item?
	// arrays are objects...
	for (var key in collection) {
		if (collection[key] === item) {
			return true;
		}
	}
	return false;
}

function countWords (sentence) {
	return sentence.split(' ').length;
}

function reduce (collection, startVal, combinerFunc) {
	// paused to look at checkpoint 2;
}