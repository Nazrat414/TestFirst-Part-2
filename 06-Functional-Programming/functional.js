function doubler(num){
	return num * 2;
}

function map(arr, func){
	var outputArr = [];
	for(var i = 0; i < arr.length; i++){
		var currentNum = arr[i];
		outputArr.push(func(currentNum));
	}
	return outputArr;
}

function filter(arr, func){
	var outputArr = [];
	for(var i = 0; i < arr.length; i++){
		var currentNum = arr[i];
		if(func(currentNum)){
			outputArr.push(currentNum);
		}
	}
	return outputArr;
}

function contains(collection, searchTerm){
	if(!Array.isArray(collection)){
		for(var key in collection){
			if(collection[key] === searchTerm){
				return true;
			}
		}
		// return false;
	} else if(collection.indexOf(searchTerm) !== -1){
		return true;
	} else {
		return false;
	}
	}  // works; could probably be cleaner...

function countWords(sentence){
	wordsArray = sentence.split(' ');
	return wordsArray.length;
}

function countWordsInReduce(currentVal, sentence) {
	//debugger;
	return currentVal + countWords(sentence);
}

function reduce(arr, startVal, combiner){
	var currentVal = startVal;
	for(var i = 0; i < arr.length; i++){
		var currentNum = arr[i];
		currentVal = combiner(currentVal, currentNum);
	}
	return currentVal;
}

function sum(arr){ // to pass to reduce, you have to give it a fxn for what you want to accomplish!
	function adder(currentSum, nextVal){ // this is that function; like 'add';
		return currentSum + nextVal;
	}
	return reduce(arr, 0, adder);
}

function every(arr, func){
	// two conditions evaluated; if both true, return true; otherwise return false
	// what are those conditions?
	function everyIterator(currentVal, nextVal){

		return currentVal && func(nextVal);
	}
	return reduce(arr, true, everyIterator);
}

function any(arr, func){
	function anyIterator(currentVal, nextVal){
		return currentVal || func(nextVal);
	}

	return reduce(arr, false, anyIterator); // called current value 'false' on intuition;
}





