function doubler(aNum){
	return aNum * 2;
}


function map(anArray, aFunc) {
	var returnArray = [];
	for (var i = 0; i < anArray.length; i++) {
		var currentValue = anArray[i];
		returnArray.push(aFunc(currentValue)); // using aFunc here allows use of anonymous function.
	}											// did not need to separately define 'tripling' as a func
	return returnArray;
}


function filter (arr, func) {
	var outputArray = [];
	for (var i = 0; i < arr.length; i++) { // iterate over array
		var currentElem = arr[i];
		if (func(currentElem)){ // use passed in func to determine what goes in to return array
			outputArray.push(currentElem);
		}
	};
	return outputArray;
}

function contains (collection, searchItem) { // passing specs, not sure I'm meeting spirit of fxnl programming;
	var isInObj = false;
	if (!Array.isArray(collection)) {
		for (var key in collection) {
			if(collection[key] === searchItem) {
				isInObj = true;
			}
		}
		return isInObj;
	}

	if (Array.isArray(collection) && collection.indexOf(searchItem) !== -1) {
		return true;
	} else {
		return false;
	}
}

function countWords(aSentence) {
	var stringArray = aSentence.split(' ');
	return stringArray.length;
}

function countWordsInReduce(aValue, aSentence){ // uses current val and whatever is returned from countWords;
	return aValue + countWords(aSentence);
}

// use for loop with add?
function reduce (aCollection, startVal, aFunction) { 
	debugger;
	var currentValue = startVal;
	for (var i = 0; i < aCollection.length; i++) {
		var currentElem = aCollection[i];
		currentValue = aFunction(currentValue, currentElem);  // now this is fxnl.  Passes two values to 'add'
	}
	return currentValue;
}

function sum (anArray) { // pass the array and start value to reduce; in this case, define add fxn to pass
	return reduce(anArray, 0, function (a, b){
		return (a + b);
	});
}

function every (anArray, aFunc) { // needed to look at soln; complex to follow but I think I can (chrome debug)
  debugger;
  var everyIterator = function (currentValue, nextValue) {
  	return currentValue && aFunc(nextValue);
  	};
  	return reduce(anArray, true, everyIterator);
  }





















