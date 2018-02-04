function factorialIterative(aNum) {
  // Step 1. Create a variable result to store num
  var result = aNum;
  // If num = 0 OR num = 1, the factorial will return 1
  if (aNum === 0 || aNum === 1) 
    return 1; 
  // Step 2. Create the WHILE loop 
  while (aNum > 1) { 
    aNum--; // decrementation by 1 at each iteration
    result = result * aNum; // or result *= num; 
  }
  return result; // 120
}

function factorial (num) {
	var result;

	if (!num){ // instead of 'num === 0', use !num; don't need 'num === 1';
		return 1;
	} else {
		result = num * factorial(num - 1);
	}
	return result;
}

function fib (num) {
	var fibResult;
	if (!num || num === 1) {
		return 1;
	} else {
		fibResult = fib(num - 1) + fib(num - 2);
	}
	return fibResult;
}

function type (arg) {
	debugger;
	var output = Object.prototype.toString.call(arg);
	return output.substring((output.indexOf(" ") + 1), output.length - 1);
	// above return code eliminates the '[object' at start and ']' at end;
}

// STRINGIFY ME:
// function stringify (aValue) {
// 	debugger;
// 	if (type(aValue) === 'Array'){
// 		if (aValue.length) {
// 			if (Array.isArray(aValue[0])) {
// 				return stringify(aValue[0]) + stringify(aValue.slice(1));
// 			} else {
// 				return 1 + stringify(aValue.slice(1));
// 			}
			
// 		} else {return 0};

// 	} else if (type(aValue) === 'Object') {
// 		return '{}';
// 	} else if (type(aValue) === 'String') {
// 		return '"abc"';
// 	} else {
// 		return String(aValue); // found this in forum - not sure I'd have it otherwise
// 	}
// }
// stringify actual soln.
function stringify(obj) {
    if(type(obj) === 'String') {
        return '"' + obj + '"';
    }
    if(type(obj) === 'Array') {
        var result = obj.map(function(o){
            return stringify(o);
        });   
        return '[' + result.join(',') + ']';
    }

    if(type(obj) === "Object") {
		var result = [];
		Object.keys(obj).forEach(function(key){
			var val = stringify(obj[key]);
				result.push('"' + key + '": ' + val);

		});
		return "{" + result.join(",") + "}";
	}

    return obj + "";
}






















